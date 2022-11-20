/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ERC3156FlashBorrowerDepositTest,
  ERC3156FlashBorrowerDepositTestInterface,
} from "../../../../contracts/test/erc3156/ERC3156FlashBorrowerDepositTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
    ],
    name: "onFlashLoan",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610376806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806323e30c8b14610030575b600080fd5b61004361003e3660046101e9565b610055565b60405190815260200160405180910390f35b6000806100648385018561028f565b604080517fe6b62636000000000000000000000000000000000000000000000000000000008152825173ffffffffffffffffffffffffffffffffffffffff16600482015260208301516024820152908201516044820152909150339063e6b6263690606401600060405180830381600087803b1580156100e357600080fd5b505af11580156100f7573d6000803e3d6000fd5b50506040517f095ea7b30000000000000000000000000000000000000000000000000000000081523360048201526024810189905273ffffffffffffffffffffffffffffffffffffffff8a16925063095ea7b391506044016020604051808303816000875af115801561016e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101929190610317565b507f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd998975050505050505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146101e457600080fd5b919050565b60008060008060008060a0878903121561020257600080fd5b61020b876101c0565b9550610219602088016101c0565b94506040870135935060608701359250608087013567ffffffffffffffff8082111561024457600080fd5b818901915089601f83011261025857600080fd5b81358181111561026757600080fd5b8a602082850101111561027957600080fd5b6020830194508093505050509295509295509295565b6000606082840312156102a157600080fd5b6040516060810181811067ffffffffffffffff821117156102eb577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040526102f7836101c0565b815260208301356020820152604083013560408201528091505092915050565b60006020828403121561032957600080fd5b8151801515811461033957600080fd5b939250505056fea26469706673582212204cf16042e72c7707d8a2ed45a587c447e900b3118001d8d5461842a15634fd2d64736f6c63430008110033";

type ERC3156FlashBorrowerDepositTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC3156FlashBorrowerDepositTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC3156FlashBorrowerDepositTest__factory extends ContractFactory {
  constructor(...args: ERC3156FlashBorrowerDepositTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC3156FlashBorrowerDepositTest> {
    return super.deploy(
      overrides || {}
    ) as Promise<ERC3156FlashBorrowerDepositTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC3156FlashBorrowerDepositTest {
    return super.attach(address) as ERC3156FlashBorrowerDepositTest;
  }
  override connect(signer: Signer): ERC3156FlashBorrowerDepositTest__factory {
    return super.connect(signer) as ERC3156FlashBorrowerDepositTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC3156FlashBorrowerDepositTestInterface {
    return new utils.Interface(
      _abi
    ) as ERC3156FlashBorrowerDepositTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC3156FlashBorrowerDepositTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC3156FlashBorrowerDepositTest;
  }
}
