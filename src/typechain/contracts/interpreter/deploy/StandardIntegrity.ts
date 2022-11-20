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
} from "../../../common";

export type StorageOpcodesRangeStruct = {
  pointer: PromiseOrValue<BigNumberish>;
  length: PromiseOrValue<BigNumberish>;
};

export type StorageOpcodesRangeStructOutput = [BigNumber, BigNumber] & {
  pointer: BigNumber;
  length: BigNumber;
};

export interface StandardIntegrityInterface extends utils.Interface {
  functions: {
    "ensureIntegrity((uint256,uint256),bytes[],uint256,uint256[])": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "ensureIntegrity"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ensureIntegrity",
    values: [
      StorageOpcodesRangeStruct,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "ensureIntegrity",
    data: BytesLike
  ): Result;

  events: {};
}

export interface StandardIntegrity extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StandardIntegrityInterface;

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
    ensureIntegrity(
      storageOpcodesRange_: StorageOpcodesRangeStruct,
      sources_: PromiseOrValue<BytesLike>[],
      constantsLength_: PromiseOrValue<BigNumberish>,
      finalStacks_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        contextScratch_: BigNumber;
        stackLength_: BigNumber;
      }
    >;
  };

  ensureIntegrity(
    storageOpcodesRange_: StorageOpcodesRangeStruct,
    sources_: PromiseOrValue<BytesLike>[],
    constantsLength_: PromiseOrValue<BigNumberish>,
    finalStacks_: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      contextScratch_: BigNumber;
      stackLength_: BigNumber;
    }
  >;

  callStatic: {
    ensureIntegrity(
      storageOpcodesRange_: StorageOpcodesRangeStruct,
      sources_: PromiseOrValue<BytesLike>[],
      constantsLength_: PromiseOrValue<BigNumberish>,
      finalStacks_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        contextScratch_: BigNumber;
        stackLength_: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    ensureIntegrity(
      storageOpcodesRange_: StorageOpcodesRangeStruct,
      sources_: PromiseOrValue<BytesLike>[],
      constantsLength_: PromiseOrValue<BigNumberish>,
      finalStacks_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ensureIntegrity(
      storageOpcodesRange_: StorageOpcodesRangeStruct,
      sources_: PromiseOrValue<BytesLike>[],
      constantsLength_: PromiseOrValue<BigNumberish>,
      finalStacks_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
