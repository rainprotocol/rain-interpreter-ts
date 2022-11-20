/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ReserveTokenTest,
  ReserveTokenTestInterface,
} from "../../../../contracts/test/testToken/ReserveTokenTest";

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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "INITIAL_MINT",
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
        name: "address_",
        type: "address",
      },
    ],
    name: "addFreezable",
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
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "freezables",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    inputs: [],
    name: "purge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "address_",
        type: "address",
      },
    ],
    name: "removeFreezable",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50620000646040518060400160405280600b81526020016a55534420436c617373696360a81b81525060405180604001604052806005815260200164555344434360d81b8152506200008d60201b60201c565b620000873362000081633b9aca00670de0b6b3a7640000620002eb565b620000fd565b62000491565b600054610100900460ff16620000ed5760405162461bcd60e51b815260206004820152602b60248201526000805160206200140e83398151915260448201526a6e697469616c697a696e6760a81b60648201526084015b60405180910390fd5b620000f98282620001f0565b5050565b6001600160a01b038216620001555760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401620000e4565b62000163600083836200026e565b80603560008282546200017791906200030b565b90915550506001600160a01b03821660009081526033602052604081208054839290620001a69084906200030b565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600054610100900460ff166200024c5760405162461bcd60e51b815260206004820152602b60248201526000805160206200140e83398151915260448201526a6e697469616c697a696e6760a81b6064820152608401620000e4565b60366200025a8382620003c5565b506037620002698282620003c5565b505050565b6001600160a01b03821615806200029e57506001600160a01b03821660009081526065602052604090205460ff16155b620002695760405162461bcd60e51b8152602060048201526006602482015265232927ad22a760d11b6044820152606401620000e4565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417620003055762000305620002d5565b92915050565b80820180821115620003055762000305620002d5565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200034c57607f821691505b6020821081036200036d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200026957600081815260208120601f850160051c810160208610156200039c5750805b601f850160051c820191505b81811015620003bd57828155600101620003a8565b505050505050565b81516001600160401b03811115620003e157620003e162000321565b620003f981620003f2845462000337565b8462000373565b602080601f831160018114620004315760008415620004185750858301515b600019600386901b1c1916600185901b178555620003bd565b600085815260208120601f198616915b82811015620004625788860151825594840194600190910190840162000441565b5085821015620004815787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610f6d80620004a16000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063a9059cbb11610066578063a9059cbb14610268578063ca7df92c1461027b578063dd62ed3e14610286578063ea49e9a2146102cc57600080fd5b806370a082311461020f57806370f0c3511461024557806395d89b411461024d578063a457c2d71461025557600080fd5b8063313ce567116100d3578063313ce5671461016b578063395093511461017a57806348422faa1461018d5780635bb9058b146101b057600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd14610158575b600080fd5b61010d610326565b60405161011a9190610d3f565b60405180910390f35b610136610131366004610dd4565b6103b8565b604051901515815260200161011a565b6035545b60405190815260200161011a565b610136610166366004610dfe565b6103d2565b6040516012815260200161011a565b610136610188366004610dd4565b6103f6565b61013661019b366004610e3a565b60656020526000908152604090205460ff1681565b61020d6101be366004610e3a565b73ffffffffffffffffffffffffffffffffffffffff16600090815260656020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b005b61014a61021d366004610e3a565b73ffffffffffffffffffffffffffffffffffffffff1660009081526033602052604090205490565b61020d610442565b61010d61045e565b610136610263366004610dd4565b61046d565b610136610276366004610dd4565b610543565b61014a633b9aca0081565b61014a610294366004610e5c565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260346020908152604080832093909416825291909152205490565b61020d6102da366004610e3a565b73ffffffffffffffffffffffffffffffffffffffff16600090815260656020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60606036805461033590610e8f565b80601f016020809104026020016040519081016040528092919081815260200182805461036190610e8f565b80156103ae5780601f10610383576101008083540402835291602001916103ae565b820191906000526020600020905b81548152906001019060200180831161039157829003601f168201915b5050505050905090565b6000336103c6818585610551565b60019150505b92915050565b6000336103e0858285610705565b6103eb8585856107dc565b506001949350505050565b33600081815260346020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906103c6908290869061043d908790610f11565b610551565b3360008181526033602052604090205461045c9190610a9a565b565b60606037805461033590610e8f565b33600081815260346020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015610536576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103eb8286868403610551565b6000336103c68185856107dc565b73ffffffffffffffffffffffffffffffffffffffff83166105f3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161052d565b73ffffffffffffffffffffffffffffffffffffffff8216610696576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161052d565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152603460209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107d657818110156107c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161052d565b6107d68484848403610551565b50505050565b73ffffffffffffffffffffffffffffffffffffffff831661087f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161052d565b73ffffffffffffffffffffffffffffffffffffffff8216610922576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161052d565b61092d838383610c90565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260336020526040902054818110156109e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161052d565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260336020526040808220858503905591851681529081208054849290610a27908490610f11565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a8d91815260200190565b60405180910390a36107d6565b73ffffffffffffffffffffffffffffffffffffffff8216610b3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161052d565b610b4982600083610c90565b73ffffffffffffffffffffffffffffffffffffffff821660009081526033602052604090205481811015610bff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161052d565b73ffffffffffffffffffffffffffffffffffffffff83166000908152603360205260408120838303905560358054849290610c3b908490610f24565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016106f8565b505050565b73ffffffffffffffffffffffffffffffffffffffff82161580610cd9575073ffffffffffffffffffffffffffffffffffffffff821660009081526065602052604090205460ff16155b610c8b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f46524f5a454e0000000000000000000000000000000000000000000000000000604482015260640161052d565b600060208083528351808285015260005b81811015610d6c57858101830151858201604001528201610d50565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610dcf57600080fd5b919050565b60008060408385031215610de757600080fd5b610df083610dab565b946020939093013593505050565b600080600060608486031215610e1357600080fd5b610e1c84610dab565b9250610e2a60208501610dab565b9150604084013590509250925092565b600060208284031215610e4c57600080fd5b610e5582610dab565b9392505050565b60008060408385031215610e6f57600080fd5b610e7883610dab565b9150610e8660208401610dab565b90509250929050565b600181811c90821680610ea357607f821691505b602082108103610edc577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156103cc576103cc610ee2565b818103818111156103cc576103cc610ee256fea2646970667358221220215d5669e84bfe4030fc4fb81a1d86c8a407480c0a97ea6d16affc610947772764736f6c63430008110033496e697469616c697a61626c653a20636f6e7472616374206973206e6f742069";

type ReserveTokenTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReserveTokenTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReserveTokenTest__factory extends ContractFactory {
  constructor(...args: ReserveTokenTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReserveTokenTest> {
    return super.deploy(overrides || {}) as Promise<ReserveTokenTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ReserveTokenTest {
    return super.attach(address) as ReserveTokenTest;
  }
  override connect(signer: Signer): ReserveTokenTest__factory {
    return super.connect(signer) as ReserveTokenTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReserveTokenTestInterface {
    return new utils.Interface(_abi) as ReserveTokenTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReserveTokenTest {
    return new Contract(address, _abi, signerOrProvider) as ReserveTokenTest;
  }
}
