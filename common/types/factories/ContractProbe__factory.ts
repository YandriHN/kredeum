/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ContractProbe, ContractProbeInterface } from "../ContractProbe";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "probe",
    outputs: [
      {
        name: "isContract",
        type: "bool",
      },
      {
        name: "forwardedTo",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610670806100206000396000f300608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063275e5da514610046575b600080fd5b34801561005257600080fd5b50610087600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506100d4565b60405180831515151581526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390f35b6000806060600060606000806000606060405190810160405280602d81526020017f363d3d373d3d3d363d73bebebebebebebebebebebebebebebebebebebebe5af481526020017f3d82803e903d91602b57fd5bf3000000000000000000000000000000000000008152509550883b9450600085119750889650602d8511158015610160575060298510155b1561063957600192506040519350601f19601f6020870101168401604052848452846000602086018b3c600091505b82801561019c5750600982105b156102a75785828151811015156101af57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916848381518110151561022a57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149250818060010192505061018f565b600091505b8280156102b95750600f82105b1561052e57600482141561041b5784602d0386600184602d03038151811015156102df57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027f01000000000000000000000000000000000000000000000000000000000000009004037f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191684600184875103038151811015156103a657fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149250610521565b85600183602d030381518110151561042f57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191684600184875103038151811015156104b057fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161492505b81806001019250506102ac565b84602d036073037f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191684600981518110151561058857fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614151561060157600092505b821561063857601e840151905073ffffffffffffffffffffffffffffffffffffffff81169050600885602d0302819060020a900496505b5b5050505050509150915600a165627a7a72305820a50678f844b16db1c2f737f1c8ca07274b3f2b7c4ee5674817c6188112fcf50e0029";

type ContractProbeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ContractProbeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ContractProbe__factory extends ContractFactory {
  constructor(...args: ContractProbeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ContractProbe";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractProbe> {
    return super.deploy(overrides || {}) as Promise<ContractProbe>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ContractProbe {
    return super.attach(address) as ContractProbe;
  }
  connect(signer: Signer): ContractProbe__factory {
    return super.connect(signer) as ContractProbe__factory;
  }
  static readonly contractName: "ContractProbe";
  public readonly contractName: "ContractProbe";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContractProbeInterface {
    return new utils.Interface(_abi) as ContractProbeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ContractProbe {
    return new Contract(address, _abi, signerOrProvider) as ContractProbe;
  }
}
