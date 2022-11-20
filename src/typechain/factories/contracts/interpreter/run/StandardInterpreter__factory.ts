/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  StandardInterpreter,
  StandardInterpreterInterface,
} from "../../../../contracts/interpreter/run/StandardInterpreter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "interpreterIntegrity_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "bytes[]",
            name: "sources",
            type: "bytes[]",
          },
          {
            internalType: "uint256[]",
            name: "constants",
            type: "uint256[]",
          },
        ],
        indexed: false,
        internalType: "struct StateConfig",
        name: "config",
        type: "tuple",
      },
    ],
    name: "SaveInterpreterState",
    type: "event",
  },
  {
    inputs: [],
    name: "storageOpcodesRange",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "pointer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "length",
            type: "uint256",
          },
        ],
        internalType: "struct StorageOpcodesRange",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161013238038061013283398101604081905261002f91610044565b306080526001600160a01b031660a052610074565b60006020828403121561005657600080fd5b81516001600160a01b038116811461006d57600080fd5b9392505050565b60805160a05160a1610091600039600050506000505060a16000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063e0419ae314602d575b600080fd5b604080518082018252600080825260209182018190528251808401845281815282018181528351918252519181019190915281519081900390910190f3fea26469706673582212207ee5d2d2346e20f9b474a68b875eb8703e431d31d7886fcc02cd63cce6dfbb3564736f6c63430008110033";

type StandardInterpreterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StandardInterpreterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StandardInterpreter__factory extends ContractFactory {
  constructor(...args: StandardInterpreterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    interpreterIntegrity_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StandardInterpreter> {
    return super.deploy(
      interpreterIntegrity_,
      overrides || {}
    ) as Promise<StandardInterpreter>;
  }
  override getDeployTransaction(
    interpreterIntegrity_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(interpreterIntegrity_, overrides || {});
  }
  override attach(address: string): StandardInterpreter {
    return super.attach(address) as StandardInterpreter;
  }
  override connect(signer: Signer): StandardInterpreter__factory {
    return super.connect(signer) as StandardInterpreter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StandardInterpreterInterface {
    return new utils.Interface(_abi) as StandardInterpreterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StandardInterpreter {
    return new Contract(address, _abi, signerOrProvider) as StandardInterpreter;
  }
}
