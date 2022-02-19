/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OpenNFTsV1, OpenNFTsV1Interface } from "../OpenNFTsV1";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        internalType: "string",
        name: "jsonURI",
        type: "string",
      },
    ],
    name: "mintNFT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600981526020017f4f70656e204e46547300000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4e46540000000000000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620000b8565b508060019080519060200190620000af929190620000b8565b505050620001cd565b828054620000c69062000197565b90600052602060002090601f016020900481019282620000ea576000855562000136565b82601f106200010557805160ff191683800117855562000136565b8280016001018555821562000136579182015b828111156200013557825182559160200191906001019062000118565b5b50905062000145919062000149565b5090565b5b80821115620001645760008160009055506001016200014a565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001b057607f821691505b60208210811415620001c757620001c662000168565b5b50919050565b61348f80620001dd6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80634f6ccce7116100a2578063a22cb46511610071578063a22cb465146102de578063b88d4fde146102fa578063c87b56dd14610316578063e985e9c514610346578063eacabe14146103765761010b565b80634f6ccce7146102305780636352211e1461026057806370a082311461029057806395d89b41146102c05761010b565b806318160ddd116100de57806318160ddd146101aa57806323b872dd146101c85780632f745c59146101e457806342842e0e146102145761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a6004803603810190610125919061209e565b6103a6565b60405161013791906120e6565b60405180910390f35b610148610420565b604051610155919061219a565b60405180910390f35b610178600480360381019061017391906121f2565b6104b2565b6040516101859190612260565b60405180910390f35b6101a860048036038101906101a391906122a7565b610537565b005b6101b261064f565b6040516101bf91906122f6565b60405180910390f35b6101e260048036038101906101dd9190612311565b61065c565b005b6101fe60048036038101906101f991906122a7565b6106bc565b60405161020b91906122f6565b60405180910390f35b61022e60048036038101906102299190612311565b610761565b005b61024a600480360381019061024591906121f2565b610781565b60405161025791906122f6565b60405180910390f35b61027a600480360381019061027591906121f2565b6107f2565b6040516102879190612260565b60405180910390f35b6102aa60048036038101906102a59190612364565b6108a4565b6040516102b791906122f6565b60405180910390f35b6102c861095c565b6040516102d5919061219a565b60405180910390f35b6102f860048036038101906102f391906123bd565b6109ee565b005b610314600480360381019061030f9190612532565b610a04565b005b610330600480360381019061032b91906121f2565b610a66565b60405161033d919061219a565b60405180910390f35b610360600480360381019061035b91906125b5565b610a78565b60405161036d91906120e6565b60405180910390f35b610390600480360381019061038b9190612696565b610b0c565b60405161039d91906122f6565b60405180910390f35b60007feacabe14000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610419575061041882610b44565b5b9050919050565b60606000805461042f90612721565b80601f016020809104026020016040519081016040528092919081815260200182805461045b90612721565b80156104a85780601f1061047d576101008083540402835291602001916104a8565b820191906000526020600020905b81548152906001019060200180831161048b57829003601f168201915b5050505050905090565b60006104bd82610bbe565b6104fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f3906127c5565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610542826107f2565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105aa90612857565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105d2610c2a565b73ffffffffffffffffffffffffffffffffffffffff1614806106015750610600816105fb610c2a565b610a78565b5b610640576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610637906128e9565b60405180910390fd5b61064a8383610c32565b505050565b6000600880549050905090565b61066d610667610c2a565b82610ceb565b6106ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a39061297b565b60405180910390fd5b6106b7838383610dc9565b505050565b60006106c7836108a4565b8210610708576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ff90612a0d565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b61077c83838360405180602001604052806000815250610a04565b505050565b600061078b61064f565b82106107cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c390612a9f565b60405180910390fd5b600882815481106107e0576107df612abf565b5b90600052602060002001549050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561089b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089290612b60565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610915576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090c90612bf2565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461096b90612721565b80601f016020809104026020016040519081016040528092919081815260200182805461099790612721565b80156109e45780601f106109b9576101008083540402835291602001916109e4565b820191906000526020600020905b8154815290600101906020018083116109c757829003601f168201915b5050505050905090565b610a006109f9610c2a565b8383611030565b5050565b610a15610a0f610c2a565b83610ceb565b610a54576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4b9061297b565b60405180910390fd5b610a608484848461119d565b50505050565b6060610a71826111f9565b9050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000610b18600b61134b565b6000610b24600b611361565b9050610b30848261136f565b610b3a818461138d565b8091505092915050565b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610bb75750610bb682611401565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610ca5836107f2565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610cf682610bbe565b610d35576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2c90612c84565b60405180910390fd5b6000610d40836107f2565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610daf57508373ffffffffffffffffffffffffffffffffffffffff16610d97846104b2565b73ffffffffffffffffffffffffffffffffffffffff16145b80610dc05750610dbf8185610a78565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610de9826107f2565b73ffffffffffffffffffffffffffffffffffffffff1614610e3f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3690612d16565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610eaf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ea690612da8565b60405180910390fd5b610eba8383836114e3565b610ec5600082610c32565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f159190612df7565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f6c9190612e2b565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461102b8383836114f3565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561109f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109690612ecd565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161119091906120e6565b60405180910390a3505050565b6111a8848484610dc9565b6111b4848484846114f8565b6111f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ea90612f5f565b60405180910390fd5b50505050565b606061120482610bbe565b611243576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161123a90612ff1565b60405180910390fd5b6000600a6000848152602001908152602001600020805461126390612721565b80601f016020809104026020016040519081016040528092919081815260200182805461128f90612721565b80156112dc5780601f106112b1576101008083540402835291602001916112dc565b820191906000526020600020905b8154815290600101906020018083116112bf57829003601f168201915b5050505050905060006112ed61168f565b9050600081511415611303578192505050611346565b60008251111561133857808260405160200161132092919061304d565b60405160208183030381529060405292505050611346565b611341846116a6565b925050505b919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b61138982826040518060200160405280600081525061174d565b5050565b61139682610bbe565b6113d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113cc906130e3565b60405180910390fd5b80600a600084815260200190815260200160002090805190602001906113fc929190611f8f565b505050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806114cc57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806114dc57506114db826117a8565b5b9050919050565b6114ee838383611812565b505050565b505050565b60006115198473ffffffffffffffffffffffffffffffffffffffff16611926565b15611682578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611542610c2a565b8786866040518563ffffffff1660e01b81526004016115649493929190613158565b602060405180830381600087803b15801561157e57600080fd5b505af19250505080156115af57506040513d601f19601f820116820180604052508101906115ac91906131b9565b60015b611632573d80600081146115df576040519150601f19603f3d011682016040523d82523d6000602084013e6115e4565b606091505b5060008151141561162a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161162190612f5f565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611687565b600190505b949350505050565b606060405180602001604052806000815250905090565b60606116b182610bbe565b6116f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116e790613258565b60405180910390fd5b60006116fa61168f565b9050600081511161171a5760405180602001604052806000815250611745565b8061172484611949565b60405160200161173592919061304d565b6040516020818303038152906040525b915050919050565b6117578383611aaa565b61176460008484846114f8565b6117a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161179a90612f5f565b60405180910390fd5b505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61181d838383611c84565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156118605761185b81611c89565b61189f565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461189e5761189d8382611cd2565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156118e2576118dd81611e3f565b611921565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146119205761191f8282611f10565b5b5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60606000821415611991576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611aa5565b600082905060005b600082146119c35780806119ac90613278565b915050600a826119bc91906132f0565b9150611999565b60008167ffffffffffffffff8111156119df576119de612407565b5b6040519080825280601f01601f191660200182016040528015611a115781602001600182028036833780820191505090505b5090505b60008514611a9e57600182611a2a9190612df7565b9150600a85611a399190613321565b6030611a459190612e2b565b60f81b818381518110611a5b57611a5a612abf565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611a9791906132f0565b9450611a15565b8093505050505b919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b1a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b119061339e565b60405180910390fd5b611b2381610bbe565b15611b63576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b5a9061340a565b60405180910390fd5b611b6f600083836114e3565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611bbf9190612e2b565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611c80600083836114f3565b5050565b505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006001611cdf846108a4565b611ce99190612df7565b9050600060076000848152602001908152602001600020549050818114611dce576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816007600083815260200190815260200160002081905550505b6007600084815260200190815260200160002060009055600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b60006001600880549050611e539190612df7565b9050600060096000848152602001908152602001600020549050600060088381548110611e8357611e82612abf565b5b906000526020600020015490508060088381548110611ea557611ea4612abf565b5b906000526020600020018190555081600960008381526020019081526020016000208190555060096000858152602001908152602001600020600090556008805480611ef457611ef361342a565b5b6001900381819060005260206000200160009055905550505050565b6000611f1b836108a4565b905081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806007600084815260200190815260200160002081905550505050565b828054611f9b90612721565b90600052602060002090601f016020900481019282611fbd5760008555612004565b82601f10611fd657805160ff1916838001178555612004565b82800160010185558215612004579182015b82811115612003578251825591602001919060010190611fe8565b5b5090506120119190612015565b5090565b5b8082111561202e576000816000905550600101612016565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61207b81612046565b811461208657600080fd5b50565b60008135905061209881612072565b92915050565b6000602082840312156120b4576120b361203c565b5b60006120c284828501612089565b91505092915050565b60008115159050919050565b6120e0816120cb565b82525050565b60006020820190506120fb60008301846120d7565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561213b578082015181840152602081019050612120565b8381111561214a576000848401525b50505050565b6000601f19601f8301169050919050565b600061216c82612101565b612176818561210c565b935061218681856020860161211d565b61218f81612150565b840191505092915050565b600060208201905081810360008301526121b48184612161565b905092915050565b6000819050919050565b6121cf816121bc565b81146121da57600080fd5b50565b6000813590506121ec816121c6565b92915050565b6000602082840312156122085761220761203c565b5b6000612216848285016121dd565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061224a8261221f565b9050919050565b61225a8161223f565b82525050565b60006020820190506122756000830184612251565b92915050565b6122848161223f565b811461228f57600080fd5b50565b6000813590506122a18161227b565b92915050565b600080604083850312156122be576122bd61203c565b5b60006122cc85828601612292565b92505060206122dd858286016121dd565b9150509250929050565b6122f0816121bc565b82525050565b600060208201905061230b60008301846122e7565b92915050565b60008060006060848603121561232a5761232961203c565b5b600061233886828701612292565b935050602061234986828701612292565b925050604061235a868287016121dd565b9150509250925092565b60006020828403121561237a5761237961203c565b5b600061238884828501612292565b91505092915050565b61239a816120cb565b81146123a557600080fd5b50565b6000813590506123b781612391565b92915050565b600080604083850312156123d4576123d361203c565b5b60006123e285828601612292565b92505060206123f3858286016123a8565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61243f82612150565b810181811067ffffffffffffffff8211171561245e5761245d612407565b5b80604052505050565b6000612471612032565b905061247d8282612436565b919050565b600067ffffffffffffffff82111561249d5761249c612407565b5b6124a682612150565b9050602081019050919050565b82818337600083830152505050565b60006124d56124d084612482565b612467565b9050828152602081018484840111156124f1576124f0612402565b5b6124fc8482856124b3565b509392505050565b600082601f830112612519576125186123fd565b5b81356125298482602086016124c2565b91505092915050565b6000806000806080858703121561254c5761254b61203c565b5b600061255a87828801612292565b945050602061256b87828801612292565b935050604061257c878288016121dd565b925050606085013567ffffffffffffffff81111561259d5761259c612041565b5b6125a987828801612504565b91505092959194509250565b600080604083850312156125cc576125cb61203c565b5b60006125da85828601612292565b92505060206125eb85828601612292565b9150509250929050565b600067ffffffffffffffff8211156126105761260f612407565b5b61261982612150565b9050602081019050919050565b6000612639612634846125f5565b612467565b90508281526020810184848401111561265557612654612402565b5b6126608482856124b3565b509392505050565b600082601f83011261267d5761267c6123fd565b5b813561268d848260208601612626565b91505092915050565b600080604083850312156126ad576126ac61203c565b5b60006126bb85828601612292565b925050602083013567ffffffffffffffff8111156126dc576126db612041565b5b6126e885828601612668565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061273957607f821691505b6020821081141561274d5761274c6126f2565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b60006127af602c8361210c565b91506127ba82612753565b604082019050919050565b600060208201905081810360008301526127de816127a2565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061284160218361210c565b915061284c826127e5565b604082019050919050565b6000602082019050818103600083015261287081612834565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b60006128d360388361210c565b91506128de82612877565b604082019050919050565b60006020820190508181036000830152612902816128c6565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b600061296560318361210c565b915061297082612909565b604082019050919050565b6000602082019050818103600083015261299481612958565b9050919050565b7f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b60006129f7602b8361210c565b9150612a028261299b565b604082019050919050565b60006020820190508181036000830152612a26816129ea565b9050919050565b7f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b6000612a89602c8361210c565b9150612a9482612a2d565b604082019050919050565b60006020820190508181036000830152612ab881612a7c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b6000612b4a60298361210c565b9150612b5582612aee565b604082019050919050565b60006020820190508181036000830152612b7981612b3d565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b6000612bdc602a8361210c565b9150612be782612b80565b604082019050919050565b60006020820190508181036000830152612c0b81612bcf565b9050919050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000612c6e602c8361210c565b9150612c7982612c12565b604082019050919050565b60006020820190508181036000830152612c9d81612c61565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612d0060258361210c565b9150612d0b82612ca4565b604082019050919050565b60006020820190508181036000830152612d2f81612cf3565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612d9260248361210c565b9150612d9d82612d36565b604082019050919050565b60006020820190508181036000830152612dc181612d85565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612e02826121bc565b9150612e0d836121bc565b925082821015612e2057612e1f612dc8565b5b828203905092915050565b6000612e36826121bc565b9150612e41836121bc565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612e7657612e75612dc8565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612eb760198361210c565b9150612ec282612e81565b602082019050919050565b60006020820190508181036000830152612ee681612eaa565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612f4960328361210c565b9150612f5482612eed565b604082019050919050565b60006020820190508181036000830152612f7881612f3c565b9050919050565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b6000612fdb60318361210c565b9150612fe682612f7f565b604082019050919050565b6000602082019050818103600083015261300a81612fce565b9050919050565b600081905092915050565b600061302782612101565b6130318185613011565b935061304181856020860161211d565b80840191505092915050565b6000613059828561301c565b9150613065828461301c565b91508190509392505050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b60006130cd602e8361210c565b91506130d882613071565b604082019050919050565b600060208201905081810360008301526130fc816130c0565b9050919050565b600081519050919050565b600082825260208201905092915050565b600061312a82613103565b613134818561310e565b935061314481856020860161211d565b61314d81612150565b840191505092915050565b600060808201905061316d6000830187612251565b61317a6020830186612251565b61318760408301856122e7565b8181036060830152613199818461311f565b905095945050505050565b6000815190506131b381612072565b92915050565b6000602082840312156131cf576131ce61203c565b5b60006131dd848285016131a4565b91505092915050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000613242602f8361210c565b915061324d826131e6565b604082019050919050565b6000602082019050818103600083015261327181613235565b9050919050565b6000613283826121bc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156132b6576132b5612dc8565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006132fb826121bc565b9150613306836121bc565b925082613316576133156132c1565b5b828204905092915050565b600061332c826121bc565b9150613337836121bc565b925082613347576133466132c1565b5b828206905092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b600061338860208361210c565b915061339382613352565b602082019050919050565b600060208201905081810360008301526133b78161337b565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b60006133f4601c8361210c565b91506133ff826133be565b602082019050919050565b60006020820190508181036000830152613423816133e7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea264697066735822122080ee73ec681fc20e2f82c658e0ee84333349fff161e6163dbe7671f88ae1ae4764736f6c63430008090033";

type OpenNFTsV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OpenNFTsV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OpenNFTsV1__factory extends ContractFactory {
  constructor(...args: OpenNFTsV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "OpenNFTsV1";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OpenNFTsV1> {
    return super.deploy(overrides || {}) as Promise<OpenNFTsV1>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OpenNFTsV1 {
    return super.attach(address) as OpenNFTsV1;
  }
  connect(signer: Signer): OpenNFTsV1__factory {
    return super.connect(signer) as OpenNFTsV1__factory;
  }
  static readonly contractName: "OpenNFTsV1";
  public readonly contractName: "OpenNFTsV1";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OpenNFTsV1Interface {
    return new utils.Interface(_abi) as OpenNFTsV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OpenNFTsV1 {
    return new Contract(address, _abi, signerOrProvider) as OpenNFTsV1;
  }
}
