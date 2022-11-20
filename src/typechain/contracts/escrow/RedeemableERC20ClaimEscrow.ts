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

export interface RedeemableERC20ClaimEscrowInterface extends utils.Interface {
  functions: {
    "deposit(address,address,uint256)": FunctionFragment;
    "depositPending(address,address,uint256)": FunctionFragment;
    "sweepPending(address,address,address)": FunctionFragment;
    "undeposit(address,address,uint256,uint256)": FunctionFragment;
    "withdraw(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deposit"
      | "depositPending"
      | "sweepPending"
      | "undeposit"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deposit",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositPending",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sweepPending",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "undeposit",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositPending",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sweepPending",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "undeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Deposit(address,address,address,address,address,uint256,uint256)": EventFragment;
    "PendingDeposit(address,address,address,address,uint256)": EventFragment;
    "Sweep(address,address,address,address,address,uint256)": EventFragment;
    "Undeposit(address,address,address,address,uint256,uint256)": EventFragment;
    "Withdraw(address,address,address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PendingDeposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sweep"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Undeposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface DepositEventObject {
  sender: string;
  depositor: string;
  sale: string;
  redeemable: string;
  token: string;
  supply: BigNumber;
  amount: BigNumber;
}
export type DepositEvent = TypedEvent<
  [string, string, string, string, string, BigNumber, BigNumber],
  DepositEventObject
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface PendingDepositEventObject {
  sender: string;
  sale: string;
  redeemable: string;
  token: string;
  amount: BigNumber;
}
export type PendingDepositEvent = TypedEvent<
  [string, string, string, string, BigNumber],
  PendingDepositEventObject
>;

export type PendingDepositEventFilter = TypedEventFilter<PendingDepositEvent>;

export interface SweepEventObject {
  sender: string;
  depositor: string;
  sale: string;
  redeemable: string;
  token: string;
  amount: BigNumber;
}
export type SweepEvent = TypedEvent<
  [string, string, string, string, string, BigNumber],
  SweepEventObject
>;

export type SweepEventFilter = TypedEventFilter<SweepEvent>;

export interface UndepositEventObject {
  sender: string;
  sale: string;
  redeemable: string;
  token: string;
  supply: BigNumber;
  amount: BigNumber;
}
export type UndepositEvent = TypedEvent<
  [string, string, string, string, BigNumber, BigNumber],
  UndepositEventObject
>;

export type UndepositEventFilter = TypedEventFilter<UndepositEvent>;

export interface WithdrawEventObject {
  withdrawer: string;
  sale: string;
  redeemable: string;
  token: string;
  supply: BigNumber;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [string, string, string, string, BigNumber, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface RedeemableERC20ClaimEscrow extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RedeemableERC20ClaimEscrowInterface;

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
    deposit(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositPending(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sweepPending(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      depositor_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    undeposit(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      supply_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      supply_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  deposit(
    sale_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositPending(
    sale_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sweepPending(
    sale_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    depositor_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  undeposit(
    sale_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    supply_: PromiseOrValue<BigNumberish>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    sale_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    supply_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositPending(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    sweepPending(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      depositor_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    undeposit(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      supply_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      supply_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deposit(address,address,address,address,address,uint256,uint256)"(
      sender?: null,
      depositor?: null,
      sale?: null,
      redeemable?: null,
      token?: null,
      supply?: null,
      amount?: null
    ): DepositEventFilter;
    Deposit(
      sender?: null,
      depositor?: null,
      sale?: null,
      redeemable?: null,
      token?: null,
      supply?: null,
      amount?: null
    ): DepositEventFilter;

    "PendingDeposit(address,address,address,address,uint256)"(
      sender?: null,
      sale?: null,
      redeemable?: null,
      token?: null,
      amount?: null
    ): PendingDepositEventFilter;
    PendingDeposit(
      sender?: null,
      sale?: null,
      redeemable?: null,
      token?: null,
      amount?: null
    ): PendingDepositEventFilter;

    "Sweep(address,address,address,address,address,uint256)"(
      sender?: null,
      depositor?: null,
      sale?: null,
      redeemable?: null,
      token?: null,
      amount?: null
    ): SweepEventFilter;
    Sweep(
      sender?: null,
      depositor?: null,
      sale?: null,
      redeemable?: null,
      token?: null,
      amount?: null
    ): SweepEventFilter;

    "Undeposit(address,address,address,address,uint256,uint256)"(
      sender?: null,
      sale?: null,
      redeemable?: null,
      token?: null,
      supply?: null,
      amount?: null
    ): UndepositEventFilter;
    Undeposit(
      sender?: null,
      sale?: null,
      redeemable?: null,
      token?: null,
      supply?: null,
      amount?: null
    ): UndepositEventFilter;

    "Withdraw(address,address,address,address,uint256,uint256)"(
      withdrawer?: null,
      sale?: null,
      redeemable?: null,
      token?: null,
      supply?: null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(
      withdrawer?: null,
      sale?: null,
      redeemable?: null,
      token?: null,
      supply?: null,
      amount?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    deposit(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositPending(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sweepPending(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      depositor_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    undeposit(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      supply_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      supply_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositPending(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sweepPending(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      depositor_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    undeposit(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      supply_: PromiseOrValue<BigNumberish>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      sale_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      supply_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
