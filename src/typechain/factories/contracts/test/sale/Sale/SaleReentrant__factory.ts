/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  SaleReentrant,
  SaleReentrantInterface,
} from "../../../../../contracts/test/sale/Sale/SaleReentrant";

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
        internalType: "contract Sale",
        name: "sale_",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "feeRecipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minimumUnits",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "desiredUnits",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maximumPrice",
            type: "uint256",
          },
        ],
        internalType: "struct BuyConfig",
        name: "config_",
        type: "tuple",
      },
    ],
    name: "addReentrantTarget",
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
  "0x608060405234801561001057600080fd5b50611943806100206000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c806348422faa116100cd578063902d55a511610081578063a457c2d711610066578063a457c2d7146102ef578063a9059cbb14610302578063dd62ed3e1461031557600080fd5b8063902d55a5146102df57806395d89b41146102e757600080fd5b806370a08231116100b257806370a082311461028e57806379cc6790146102c45780638129fc1c146102d757600080fd5b806348422faa1461020e5780635bb9058b1461023157600080fd5b806323b872dd11610124578063313ce56711610109578063313ce567146101d957806339509351146101e857806342966c68146101fb57600080fd5b806323b872dd146101be5780632e0f2625146101d157600080fd5b806306fdde0314610156578063095ea7b3146101745780630c3e78c71461019757806318160ddd146101ac575b600080fd5b61015e61035b565b60405161016b919061135c565b60405180910390f35b6101876101823660046113ea565b6103ed565b604051901515815260200161016b565b6101aa6101a5366004611416565b610407565b005b6035545b60405190815260200161016b565b6101876101cc366004611475565b61045a565b6101b0600681565b6040516006815260200161016b565b6101876101f63660046113ea565b61047e565b6101aa6102093660046114b6565b6104ca565b61018761021c3660046114cf565b60976020526000908152604090205460ff1681565b6101aa61023f3660046114cf565b73ffffffffffffffffffffffffffffffffffffffff16600090815260976020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b6101b061029c3660046114cf565b73ffffffffffffffffffffffffffffffffffffffff1660009081526033602052604090205490565b6101aa6102d23660046113ea565b6104d7565b6101aa6104f0565b6101b0610712565b61015e61072c565b6101876102fd3660046113ea565b61073b565b6101876103103660046113ea565b61080c565b6101b06103233660046114f3565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260346020908152604080832093909416825291909152205490565b60606036805461036a9061152c565b80601f01602080910402602001604051908101604052809291908181526020018280546103969061152c565b80156103e35780601f106103b8576101008083540402835291602001916103e3565b820191906000526020600020905b8154815290600101906020018083116103c657829003601f168201915b5050505050905090565b6000336103fb81858561081a565b60019150505b92915050565b609880547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416179055806099610454828261157f565b50505050565b6000336104688582856109ce565b610473858585610a9f565b506001949350505050565b33600081815260346020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906103fb90829086906104c5908790611624565b61081a565b6104d43382610d5d565b50565b6104e28233836109ce565b6104ec8282610d5d565b5050565b600054610100900460ff16158080156105105750600054600160ff909116105b8061052a5750303b15801561052a575060005460ff166001145b6105bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084015b60405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055801561061957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b61068d6040518060400160405280600b81526020017f55534420436c61737369630000000000000000000000000000000000000000008152506040518060400160405280600581526020017f5553444343000000000000000000000000000000000000000000000000000000815250610f53565b6106ad3361069d60066009611624565b6106a890600a611757565b610ff4565b80156104d457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b61071e60066009611624565b61072990600a611757565b81565b60606037805461036a9061152c565b33600081815260346020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190838110156107ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016105b2565b610473828686840361081a565b6000336103fb818585610a9f565b73ffffffffffffffffffffffffffffffffffffffff83166108bc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016105b2565b73ffffffffffffffffffffffffffffffffffffffff821661095f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016105b2565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152603460209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146104545781811015610a92576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016105b2565b610454848484840361081a565b73ffffffffffffffffffffffffffffffffffffffff8316610b42576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016105b2565b73ffffffffffffffffffffffffffffffffffffffff8216610be5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016105b2565b610bf0838383611120565b73ffffffffffffffffffffffffffffffffffffffff831660009081526033602052604090205481811015610ca6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016105b2565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260336020526040808220858503905591851681529081208054849290610cea908490611624565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d5091815260200190565b60405180910390a3610454565b73ffffffffffffffffffffffffffffffffffffffff8216610e00576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016105b2565b610e0c82600083611120565b73ffffffffffffffffffffffffffffffffffffffff821660009081526033602052604090205481811015610ec2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016105b2565b73ffffffffffffffffffffffffffffffffffffffff83166000908152603360205260408120838303905560358054849290610efe908490611763565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016109c1565b505050565b600054610100900460ff16610fea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016105b2565b6104ec828261121c565b73ffffffffffffffffffffffffffffffffffffffff8216611071576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016105b2565b61107d60008383611120565b806035600082825461108f9190611624565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600090815260336020526040812080548392906110c9908490611624565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b61112b8383836112cc565b73ffffffffffffffffffffffffffffffffffffffff82161580159061116a575060985473ffffffffffffffffffffffffffffffffffffffff8381169116145b15610f4e576098546040517fd48827e900000000000000000000000000000000000000000000000000000000815260995473ffffffffffffffffffffffffffffffffffffffff9081166004830152609a546024830152609b546044830152609c546064830152609d5460848301529091169063d48827e99060a401600060405180830381600087803b1580156111ff57600080fd5b505af1158015611213573d6000803e3d6000fd5b50505050505050565b600054610100900460ff166112b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016105b2565b60366112bf83826117f3565b506037610f4e82826117f3565b73ffffffffffffffffffffffffffffffffffffffff821660009081526097602052604090205460ff1615610f4e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f46524f5a454e000000000000000000000000000000000000000000000000000060448201526064016105b2565b600060208083528351808285015260005b818110156113895785810183015185820160400152820161136d565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b73ffffffffffffffffffffffffffffffffffffffff811681146104d457600080fd5b600080604083850312156113fd57600080fd5b8235611408816113c8565b946020939093013593505050565b60008082840360c081121561142a57600080fd5b8335611435816113c8565b925060a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08201121561146757600080fd5b506020830190509250929050565b60008060006060848603121561148a57600080fd5b8335611495816113c8565b925060208401356114a5816113c8565b929592945050506040919091013590565b6000602082840312156114c857600080fd5b5035919050565b6000602082840312156114e157600080fd5b81356114ec816113c8565b9392505050565b6000806040838503121561150657600080fd5b8235611511816113c8565b91506020830135611521816113c8565b809150509250929050565b600181811c9082168061154057607f821691505b602082108103611579577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b813561158a816113c8565b73ffffffffffffffffffffffffffffffffffffffff81167fffffffffffffffffffffffff000000000000000000000000000000000000000083541617825550602082013560018201556040820135600282015560608201356003820155608082013560048201555050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b80820180821115610401576104016115f5565b600181815b8085111561169057817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115611676576116766115f5565b8085161561168357918102915b93841c939080029061163c565b509250929050565b6000826116a757506001610401565b816116b457506000610401565b81600181146116ca57600281146116d4576116f0565b6001915050610401565b60ff8411156116e5576116e56115f5565b50506001821b610401565b5060208310610133831016604e8410600b8410161715611713575081810a610401565b61171d8383611637565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561174f5761174f6115f5565b029392505050565b60006114ec8383611698565b81810381811115610401576104016115f5565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b601f821115610f4e57600081815260208120601f850160051c810160208610156117cc5750805b601f850160051c820191505b818110156117eb578281556001016117d8565b505050505050565b815167ffffffffffffffff81111561180d5761180d611776565b6118218161181b845461152c565b846117a5565b602080601f831160018114611874576000841561183e5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b1785556117eb565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156118c1578886015182559484019460019091019084016118a2565b50858210156118fd57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b0190555056fea2646970667358221220838eb480a1f23eb18cacc0014880c4a2f2519bf7ac3acb5130f65718d9e6e2f764736f6c63430008110033";

type SaleReentrantConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SaleReentrantConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SaleReentrant__factory extends ContractFactory {
  constructor(...args: SaleReentrantConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SaleReentrant> {
    return super.deploy(overrides || {}) as Promise<SaleReentrant>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SaleReentrant {
    return super.attach(address) as SaleReentrant;
  }
  override connect(signer: Signer): SaleReentrant__factory {
    return super.connect(signer) as SaleReentrant__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SaleReentrantInterface {
    return new utils.Interface(_abi) as SaleReentrantInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SaleReentrant {
    return new Contract(address, _abi, signerOrProvider) as SaleReentrant;
  }
}
