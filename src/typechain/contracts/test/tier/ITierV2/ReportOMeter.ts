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
} from "../../../../common";

export interface ReportOMeterInterface extends utils.Interface {
  functions: {
    "gaugeReport(address,address,uint256[])": FunctionFragment;
    "gaugeReportTimeForTier(address,address,uint256,uint256[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "gaugeReport" | "gaugeReportTimeForTier"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "gaugeReport",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "gaugeReportTimeForTier",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "gaugeReport",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gaugeReportTimeForTier",
    data: BytesLike
  ): Result;

  events: {
    "Report(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Report"): EventFragment;
}

export interface ReportEventObject {
  report: BigNumber;
}
export type ReportEvent = TypedEvent<[BigNumber], ReportEventObject>;

export type ReportEventFilter = TypedEventFilter<ReportEvent>;

export interface ReportOMeter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ReportOMeterInterface;

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
    gaugeReport(
      tierContract_: PromiseOrValue<string>,
      account_: PromiseOrValue<string>,
      context_: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    gaugeReportTimeForTier(
      tierContract_: PromiseOrValue<string>,
      account_: PromiseOrValue<string>,
      tier_: PromiseOrValue<BigNumberish>,
      context_: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  gaugeReport(
    tierContract_: PromiseOrValue<string>,
    account_: PromiseOrValue<string>,
    context_: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  gaugeReportTimeForTier(
    tierContract_: PromiseOrValue<string>,
    account_: PromiseOrValue<string>,
    tier_: PromiseOrValue<BigNumberish>,
    context_: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    gaugeReport(
      tierContract_: PromiseOrValue<string>,
      account_: PromiseOrValue<string>,
      context_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    gaugeReportTimeForTier(
      tierContract_: PromiseOrValue<string>,
      account_: PromiseOrValue<string>,
      tier_: PromiseOrValue<BigNumberish>,
      context_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Report(uint256)"(report?: null): ReportEventFilter;
    Report(report?: null): ReportEventFilter;
  };

  estimateGas: {
    gaugeReport(
      tierContract_: PromiseOrValue<string>,
      account_: PromiseOrValue<string>,
      context_: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    gaugeReportTimeForTier(
      tierContract_: PromiseOrValue<string>,
      account_: PromiseOrValue<string>,
      tier_: PromiseOrValue<BigNumberish>,
      context_: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    gaugeReport(
      tierContract_: PromiseOrValue<string>,
      account_: PromiseOrValue<string>,
      context_: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    gaugeReportTimeForTier(
      tierContract_: PromiseOrValue<string>,
      account_: PromiseOrValue<string>,
      tier_: PromiseOrValue<BigNumberish>,
      context_: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
