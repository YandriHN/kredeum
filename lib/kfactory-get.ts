import type { NFTsFactory } from "../solidity/types/NFTsFactory";

import type { Provider } from "@ethersproject/abstract-provider";
import type { Address } from "./ktypes";

import { Signer, Contract } from "ethers";
import { abis, getChecksumAddress, getNetwork } from "./kconfig";

const nftsFactories: Map<number, NFTsFactory> = new Map();

// GET OpenNFTs default template via onchain call
const factoryGetOpenNFTsDefault = async (chainId: number, provider: Provider): Promise<Address | undefined> => {
  const nftsFactory = factoryGetContract(chainId, provider);
  const template = await nftsFactory.template();
  return template ? template : "";
};

// GET NFTsFactory Address
const factoryGetAddress = (chainId: number): Address | undefined =>
  getChecksumAddress(getNetwork(chainId)?.nftsFactory);

// GET NFTsFactory Contract
const factoryGetContract = (chainId: number, signerOrProvider: Signer | Provider): NFTsFactory | undefined => {
  // console.log("factoryGetContract", chainId);

  let nftsFactory: NFTsFactory;

  if (chainId && signerOrProvider) {
    nftsFactory = nftsFactories.get(chainId);
    if (!nftsFactory) {
      const nftsFactoryAddress = factoryGetAddress(chainId);
      if (nftsFactoryAddress) {
        nftsFactory = new Contract(
          nftsFactoryAddress,
          abis.CloneFactory.abi.concat(abis.NFTsFactory.abi),
          signerOrProvider
        ) as NFTsFactory;
        nftsFactories.set(chainId, nftsFactory);
      }
    }
  }
  return nftsFactory;
};

export { factoryGetContract, factoryGetAddress, factoryGetOpenNFTsDefault };
export type { NFTsFactory };
