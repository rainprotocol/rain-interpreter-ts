/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ReserveToken,
  ReserveTokenInterface,
} from "../../../../contracts/test/testToken/ReserveToken";

const _abi = [
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
    name: "DECIMALS",
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
    name: "TOTAL_SUPPLY",
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
        name: "account_",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
    stateMutability: "pure",
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
    name: "initialize",
    outputs: [],
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
  "0x608060405234801561001057600080fd5b506116ef806100206000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80635bb9058b116100b2578063902d55a511610081578063a457c2d711610066578063a457c2d7146102c1578063a9059cbb146102d4578063dd62ed3e146102e757600080fd5b8063902d55a5146102b157806395d89b41146102b957600080fd5b80635bb9058b1461020357806370a082311461026057806379cc6790146102965780638129fc1c146102a957600080fd5b80632e0f26251161010957806339509351116100ee57806339509351146101b857806342966c68146101cb57806348422faa146101e057600080fd5b80632e0f2625146101a1578063313ce567146101a957600080fd5b806306fdde031461013b578063095ea7b31461015957806318160ddd1461017c57806323b872dd1461018e575b600080fd5b61014361032d565b60405161015091906111e5565b60405180910390f35b61016c61016736600461127a565b6103bf565b6040519015158152602001610150565b6035545b604051908152602001610150565b61016c61019c3660046112a4565b6103d9565b610180600681565b60405160068152602001610150565b61016c6101c636600461127a565b6103fd565b6101de6101d93660046112e0565b610449565b005b61016c6101ee3660046112f9565b60976020526000908152604090205460ff1681565b6101de6102113660046112f9565b73ffffffffffffffffffffffffffffffffffffffff16600090815260976020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b61018061026e3660046112f9565b73ffffffffffffffffffffffffffffffffffffffff1660009081526033602052604090205490565b6101de6102a436600461127a565b610456565b6101de61046f565b610180610691565b6101436106ab565b61016c6102cf36600461127a565b6106ba565b61016c6102e236600461127a565b61078b565b6101806102f536600461131b565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260346020908152604080832093909416825291909152205490565b60606036805461033c9061134e565b80601f01602080910402602001604051908101604052809291908181526020018280546103689061134e565b80156103b55780601f1061038a576101008083540402835291602001916103b5565b820191906000526020600020905b81548152906001019060200180831161039857829003601f168201915b5050505050905090565b6000336103cd818585610799565b60019150505b92915050565b6000336103e785828561094d565b6103f2858585610a24565b506001949350505050565b33600081815260346020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906103cd90829086906104449087906113d0565b610799565b6104533382610ce2565b50565b61046182338361094d565b61046b8282610ce2565b5050565b600054610100900460ff161580801561048f5750600054600160ff909116105b806104a95750303b1580156104a9575060005460ff166001145b61053a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084015b60405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055801561059857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b61060c6040518060400160405280600b81526020017f55534420436c61737369630000000000000000000000000000000000000000008152506040518060400160405280600581526020017f5553444343000000000000000000000000000000000000000000000000000000815250610ed8565b61062c3361061c600660096113d0565b61062790600a611503565b610f79565b801561045357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b61069d600660096113d0565b6106a890600a611503565b81565b60606037805461033c9061134e565b33600081815260346020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091908381101561077e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610531565b6103f28286868403610799565b6000336103cd818585610a24565b73ffffffffffffffffffffffffffffffffffffffff831661083b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610531565b73ffffffffffffffffffffffffffffffffffffffff82166108de576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610531565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152603460209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610a1e5781811015610a11576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610531565b610a1e8484848403610799565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ac7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610531565b73ffffffffffffffffffffffffffffffffffffffff8216610b6a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610531565b610b758383836110a5565b73ffffffffffffffffffffffffffffffffffffffff831660009081526033602052604090205481811015610c2b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610531565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260336020526040808220858503905591851681529081208054849290610c6f9084906113d0565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610cd591815260200190565b60405180910390a3610a1e565b73ffffffffffffffffffffffffffffffffffffffff8216610d85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610531565b610d91826000836110a5565b73ffffffffffffffffffffffffffffffffffffffff821660009081526033602052604090205481811015610e47576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610531565b73ffffffffffffffffffffffffffffffffffffffff83166000908152603360205260408120838303905560358054849290610e8390849061150f565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610940565b505050565b600054610100900460ff16610f6f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610531565b61046b8282611135565b73ffffffffffffffffffffffffffffffffffffffff8216610ff6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610531565b611002600083836110a5565b806035600082825461101491906113d0565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152603360205260408120805483929061104e9084906113d0565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526097602052604090205460ff1615610ed3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f46524f5a454e00000000000000000000000000000000000000000000000000006044820152606401610531565b600054610100900460ff166111cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610531565b60366111d8838261159f565b506037610ed3828261159f565b600060208083528351808285015260005b81811015611212578581018301518582016040015282016111f6565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461127557600080fd5b919050565b6000806040838503121561128d57600080fd5b61129683611251565b946020939093013593505050565b6000806000606084860312156112b957600080fd5b6112c284611251565b92506112d060208501611251565b9150604084013590509250925092565b6000602082840312156112f257600080fd5b5035919050565b60006020828403121561130b57600080fd5b61131482611251565b9392505050565b6000806040838503121561132e57600080fd5b61133783611251565b915061134560208401611251565b90509250929050565b600181811c9082168061136257607f821691505b60208210810361139b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156103d3576103d36113a1565b600181815b8085111561143c57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115611422576114226113a1565b8085161561142f57918102915b93841c93908002906113e8565b509250929050565b600082611453575060016103d3565b81611460575060006103d3565b816001811461147657600281146114805761149c565b60019150506103d3565b60ff841115611491576114916113a1565b50506001821b6103d3565b5060208310610133831016604e8410600b84101617156114bf575081810a6103d3565b6114c983836113e3565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156114fb576114fb6113a1565b029392505050565b60006113148383611444565b818103818111156103d3576103d36113a1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b601f821115610ed357600081815260208120601f850160051c810160208610156115785750805b601f850160051c820191505b8181101561159757828155600101611584565b505050505050565b815167ffffffffffffffff8111156115b9576115b9611522565b6115cd816115c7845461134e565b84611551565b602080601f83116001811461162057600084156115ea5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555611597565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b8281101561166d5788860151825594840194600190910190840161164e565b50858210156116a957878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b0190555056fea2646970667358221220b961ad3f37bdf95116645409b8e6244b2c4717280b41bab5d291e3f5b470e1ad64736f6c63430008110033";

type ReserveTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReserveTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReserveToken__factory extends ContractFactory {
  constructor(...args: ReserveTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReserveToken> {
    return super.deploy(overrides || {}) as Promise<ReserveToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ReserveToken {
    return super.attach(address) as ReserveToken;
  }
  override connect(signer: Signer): ReserveToken__factory {
    return super.connect(signer) as ReserveToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReserveTokenInterface {
    return new utils.Interface(_abi) as ReserveTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReserveToken {
    return new Contract(address, _abi, signerOrProvider) as ReserveToken;
  }
}
