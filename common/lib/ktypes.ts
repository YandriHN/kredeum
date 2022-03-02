type OpenNFTsKeys = "IOpenNFTsV3" | "IOpenNFTsV2" | "IOpenNFTsV1" | "IOpenNFTs";
type ErcKeys = "IERC165" | "IERC721" | "IERC721Metadata" | "IERC721Enumerable" | "IERC1155" | "IERC1155MetadataURI";
type AbiType = { abi: Array<string>; interfaceId?: string };
type ABIS = ErcKeys | OpenNFTsKeys;

type Address = string;

type Network = {
  chainId: number;
  chainName: string;
  rpcUrls: Array<string>;
  iconUrls?: Array<string>;
  nativeCurrency: { name: string; symbol: string; decimals: number };
  blockExplorerUrls: Array<string>;
  subgraph?: {
    url?: string;
    startBlock?: number;
    active?: boolean;
  };
  covalent?: { active: boolean };
  mainnet?: boolean;
  testnet?: boolean;
  create?: boolean;
  admin?: string;
  openSea?: { assets?: string; openNFTs?: string };
  nftsFactory?: string;
  nftsFactoryV2?: string;
  eip1559?: boolean;
};

type Collection = {
  openNFTsVersion?: number;
  chainId: number;
  address: string;
  owner?: string;
  name?: string;
  symbol?: string;
  chainName?: string;
  interfaces?: Array<string>;
  totalSupply?: number;
  startBlock?: number;
  description?: string;
  user?: string;
  balanceOf?: number;
  supports?: CollectionSupports;
};
type CollectionSupports = {
  IERC165?: boolean;
  IERC721?: boolean;
  IERC1155?: boolean;
  IERC721Metadata?: boolean;
  IERC721Enumerable?: boolean;
  IERC1155MetadataURI?: boolean;
  IERC173?: boolean;
  IOpenNFTs?: boolean;
  IOpenNFTsV1?: boolean;
  IOpenNFTsV2?: boolean;
  IOpenNFTsV3?: boolean;
};

type NftMetadata = {
  name?: string;
  description?: string;
  creator?: string;
  minter?: string;
  owner?: string;
  image?: string;
  image_url?: string;
  ipfs?: string;
};

type Nft = {
  chainId: number;
  collection: string;
  tokenID: string;
  tokenURI: string;
  owner: string;
  chainName?: string;
  name?: string;
  contractName?: string;
  description?: string;
  tokenJson?: NftMetadata;
  metadata?: NftMetadata;
  image?: string;
  image_url?: string;
  image_data?: string;
  external_url?: string;
  animation_url?: string;
  youtube_url?: string;
  background_color?: string;
  attributes?: unknown;
  ipfs?: string;
  ipfsJson?: string;
  origin?: string;
  creator?: string;
  minter?: string;
  nid?: string;
  contentType?: Promise<string>;
};

export type {
  Address,
  Collection,
  CollectionSupports,
  Network,
  ABIS,
  AbiType,
  Nft,
  NftMetadata,
  OpenNFTsKeys,
  ErcKeys
};
