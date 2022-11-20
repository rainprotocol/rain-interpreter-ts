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
  PayableOverrides,
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
} from "../../../common";

export type StateConfigStruct = {
  sources: PromiseOrValue<BytesLike>[];
  constants: PromiseOrValue<BigNumberish>[];
};

export type StateConfigStructOutput = [string[], BigNumber[]] & {
  sources: string[];
  constants: BigNumber[];
};

export type FlowCommonConfigStruct = {
  expressionDeployer: PromiseOrValue<string>;
  interpreter: PromiseOrValue<string>;
  flows: StateConfigStruct[];
};

export type FlowCommonConfigStructOutput = [
  string,
  string,
  StateConfigStructOutput[]
] & {
  expressionDeployer: string;
  interpreter: string;
  flows: StateConfigStructOutput[];
};

export type FlowConfigStruct = {
  stateConfig: StateConfigStruct;
  flowConfig: FlowCommonConfigStruct;
};

export type FlowConfigStructOutput = [
  StateConfigStructOutput,
  FlowCommonConfigStructOutput
] & {
  stateConfig: StateConfigStructOutput;
  flowConfig: FlowCommonConfigStructOutput;
};

export type SignedContextStruct = {
  signer: PromiseOrValue<string>;
  signature: PromiseOrValue<BytesLike>;
  context: PromiseOrValue<BigNumberish>[];
};

export type SignedContextStructOutput = [string, string, BigNumber[]] & {
  signer: string;
  signature: string;
  context: BigNumber[];
};

export type NativeTransferStruct = {
  from: PromiseOrValue<string>;
  to: PromiseOrValue<string>;
  amount: PromiseOrValue<BigNumberish>;
};

export type NativeTransferStructOutput = [string, string, BigNumber] & {
  from: string;
  to: string;
  amount: BigNumber;
};

export type ERC20TransferStruct = {
  token: PromiseOrValue<string>;
  from: PromiseOrValue<string>;
  to: PromiseOrValue<string>;
  amount: PromiseOrValue<BigNumberish>;
};

export type ERC20TransferStructOutput = [string, string, string, BigNumber] & {
  token: string;
  from: string;
  to: string;
  amount: BigNumber;
};

export type ERC721TransferStruct = {
  token: PromiseOrValue<string>;
  from: PromiseOrValue<string>;
  to: PromiseOrValue<string>;
  id: PromiseOrValue<BigNumberish>;
};

export type ERC721TransferStructOutput = [string, string, string, BigNumber] & {
  token: string;
  from: string;
  to: string;
  id: BigNumber;
};

export type ERC1155TransferStruct = {
  token: PromiseOrValue<string>;
  from: PromiseOrValue<string>;
  to: PromiseOrValue<string>;
  id: PromiseOrValue<BigNumberish>;
  amount: PromiseOrValue<BigNumberish>;
};

export type ERC1155TransferStructOutput = [
  string,
  string,
  string,
  BigNumber,
  BigNumber
] & {
  token: string;
  from: string;
  to: string;
  id: BigNumber;
  amount: BigNumber;
};

export type FlowTransferStruct = {
  native: NativeTransferStruct[];
  erc20: ERC20TransferStruct[];
  erc721: ERC721TransferStruct[];
  erc1155: ERC1155TransferStruct[];
};

export type FlowTransferStructOutput = [
  NativeTransferStructOutput[],
  ERC20TransferStructOutput[],
  ERC721TransferStructOutput[],
  ERC1155TransferStructOutput[]
] & {
  native: NativeTransferStructOutput[];
  erc20: ERC20TransferStructOutput[];
  erc721: ERC721TransferStructOutput[];
  erc1155: ERC1155TransferStructOutput[];
};

export interface FlowInterface extends utils.Interface {
  functions: {
    "flow(address,uint256,(address,bytes,uint256[])[])": FunctionFragment;
    "initialize(((bytes[],uint256[]),(address,address,(bytes[],uint256[])[])))": FunctionFragment;
    "multicall(bytes[])": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "previewFlow(address,uint256,(address,bytes,uint256[])[])": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "flow"
      | "initialize"
      | "multicall"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "onERC721Received"
      | "previewFlow"
      | "supportsInterface"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "flow",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      SignedContextStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [FlowConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "previewFlow",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      SignedContextStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "flow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewFlow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "Initialize(address,tuple)": EventFragment;
    "Initialized(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialize"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export interface InitializeEventObject {
  sender: string;
  config: FlowConfigStructOutput;
}
export type InitializeEvent = TypedEvent<
  [string, FlowConfigStructOutput],
  InitializeEventObject
>;

export type InitializeEventFilter = TypedEventFilter<InitializeEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface Flow extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FlowInterface;

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
    flow(
      flow_: PromiseOrValue<string>,
      id_: PromiseOrValue<BigNumberish>,
      signedContexts_: SignedContextStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      config_: FlowConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    previewFlow(
      flow_: PromiseOrValue<string>,
      id_: PromiseOrValue<BigNumberish>,
      signedContexts_: SignedContextStruct[],
      overrides?: CallOverrides
    ): Promise<[FlowTransferStructOutput]>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  flow(
    flow_: PromiseOrValue<string>,
    id_: PromiseOrValue<BigNumberish>,
    signedContexts_: SignedContextStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    config_: FlowConfigStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  multicall(
    data: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC1155BatchReceived(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>[],
    arg3: PromiseOrValue<BigNumberish>[],
    arg4: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BigNumberish>,
    arg4: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC721Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  previewFlow(
    flow_: PromiseOrValue<string>,
    id_: PromiseOrValue<BigNumberish>,
    signedContexts_: SignedContextStruct[],
    overrides?: CallOverrides
  ): Promise<FlowTransferStructOutput>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    flow(
      flow_: PromiseOrValue<string>,
      id_: PromiseOrValue<BigNumberish>,
      signedContexts_: SignedContextStruct[],
      overrides?: CallOverrides
    ): Promise<FlowTransferStructOutput>;

    initialize(
      config_: FlowConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    previewFlow(
      flow_: PromiseOrValue<string>,
      id_: PromiseOrValue<BigNumberish>,
      signedContexts_: SignedContextStruct[],
      overrides?: CallOverrides
    ): Promise<FlowTransferStructOutput>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
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
  };

  estimateGas: {
    flow(
      flow_: PromiseOrValue<string>,
      id_: PromiseOrValue<BigNumberish>,
      signedContexts_: SignedContextStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      config_: FlowConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    previewFlow(
      flow_: PromiseOrValue<string>,
      id_: PromiseOrValue<BigNumberish>,
      signedContexts_: SignedContextStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    flow(
      flow_: PromiseOrValue<string>,
      id_: PromiseOrValue<BigNumberish>,
      signedContexts_: SignedContextStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      config_: FlowConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    previewFlow(
      flow_: PromiseOrValue<string>,
      id_: PromiseOrValue<BigNumberish>,
      signedContexts_: SignedContextStruct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
