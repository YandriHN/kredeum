import type { NftType, Properties } from "@lib/common/types";

import NftStorage from "@lib/nft/storage/nft-storage";
import { ipfsGatewayUrl, textShort, DEFAULT_NAME } from "@lib/common/config";

let nftStorage: NftStorage;

///////////////////////////////////////////////////////////////////////////////////
// GET ipfs image link
const nftIpfsImage = async (image: string, key = ""): Promise<string> => {
  nftStorage = nftStorage || new NftStorage(key);
  const ipfsImageCid = await nftStorage.pinUrl(image);
  const ipfsImage = ipfsImageCid && `ipfs://${ipfsImageCid}`;

  // console.log("nftIpfsImage", ipfsImage);
  return ipfsImage;
};

// GET ipfs metadata url
const nftIpfsJson = async (
  name = DEFAULT_NAME,
  nftDescription = "",
  ipfs = "",
  address = "",
  image = "",
  metadata = "{}",
  properties: Properties = {},
  animation_url = ""
): Promise<string> => {
  // console.log("nftIpfsJson", name, ipfs, address, image, metadata);

  const json = {
    name,
    description: nftDescription || name || "",
    image: ipfsGatewayUrl(ipfs),
    ipfs,
    origin: textShort(image, 140),
    minter: address
  } as NftType;
  if (metadata) json.metadata = JSON.parse(metadata);
  if (Object.keys(properties).length > 0) json.properties = properties;
  if (animation_url) json.animation_url = ipfsGatewayUrl(animation_url);

  const ipfsJsonCid = await nftStorage.pinJson(json);
  const ipfsJson = ipfsJsonCid && `ipfs://${ipfsJsonCid}`;

  // console.log("nftIpfsJson", ipfsJson);
  return ipfsJson;
};

export { nftIpfsImage, nftIpfsJson };