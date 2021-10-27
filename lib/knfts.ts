import { getExplorer, getOpenSea } from "./kconfig";
import type { Collection, Nft } from "./kconfig";

// CONSTANT
const ipfsGateway = "https://ipfs.io/ipfs";

// GENERIC helpers
const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));
const addressSame = (a: string, b: string): boolean => a.toLowerCase() === b.toLowerCase();

const numberToHexString = (num: number): string => `0x${num.toString(16)}`;
const textShort = (s: string = "", n: number = 16, p: number = 0): string => {
  const l = s?.toString().length;
  return s?.substring(0, n) + (l < n ? "" : "..." + (p > 0 ? s?.substring(l - p, l) : ""));
};
const addressShort = (a: string = ""): string => textShort(a, 8, 8);

const urlToLink = (url: string, label: string): string =>
  `<a href="${url}" target="_blank">${label}</a>`;

// IPFS helpers
const ipfsUrl = (cid: string): string => `ipfs://${cid}`;
const ipfsGatewayUrl = (cid: string): string => `${ipfsGateway}/${cid}`;
const ipfsGatewayLink = (cid: string): string => urlToLink(ipfsGatewayUrl(cid), `${cid}@ipfs`);

// EXPLORER helpers
const explorerUrl = (chainId: number, path: string): string =>
  getExplorer(chainId) + "/" + path.replace(/^\//, "");
const explorerLink = (chainId: number, path: string, label: string): string =>
  urlToLink(explorerUrl(chainId, path), label);
const explorerAddressLink = (chainId: number, address: string): string =>
  explorerLink(chainId, `/address/${address}`, addressShort(address));
const explorerTxLink = (chainId: number, tx: string): string =>
  explorerLink(chainId, `/tx/${tx}`, addressShort(tx));

// COLLECTION helpers
const collectionName = (collection: Collection): string => collection.name || "No name";
const collectionSymbol = (collection: Collection): string => collection.symbol || "NFT";
const collectionOpenSeaLink = (chainId: number, collAddress: string): string =>
  getOpenSea(chainId)?.kredeum;
const collectionExplorerurl = (chainId: number, collAddress: string): string =>
  getExplorer(chainId)?.includes("chainstacklabs.com")
    ? explorerUrl(chainId, `/collection/${collAddress}/tokens`)
    : explorerUrl(chainId, `/token/${collAddress}`);
const collectionExplorerInventoryUrl = (chainId: number, collAddress: string): string =>
  getExplorer(chainId)?.includes("chainstacklabs.com") ||
  getExplorer(chainId)?.includes("cchain.explorer")
    ? explorerUrl(chainId, `/tokens/${collAddress}/inventory`)
    : explorerUrl(chainId, `/token/${collAddress}#inventory`);

// NFTS helpers
const nftsSupply = (nfts: Array<Nft>): number => nfts.length || 0;
const nftsSupplyAndName = (nfts: Array<Nft>, collection: Collection): string =>
  `${nftsSupply(nfts)} ${collectionSymbol(collection)}${nftsSupply(nfts) > 1 ? "s" : ""}`;

// NFT helpers
const nftName = (nft: Nft): string => nft.name || `${nft.contractName} #${nft.tokenID}`;
const nftDescription = (nft: Nft): string =>
  (nft.name != nft.description && nft.description) || nftName(nft);
const nftDescriptionShort = (nft: Nft): string => textShort(nftDescription(nft), 140);
const nftImageLink = (nft: Nft): string =>
  nft.image?.replace("https://gateway.pinata.cloud/ipfs/", " https://ipfs.io/ipfs/");
const nftOpenSeaUrl = (chainId: number, nft: Nft): string => {
  const openSea = getOpenSea(chainId);
  return `${openSea?.assets}/${nft.collection}/${nft.tokenID}`;
};
const nftExplorerUrl = (chainId: number, nft: Nft): string =>
  getExplorer(chainId)?.includes("chainstacklabs.com")
    ? explorerUrl(chainId, `/tokens/${nft.collection}/instance/${nft.tokenID}/metadata`)
    : explorerUrl(chainId, `/token/${nft.collection}?a=${nft.tokenID}`);

export {
  sleep,
  numberToHexString,
  urlToLink,
  textShort,
  ipfsUrl,
  ipfsGatewayUrl,
  ipfsGatewayLink,
  addressSame,
  addressShort,
  collectionName,
  collectionSymbol,
  collectionExplorerInventoryUrl,
  collectionOpenSeaLink,
  collectionExplorerurl,
  nftImageLink,
  nftDescription,
  nftDescriptionShort,
  nftName,
  nftsSupplyAndName,
  nftExplorerUrl,
  nftOpenSeaUrl,
  explorerLink,
  explorerAddressLink,
  explorerTxLink
};
