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
} from "../../../../../common";

export interface LibEncodedDispatchTestInterface extends utils.Interface {
  functions: {
    "decode(uint256)": FunctionFragment;
    "encode(address,uint256,uint256)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "decode" | "encode"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "decode",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "encode",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "decode", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "encode", data: BytesLike): Result;

  events: {};
}

export interface LibEncodedDispatchTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LibEncodedDispatchTestInterface;

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
    decode(
      dispatch_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, BigNumber]>;

    encode(
      expressionPointer_: PromiseOrValue<string>,
      sourceIndex_: PromiseOrValue<BigNumberish>,
      maxOutputs_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  decode(
    dispatch_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, BigNumber]>;

  encode(
    expressionPointer_: PromiseOrValue<string>,
    sourceIndex_: PromiseOrValue<BigNumberish>,
    maxOutputs_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    decode(
      dispatch_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, BigNumber]>;

    encode(
      expressionPointer_: PromiseOrValue<string>,
      sourceIndex_: PromiseOrValue<BigNumberish>,
      maxOutputs_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    decode(
      dispatch_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    encode(
      expressionPointer_: PromiseOrValue<string>,
      sourceIndex_: PromiseOrValue<BigNumberish>,
      maxOutputs_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    decode(
      dispatch_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    encode(
      expressionPointer_: PromiseOrValue<string>,
      sourceIndex_: PromiseOrValue<BigNumberish>,
      maxOutputs_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
