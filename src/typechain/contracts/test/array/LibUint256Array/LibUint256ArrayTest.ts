/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface LibUint256ArrayTestInterface extends utils.Interface {
  functions: {
    "arrayFrom(uint256,uint256,uint256,uint256)": FunctionFragment;
    "arrayFrom(uint256,uint256)": FunctionFragment;
    "arrayFrom(uint256)": FunctionFragment;
    "arrayFrom(uint256,uint256,uint256[])": FunctionFragment;
    "arrayFrom(uint256,uint256,uint256)": FunctionFragment;
    "arrayFrom(uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "arrayFrom(uint256,uint256[])": FunctionFragment;
    "copyToNewUint256Array(uint256[])": FunctionFragment;
    "extend(uint256[],uint256[])": FunctionFragment;
    "truncate(uint256[],uint256)": FunctionFragment;
    "unsafeCopyValuesTo(uint256[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "arrayFrom(uint256,uint256,uint256,uint256)"
      | "arrayFrom(uint256,uint256)"
      | "arrayFrom(uint256)"
      | "arrayFrom(uint256,uint256,uint256[])"
      | "arrayFrom(uint256,uint256,uint256)"
      | "arrayFrom(uint256,uint256,uint256,uint256,uint256)"
      | "arrayFrom(uint256,uint256[])"
      | "copyToNewUint256Array"
      | "extend"
      | "truncate"
      | "unsafeCopyValuesTo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "arrayFrom(uint256,uint256,uint256,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "arrayFrom(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "arrayFrom(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "arrayFrom(uint256,uint256,uint256[])",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "arrayFrom(uint256,uint256,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "arrayFrom(uint256,uint256,uint256,uint256,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "arrayFrom(uint256,uint256[])",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "copyToNewUint256Array",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "extend",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "truncate",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "unsafeCopyValuesTo",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "arrayFrom(uint256,uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "arrayFrom(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "arrayFrom(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "arrayFrom(uint256,uint256,uint256[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "arrayFrom(uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "arrayFrom(uint256,uint256,uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "arrayFrom(uint256,uint256[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "copyToNewUint256Array",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "extend", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "truncate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unsafeCopyValuesTo",
    data: BytesLike
  ): Result;

  events: {};
}

export interface LibUint256ArrayTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LibUint256ArrayTestInterface;

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
    "arrayFrom(uint256,uint256,uint256,uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      c_: PromiseOrValue<BigNumberish>,
      d_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "arrayFrom(uint256,uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "arrayFrom(uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "arrayFrom(uint256,uint256,uint256[])"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      tail_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "arrayFrom(uint256,uint256,uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      c_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "arrayFrom(uint256,uint256,uint256,uint256,uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      c_: PromiseOrValue<BigNumberish>,
      d_: PromiseOrValue<BigNumberish>,
      e_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "arrayFrom(uint256,uint256[])"(
      a_: PromiseOrValue<BigNumberish>,
      tail_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    copyToNewUint256Array(
      inputs_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    extend(
      base_: PromiseOrValue<BigNumberish>[],
      extend_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { baseCopy_: BigNumber[] }>;

    truncate(
      array_: PromiseOrValue<BigNumberish>[],
      newLength_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    unsafeCopyValuesTo(
      inputs_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;
  };

  "arrayFrom(uint256,uint256,uint256,uint256)"(
    a_: PromiseOrValue<BigNumberish>,
    b_: PromiseOrValue<BigNumberish>,
    c_: PromiseOrValue<BigNumberish>,
    d_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "arrayFrom(uint256,uint256)"(
    a_: PromiseOrValue<BigNumberish>,
    b_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "arrayFrom(uint256)"(
    a_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "arrayFrom(uint256,uint256,uint256[])"(
    a_: PromiseOrValue<BigNumberish>,
    b_: PromiseOrValue<BigNumberish>,
    tail_: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "arrayFrom(uint256,uint256,uint256)"(
    a_: PromiseOrValue<BigNumberish>,
    b_: PromiseOrValue<BigNumberish>,
    c_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "arrayFrom(uint256,uint256,uint256,uint256,uint256)"(
    a_: PromiseOrValue<BigNumberish>,
    b_: PromiseOrValue<BigNumberish>,
    c_: PromiseOrValue<BigNumberish>,
    d_: PromiseOrValue<BigNumberish>,
    e_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "arrayFrom(uint256,uint256[])"(
    a_: PromiseOrValue<BigNumberish>,
    tail_: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  copyToNewUint256Array(
    inputs_: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  extend(
    base_: PromiseOrValue<BigNumberish>[],
    extend_: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  truncate(
    array_: PromiseOrValue<BigNumberish>[],
    newLength_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  unsafeCopyValuesTo(
    inputs_: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  callStatic: {
    "arrayFrom(uint256,uint256,uint256,uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      c_: PromiseOrValue<BigNumberish>,
      d_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "arrayFrom(uint256,uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "arrayFrom(uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "arrayFrom(uint256,uint256,uint256[])"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      tail_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "arrayFrom(uint256,uint256,uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      c_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "arrayFrom(uint256,uint256,uint256,uint256,uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      c_: PromiseOrValue<BigNumberish>,
      d_: PromiseOrValue<BigNumberish>,
      e_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "arrayFrom(uint256,uint256[])"(
      a_: PromiseOrValue<BigNumberish>,
      tail_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    copyToNewUint256Array(
      inputs_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    extend(
      base_: PromiseOrValue<BigNumberish>[],
      extend_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    truncate(
      array_: PromiseOrValue<BigNumberish>[],
      newLength_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    unsafeCopyValuesTo(
      inputs_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    "arrayFrom(uint256,uint256,uint256,uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      c_: PromiseOrValue<BigNumberish>,
      d_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "arrayFrom(uint256,uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "arrayFrom(uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "arrayFrom(uint256,uint256,uint256[])"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      tail_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "arrayFrom(uint256,uint256,uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      c_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "arrayFrom(uint256,uint256,uint256,uint256,uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      c_: PromiseOrValue<BigNumberish>,
      d_: PromiseOrValue<BigNumberish>,
      e_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "arrayFrom(uint256,uint256[])"(
      a_: PromiseOrValue<BigNumberish>,
      tail_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    copyToNewUint256Array(
      inputs_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    extend(
      base_: PromiseOrValue<BigNumberish>[],
      extend_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    truncate(
      array_: PromiseOrValue<BigNumberish>[],
      newLength_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unsafeCopyValuesTo(
      inputs_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "arrayFrom(uint256,uint256,uint256,uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      c_: PromiseOrValue<BigNumberish>,
      d_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "arrayFrom(uint256,uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "arrayFrom(uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "arrayFrom(uint256,uint256,uint256[])"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      tail_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "arrayFrom(uint256,uint256,uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      c_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "arrayFrom(uint256,uint256,uint256,uint256,uint256)"(
      a_: PromiseOrValue<BigNumberish>,
      b_: PromiseOrValue<BigNumberish>,
      c_: PromiseOrValue<BigNumberish>,
      d_: PromiseOrValue<BigNumberish>,
      e_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "arrayFrom(uint256,uint256[])"(
      a_: PromiseOrValue<BigNumberish>,
      tail_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    copyToNewUint256Array(
      inputs_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    extend(
      base_: PromiseOrValue<BigNumberish>[],
      extend_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    truncate(
      array_: PromiseOrValue<BigNumberish>[],
      newLength_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unsafeCopyValuesTo(
      inputs_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
