import type { CollectionType } from "./ktypes";
import type { Provider } from "@ethersproject/abstract-provider";

import { BigNumber } from "ethers";
import { DEFAULT_NAME, DEFAULT_SYMBOL } from "./kconfig";

import { factoryGetContract } from "./kfactory-get";
import { collectionMerge } from "./kcollection-get";

import { getChecksumAddress, getNetwork, collectionUrl, collectionListKey } from "./kconfig";

import { alchemyGet, alchemyCollectionList } from "lib/api-alchemy";
import { covalentGet, covalentCollectionList } from "lib/api-covalent";
import { thegraphGet, thegraphCollectionList } from "lib/api-thegraph";
import { moralisGet, moralisCollectionList } from "lib/api-moralis";

// Merge 2 collections list into 1
const collectionListMerge = (
  colList1: Map<string, CollectionType>,
  colList2: Map<string, CollectionType>
): Map<string, CollectionType> => {
  const collList = colList2;
  if (colList1) {
    for (const [key, coll1] of colList1.entries()) {
      // console.log(key, coll1);
      const coll2 = colList2.get(key);
      if (coll2) {
        const mergedColl = collectionMerge(coll1, coll2);
        colList2.set(key, mergedColl);
      } else {
        colList2.set(key, coll1);
      }
    }
  }
  return collList;
};

const collectionListFromFactory = async (
  chainId: number,
  account: string,
  provider: Provider
): Promise<Map<string, CollectionType>> => {
  // console.log(`collectionListFromFactory ${collectionListKey(chainId, account)}\n`, chainId, account);
  const network = getNetwork(chainId);

  const collections: Map<string, CollectionType> = new Map();

  const nftsFactory = factoryGetContract(chainId, provider);

  if (nftsFactory) {
    type BalanceOf = [string, BigNumber, string, string, string, BigNumber];
    const balances: Array<BalanceOf> = await nftsFactory.balancesOf(account);
    // console.log("collectionListFromFactory balances", balances);

    for (let index = 0; index < balances.length; index++) {
      const chainName = network?.chainName;
      const balance: BalanceOf = balances[index];

      const address: string = getChecksumAddress(balance[0]);
      const owner: string = getChecksumAddress(balance[2]);
      const name: string = balance[3] || DEFAULT_NAME;
      const symbol: string = balance[4] || DEFAULT_SYMBOL;
      const totalSupply = Number(balance[5]);
      const balanceOf = Number(balance[1]);

      const collection: CollectionType = {
        chainId,
        chainName,
        address,
        owner,
        name,
        symbol,
        totalSupply
      };
      collection.balancesOf = new Map([[account, balanceOf]]);
      collections.set(collectionUrl(chainId, address), collection);
    }
  }
  // console.log(`collectionListFromFactory ${collectionListKey(chainId, account)}\n`, collections);
  return collections;
};

const collectionList = async (
  chainId: number,
  account: string,
  provider: Provider,
  mintable?: boolean
): Promise<Map<string, CollectionType>> => {
  // console.log(`collectionList ${collectionListKey(chainId, account)}\n`);

  let collections: Map<string, CollectionType> = new Map();

  const network = getNetwork(chainId);
  if (network && account) {
    let collectionsOwner: Map<string, CollectionType> = new Map();
    let collectionsKredeum: Map<string, CollectionType> = new Map();

    // GET user collections
    if (alchemyGet(chainId)) {
      collectionsOwner = await alchemyCollectionList(chainId, account);
      // console.log("collectionList alchemyCollectionList", collectionsOwner);
    } else if (thegraphGet(chainId)) {
      collectionsOwner = await thegraphCollectionList(chainId, account);
      // console.log("collectionList thegraphCollectionList", collectionsOwner);
    } else if (moralisGet(chainId)) {
      collectionsOwner = await moralisCollectionList(chainId, account);
    } else if (covalentGet(chainId)) {
      collectionsOwner = await covalentCollectionList(chainId, account);
      // console.log("collectionList covalentCollectionList", collectionsOwner);
    }
    collectionsKredeum = await collectionListFromFactory(chainId, account, provider);
    // console.log("collectionList collectionListFromFactory", collectionsKredeum);

    // MERGE collectionsOwner and collectionsKredeum
    collections = collectionListMerge(collectionsOwner, collectionsKredeum);
    // console.log("collectionList merge", collections);
  }

  if (mintable) {
    // filter mintable collection
    collections = new Map(
      [...collections].filter(([, coll]) => coll.open || (coll.owner === account && coll.version == 3))
    );
  }

  // console.log(`collectionList ${collectionListKey(chainId, account)}\n`, collections);
  return collections;
};

export {
  collectionList,
  collectionListMerge,
  moralisCollectionList as collectionListMoralis,
  alchemyCollectionList as collectionListAlchemy,
  thegraphCollectionList as collectionListFromTheGraph,
  covalentCollectionList as collectionListFromCovalent,
  collectionListFromFactory
};
