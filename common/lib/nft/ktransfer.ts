import type { JsonRpcSigner, TransactionResponse, TransactionReceipt } from "@ethersproject/providers";

import { collectionGetContract } from "@lib/collection/kcollection-get";
import { explorerTxLog } from "@lib/common/kconfig";

import type { IERC721 } from "@soltypes/OpenNFTs/contracts/interfaces/IERC721";
import type { IERC1155 } from "@soltypes/OpenNFTs/contracts/interfaces/IERC1155";
import type { IOpenAutoMarket } from "@soltypes/contracts/interfaces/IOpenAutoMarket";
import { OpenAutoMarket } from "@soltypes/contracts";
import { constants } from "ethers";

async function* transferNft(
  chainId: number,
  address: string,
  tokenID: string,
  from: JsonRpcSigner,
  to: string
): AsyncGenerator<TransactionResponse | TransactionReceipt | Record<string, never>> {
  // console.log("transferNft", chainId, address, tokenID, to);

  if (!(chainId && address && tokenID && to && from)) return {};

  const fromAddress = await from.getAddress();
  // console.log("transferNft from", fromAddress);

  const { contract, collection } = await collectionGetContract(chainId, address, from);
  // console.log("contract", contract);

  let txResp: TransactionResponse | undefined;
  if (collection.supports?.IOpenAutoMarket) {
    let minimumRoyalty = constants.Zero;

    if (collection.minimal) {
      [, , minimumRoyalty] = await (contract as OpenAutoMarket).getTokenRoyalty(tokenID);
    }
    // console.log("minimumRoyalty", minimumRoyalty);

    txResp = await (contract as IOpenAutoMarket).gift(to, tokenID, { value: String(minimumRoyalty) });
  } else if (collection.supports?.IERC721) {
    txResp = await (contract as IERC721)["safeTransferFrom(address,address,uint256)"](fromAddress, to, tokenID);
  } else if (collection.supports?.IERC1155) {
    txResp = await (contract as IERC1155).safeTransferFrom(fromAddress, to, tokenID, 1, "0x00");
  }
  if (!txResp) return {};
  explorerTxLog(chainId, txResp);

  yield txResp;
  yield await txResp.wait();
}

export { transferNft };
