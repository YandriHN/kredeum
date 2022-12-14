import { Contract, Signer } from "ethers";

import type { CollectionType, ABIS } from "@lib/common/types";
import { abis } from "@lib/common/abis";
import { resolverGetCollection } from "@lib/resolver/resolver-get-collection";
import { providerGetSignerOrProvider } from "@lib/common/provider-get";

// Cache contracts(chainId,address,getSigner)
const contractsCache: Map<string, Contract> = new Map();
// Cache signers(chainId,address)
const signersCache: Map<string, string> = new Map();

const collectionContractKey = (chainId: number, address: string, getSigner: boolean): string =>
  collectionKey(chainId, address) + (getSigner ? "/signer" : "/provider");

const collectionGetContract = async (
  chainId: number,
  address: string,
  getSigner = false
): Promise<{ contract: Contract; collection: CollectionType; signer?: string }> => {
  // console.log(`collectionGetContract  IN ${collectionKey(chainId, address)}\n`);

  const collection = await collectionGet(chainId, address);

  let signer = "";
  let contract = contractsCache.get(collectionContractKey(chainId, address, getSigner));
  if (contract && getSigner) {
    signer = signersCache.get(collectionKey(chainId, address)) || "";
  }

  if (!contract) {
    let abi: Array<string> = [];

    for (const [key, support] of Object.entries(collection.supports || {})) {
      if (support) {
        const abiKey = abis[key as ABIS];

        if (abiKey) {
          // console.log("collectionGetContract", key, abiKey);
          abi = abi.concat(abis[key as ABIS]);
        } else {
          console.error("collectionGetContract ERROR", key);
        }
      }
    }
    const signerOrProvider = await providerGetSignerOrProvider(chainId, getSigner);
    contract = new Contract(address, abi, signerOrProvider);

    contractsCache.set(collectionContractKey(chainId, address, getSigner), contract);

    if (getSigner) {
      signer = await (signerOrProvider as Signer)?.getAddress();
      signersCache.set(collectionKey(chainId, address), signer);
    }
  }

  // console.log(`collectionGetContract OUT ${collectionKey(chainId, address)}\n`, contract, collection);
  return signer ? { contract, collection, signer } : { contract, collection };
};

// Merge 2 collections into 1 (twice the same collection but with different metadata)
const collectionMerge = (col1: CollectionType, col2: CollectionType): CollectionType => {
  const collMerged: CollectionType = Object.assign({ chainId: 1, address: "" }, col1 || {}, col2 || {});

  // collection.balancesOf is a Map => needs specific merge
  if (col1?.balancesOf && col2?.balancesOf) {
    collMerged.balancesOf = new Map([...col1.balancesOf, ...col2.balancesOf]);
  }
  return collMerged;
};

const collectionGet = async (chainId: number, address: string, account?: string): Promise<CollectionType> => {
  // console.log(`collectionGet ${collectionKey(chainId, address, account)}\n`);
  let collection: CollectionType = { chainId, address };

  if (!(chainId && address)) return collection;

  try {
    collection = await resolverGetCollection(chainId, address, account);
  } catch (e) {
    console.error(`ERROR collectionGet  ${collectionKey(chainId, address, account)}\n`, e);
  }
  // console.log(`collectionGet ${collectionKey(chainId, address, account)}\n`, collection);
  return collection;
};

const collectionKey = (chainId: number, address: string, account?: string): string =>
  `collection://${String(chainId)}/${address}${account ? "@" + account : ""}`;

// UTILITY : GET Key
const collectionDefaultKey = (chainId: number, account: string): string =>
  `collectionDefault://${String(chainId)}${account ? "@" + account : ""}`;

const collectionBurnable = async (chainId: number, address: string): Promise<string> => {
  const { collection } = await collectionGetContract(chainId, address);

  return collection.version === 4 ? "burn" : "";
};

export {
  collectionGet,
  collectionMerge,
  collectionGetContract,
  collectionKey,
  collectionDefaultKey,
  collectionBurnable
};