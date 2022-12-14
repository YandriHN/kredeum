import type { TransactionResponse, TransactionReceipt } from "@ethersproject/providers";

import { collectionGetContract } from "@lib/collection/collection-get";
import { explorerTxLog } from "../common/config";
import { BigNumberish } from "ethers";
import { IOpenAutoMarket } from "@soltypes/index";

async function* buyNft(
  chainId: number,
  address: string,
  tokenID: string,
  nftPrice: BigNumberish
): AsyncGenerator<TransactionResponse | TransactionReceipt | Record<string, never>> {
  // console.log("setTokenPrice", chainId, address, tokenID, signer, nftPrice);

  if (!(chainId && address && tokenID && nftPrice)) return {};

  const { contract, collection, signer } = await collectionGetContract(chainId, address, true);
  if (!(contract && signer && collection.supports?.IOpenAutoMarket)) return {};

  const txResp: TransactionResponse | undefined = await (contract as IOpenAutoMarket).buy(tokenID, {
    value: String(nftPrice)
  });

  if (!txResp) return {};
  explorerTxLog(chainId, txResp);

  yield txResp;
  yield await txResp.wait();
}

export { buyNft };