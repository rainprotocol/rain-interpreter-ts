/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  FixedPointMathTest,
  FixedPointMathTestInterface,
} from "../../../../../contracts/test/math/FixedPointMath/FixedPointMathTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b_",
        type: "uint256",
      },
    ],
    name: "fixedPointDiv",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b_",
        type: "uint256",
      },
    ],
    name: "fixedPointMul",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "aDecimals_",
        type: "uint256",
      },
    ],
    name: "scale18",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
      {
        internalType: "int8",
        name: "scaleBy_",
        type: "int8",
      },
    ],
    name: "scaleBy",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "targetDecimals_",
        type: "uint256",
      },
    ],
    name: "scaleN",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610604806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063798cc0e911610050578063798cc0e9146100a457806381b8e2a6146100b7578063b34bbe35146100ca57600080fd5b8063279bd00e1461006c5780636baf68f414610091575b600080fd5b61007f61007a3660046103a2565b6100dd565b60405190815260200160405180910390f35b61007f61009f3660046103d8565b6100f2565b61007f6100b23660046103d8565b6100fe565b61007f6100c53660046103d8565b61010a565b61007f6100d83660046103d8565b610116565b60006100e98383610122565b90505b92915050565b60006100e98383610183565b60006100e98383610198565b60006100e983836101ad565b60006100e98383610214565b60008160000b6000036101365750816100ec565b60008260000b131561015e5761015761015083600a610549565b8490610274565b90506100ec565b60ff60008390031661017181600a610558565b61017b9085610593565b9150506100ec565b60006100e983670de0b6b3a7640000846102cf565b60006100e98383670de0b6b3a76400006102cf565b600080601283036101c157839150506100ec565b82601211156101db5750601282900361017181600a610558565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee820161017b61020d82600a610558565b8590610274565b6000808260120361022857839150506100ec565b82601211156102455750601282900361017b61020d82600a610558565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee820161017181600a610558565b600082600003610286575060006100ec565b8282028284828161029957610299610564565b04036102a557806102c7565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b949350505050565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff858709858702925082811083820303915050806000036103275783828161031d5761031d610564565b049250505061039b565b80841161033357600080fd5b600084868809851960019081018716968790049682860381900495909211909303600082900391909104909201919091029190911760038402600290811880860282030280860282030280860282030280860282030280860282030280860290910302029150505b9392505050565b600080604083850312156103b557600080fd5b8235915060208301358060000b81146103cd57600080fd5b809150509250929050565b600080604083850312156103eb57600080fd5b50508035926020909101359150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600181815b8085111561048257817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610468576104686103fa565b8085161561047557918102915b93841c939080029061042e565b509250929050565b600082610499575060016100ec565b816104a6575060006100ec565b81600181146104bc57600281146104c6576104e2565b60019150506100ec565b60ff8411156104d7576104d76103fa565b50506001821b6100ec565b5060208310610133831016604e8410600b8410161715610505575081810a6100ec565b61050f8383610429565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610541576105416103fa565b029392505050565b60006100e960ff84168361048a565b60006100e9838361048a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000826105c9577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea2646970667358221220513302203829dd9de48e815ec074c6ba11a830b9b88e6a69e18a73235bb76df464736f6c63430008110033";

type FixedPointMathTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FixedPointMathTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FixedPointMathTest__factory extends ContractFactory {
  constructor(...args: FixedPointMathTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FixedPointMathTest> {
    return super.deploy(overrides || {}) as Promise<FixedPointMathTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FixedPointMathTest {
    return super.attach(address) as FixedPointMathTest;
  }
  override connect(signer: Signer): FixedPointMathTest__factory {
    return super.connect(signer) as FixedPointMathTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FixedPointMathTestInterface {
    return new utils.Interface(_abi) as FixedPointMathTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FixedPointMathTest {
    return new Contract(address, _abi, signerOrProvider) as FixedPointMathTest;
  }
}
