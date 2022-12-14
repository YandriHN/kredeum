import { Contract } from "ethers";

import { getNetwork, explorerContractUrl } from "@lib/common/config";

import type { OpenNFTsFactoryV3 } from "@soltypes/src/OpenNFTsFactoryV3";
import abiOpenNFTsFactoryV3 from "@abis/src/OpenNFTsFactoryV3.sol/OpenNFTsFactoryV3.json";
import { providerGetSignerOrProvider } from "./provider-get";

// Cache nftsFactory(chainId)
const nftsFactoriesCache: Map<string, Contract> = new Map();

//  GET NFTsFactory address
const factoryGetAddress = (chainId: number): string => getNetwork(chainId)?.nftsFactoryV3 || "";

// GET NFTsFactory explorer URL
const factoryGetExplorerUrl = (chainId: number): string => explorerContractUrl(chainId, factoryGetAddress(chainId));

// GET NFTsFactory Contract
const factoryGetContract = async (chainId: number, getSigner = false): Promise<OpenNFTsFactoryV3> => {
  // console.log("factoryGetContract ~ signerAddress", signerAddress);

  let nftsFactory = nftsFactoriesCache.get(String(chainId));

  if (!nftsFactory) {
    const signerOrProvider = await providerGetSignerOrProvider(chainId, getSigner);

    nftsFactory = new Contract(factoryGetAddress(chainId), abiOpenNFTsFactoryV3, signerOrProvider);

    nftsFactoriesCache.set(String(chainId), nftsFactory);
  }

  // console.log("factoryGetContract", chainId, nftsFactory);
  return nftsFactory as OpenNFTsFactoryV3;
};

// GET OpenNFTs default template via onchain call
const factoryGetTemplateAddress = async (chainId: number, template: string): Promise<string> => {
  // console.log("factoryGetTemplateAddress", chainId, template);

  const nftsFactory = await factoryGetContract(chainId);
  const templateAddress = await nftsFactory.templates(template);

  // console.log("factoryGetTemplateAddress", chainId, template, templateAddress);
  return templateAddress;
};

export { factoryGetAddress, factoryGetContract, factoryGetExplorerUrl, factoryGetTemplateAddress };
