/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export type StateConfigStruct = {
  sources: PromiseOrValue<BytesLike>[];
  constants: PromiseOrValue<BigNumberish>[];
};

export type StateConfigStructOutput = [string[], BigNumber[]] & {
  sources: string[];
  constants: BigNumber[];
};

export type CombineTierConfigStruct = {
  combinedTiersLength: PromiseOrValue<BigNumberish>;
  sourceConfig: StateConfigStruct;
};

export type CombineTierConfigStructOutput = [
  BigNumber,
  StateConfigStructOutput
] & { combinedTiersLength: BigNumber; sourceConfig: StateConfigStructOutput };

export type StorageOpcodesRangeStruct = {
  pointer: PromiseOrValue<BigNumberish>;
  length: PromiseOrValue<BigNumberish>;
};

export type StorageOpcodesRangeStructOutput = [BigNumber, BigNumber] & {
  pointer: BigNumber;
  length: BigNumber;
};

export interface CombineTierInterface extends utils.Interface {
  functions: {
    "initialize((uint256,(bytes[],uint256[])))": FunctionFragment;
    "report(address,uint256[])": FunctionFragment;
    "reportTimeForTier(address,uint256,uint256[])": FunctionFragment;
    "storageOpcodesRange()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "initialize"
      | "report"
      | "reportTimeForTier"
      | "storageOpcodesRange"
      | "supportsInterface"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "initialize",
    values: [CombineTierConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "report",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "reportTimeForTier",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "storageOpcodesRange",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "report", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reportTimeForTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "storageOpcodesRange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "Initialize(address,tuple)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "SaveInterpreterState(address,uint256,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialize"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SaveInterpreterState"): EventFragment;
}

export interface InitializeEventObject {
  sender: string;
  config: CombineTierConfigStructOutput;
}
export type InitializeEvent = TypedEvent<
  [string, CombineTierConfigStructOutput],
  InitializeEventObject
>;

export type InitializeEventFilter = TypedEventFilter<InitializeEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface SaveInterpreterStateEventObject {
  sender: string;
  id: BigNumber;
  config: StateConfigStructOutput;
}
export type SaveInterpreterStateEvent = TypedEvent<
  [string, BigNumber, StateConfigStructOutput],
  SaveInterpreterStateEventObject
>;

export type SaveInterpreterStateEventFilter =
  TypedEventFilter<SaveInterpreterStateEvent>;

export interface CombineTier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CombineTierInterface;

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
    initialize(
      config_: CombineTierConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    report(
      account_: PromiseOrValue<string>,
      context_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    reportTimeForTier(
      account_: PromiseOrValue<string>,
      tier_: PromiseOrValue<BigNumberish>,
      context_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    storageOpcodesRange(
      overrides?: CallOverrides
    ): Promise<[StorageOpcodesRangeStructOutput]>;

    supportsInterface(
      interfaceId_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  initialize(
    config_: CombineTierConfigStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  report(
    account_: PromiseOrValue<string>,
    context_: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  reportTimeForTier(
    account_: PromiseOrValue<string>,
    tier_: PromiseOrValue<BigNumberish>,
    context_: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  storageOpcodesRange(
    overrides?: CallOverrides
  ): Promise<StorageOpcodesRangeStructOutput>;

  supportsInterface(
    interfaceId_: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    initialize(
      config_: CombineTierConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    report(
      account_: PromiseOrValue<string>,
      context_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reportTimeForTier(
      account_: PromiseOrValue<string>,
      tier_: PromiseOrValue<BigNumberish>,
      context_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    storageOpcodesRange(
      overrides?: CallOverrides
    ): Promise<StorageOpcodesRangeStructOutput>;

    supportsInterface(
      interfaceId_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Initialize(address,tuple)"(
      sender?: null,
      config?: null
    ): InitializeEventFilter;
    Initialize(sender?: null, config?: null): InitializeEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "SaveInterpreterState(address,uint256,tuple)"(
      sender?: null,
      id?: null,
      config?: null
    ): SaveInterpreterStateEventFilter;
    SaveInterpreterState(
      sender?: null,
      id?: null,
      config?: null
    ): SaveInterpreterStateEventFilter;
  };

  estimateGas: {
    initialize(
      config_: CombineTierConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    report(
      account_: PromiseOrValue<string>,
      context_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reportTimeForTier(
      account_: PromiseOrValue<string>,
      tier_: PromiseOrValue<BigNumberish>,
      context_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    storageOpcodesRange(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      config_: CombineTierConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    report(
      account_: PromiseOrValue<string>,
      context_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reportTimeForTier(
      account_: PromiseOrValue<string>,
      tier_: PromiseOrValue<BigNumberish>,
      context_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    storageOpcodesRange(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
