import { constants, BigNumber } from "ethers";

import type { CollectionType } from "@lib/common/ktypes";
import { getChainName, getChecksumAddress, DEFAULT_NAME, DEFAULT_SYMBOL } from "@lib/common/kconfig";
import { resolverConvSupports } from "@lib/resolver/resolver-conv-supports";

import { IOpenNFTsInfos, IERCNftInfos } from "@soltypes/contracts/next/OpenNFTsResolver";

const resolverConvCollectionInfos = (
  chainId: number,
  collectionInfos: IERCNftInfos.CollectionInfosStructOutput,
  account = constants.AddressZero
): CollectionType => {
  // console.log("resolverConvCollectionInfos  IN", chainId, collectionInfos, account);

  const chainName = getChainName(chainId);
  const address: string = getChecksumAddress(collectionInfos[0]);
  const name: string = collectionInfos[2] || DEFAULT_NAME;
  const symbol: string = collectionInfos[3] || DEFAULT_SYMBOL;
  const supports = resolverConvSupports(collectionInfos[7]);

  const collection: CollectionType = { chainId, chainName, address, name, symbol, supports };

  const totalSupply = Number(collectionInfos[4]);
  if (totalSupply > 0) collection.totalSupply = totalSupply;

  const owner: string = getChecksumAddress(collectionInfos[1]);
  if (owner && owner != constants.AddressZero) collection.owner = owner;

  if (collectionInfos[7][2] && account != constants.AddressZero) {
    // ERC721
    collection.balancesOf = new Map([[account, Number(collectionInfos[5])]]);
    collection.approvedForAll = new Map([[account, Boolean(collectionInfos[6])]]);
  }

  // console.log("resolverConvCollectionInfos OUT", collection);
  return collection;
};

const resolverConvOpenNFTsCollectionInfos = (
  chainId: number,
  collectionInfos: [IERCNftInfos.CollectionInfosStructOutput, IOpenNFTsInfos.OpenNFTsCollectionInfosStructOutput],
  account = constants.AddressZero
): CollectionType => {
  // console.log("resolverConvOpenNFTsCollectionInfos openNFTs IN", collectionInfos);

  const collection = resolverConvCollectionInfos(chainId, collectionInfos[0], account);

  const collectionOpenNFTsInfos = collectionInfos[1];

  const open = collectionOpenNFTsInfos[2];
  if (open) collection.open = open;

  const version = Number(collectionOpenNFTsInfos[0]);
  if (version > 0) collection.version = version;

  const template = collectionOpenNFTsInfos[1] || "";
  if (template) collection.template = template;

  const price = BigNumber.from(collectionOpenNFTsInfos[3] || 0);
  if (price.gt(0)) collection.price = price;

  const royaltyAccount = collectionOpenNFTsInfos[4][0];
  if (royaltyAccount && royaltyAccount != constants.AddressZero) collection.royaltyAccount = royaltyAccount;

  const royaltyFee = Number(collectionOpenNFTsInfos[4][1]);
  if (royaltyFee > 0) collection.royaltyFee = royaltyFee;

  const royaltyMinimum = BigNumber.from(collectionOpenNFTsInfos[4][2] || 0);
  if (royaltyMinimum.gt(0)) collection.royaltyMinimum = royaltyMinimum;

  // console.log("resolverConvOpenNFTsCollectionInfos collection OUT", collection);
  return collection;
};

export { resolverConvCollectionInfos, resolverConvOpenNFTsCollectionInfos };
