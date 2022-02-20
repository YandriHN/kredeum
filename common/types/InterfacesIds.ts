/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface InterfacesIdsInterface extends utils.Interface {
  contractName: "InterfacesIds";
  functions: {
    "ids()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "ids", values?: undefined): string;

  decodeFunctionResult(functionFragment: "ids", data: BytesLike): Result;

  events: {};
}

export interface InterfacesIds extends BaseContract {
  contractName: "InterfacesIds";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: InterfacesIdsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ids(
      overrides?: CallOverrides
    ): Promise<[string[]] & { interfacesIds: string[] }>;
  };

  ids(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    ids(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    ids(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ids(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}