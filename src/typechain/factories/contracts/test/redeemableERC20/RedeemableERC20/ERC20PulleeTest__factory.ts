/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC20PulleeTest,
  ERC20PulleeTestInterface,
} from "../../../../../contracts/test/redeemableERC20/RedeemableERC20/ERC20PulleeTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address",
        name: "distributor_",
        type: "address",
      },
    ],
    name: "endDistribution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver_",
        type: "address",
      },
    ],
    name: "grantReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender_",
        type: "address",
      },
    ],
    name: "grantSender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "contract IERC20Upgradeable[]",
        name: "assets_",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a76806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063beabacc811610050578063beabacc8146100b2578063c20713fe146100c5578063e1f21c67146100d857600080fd5b80630ac0a1ff14610077578063913bed391461008c578063b14c21c51461009f575b600080fd5b61008a6100853660046107c2565b6100eb565b005b61008a61009a3660046107c2565b610171565b61008a6100ad3660046107c2565b6101c5565b61008a6100c03660046107fb565b610219565b61008a6100d336600461083c565b6102b8565b61008a6100e63660046107fb565b610346565b6040517fe7ae91fe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff828116600483015283169063e7ae91fe906024015b600060405180830381600087803b15801561015557600080fd5b505af1158015610169573d6000803e3d6000fd5b505050505050565b6040517f8b24259b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8281166004830152831690638b24259b9060240161013b565b6040517f3833be6200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8281166004830152831690633833be629060240161013b565b6040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303816000875af115801561028e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b291906108ca565b50505050565b6040517ff677de9600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063f677de969061030e908690869086906004016108f3565b600060405180830381600087803b15801561032857600080fd5b505af115801561033c573d6000803e3d6000fd5b5050505050505050565b61036773ffffffffffffffffffffffffffffffffffffffff8416838361036c565b505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa1580156103e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104079190610956565b610411919061096f565b6040805173ffffffffffffffffffffffffffffffffffffffff868116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564908401529293506102b29287926000916104df9190851690849061058e565b80519091501561036757808060200190518101906104fd91906108ca565b610367576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b606061059d84846000856105a5565b949350505050565b606082471015610637576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610585565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161066091906109d3565b60006040518083038185875af1925050503d806000811461069d576040519150601f19603f3d011682016040523d82523d6000602084013e6106a2565b606091505b50915091506106b3878383876106be565b979650505050505050565b6060831561075457825160000361074d5773ffffffffffffffffffffffffffffffffffffffff85163b61074d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610585565b508161059d565b61059d83838151156107695781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058591906109ef565b73ffffffffffffffffffffffffffffffffffffffff811681146107bf57600080fd5b50565b600080604083850312156107d557600080fd5b82356107e08161079d565b915060208301356107f08161079d565b809150509250929050565b60008060006060848603121561081057600080fd5b833561081b8161079d565b9250602084013561082b8161079d565b929592945050506040919091013590565b6000806000806060858703121561085257600080fd5b843561085d8161079d565b9350602085013567ffffffffffffffff8082111561087a57600080fd5b818701915087601f83011261088e57600080fd5b81358181111561089d57600080fd5b8860208260051b85010111156108b257600080fd5b95986020929092019750949560400135945092505050565b6000602082840312156108dc57600080fd5b815180151581146108ec57600080fd5b9392505050565b6040808252810183905260008460608301825b868110156109435782356109198161079d565b73ffffffffffffffffffffffffffffffffffffffff16825260209283019290910190600101610906565b5060209390930193909352509392505050565b60006020828403121561096857600080fd5b5051919050565b808201808211156109a9577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b60005b838110156109ca5781810151838201526020016109b2565b50506000910152565b600082516109e58184602087016109af565b9190910192915050565b6020815260008251806020840152610a0e8160408501602087016109af565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea26469706673582212202331ac8553a363bbf1dd5bb76ff131b3e2a09589b0e20ec359d453366739293364736f6c63430008110033";

type ERC20PulleeTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20PulleeTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20PulleeTest__factory extends ContractFactory {
  constructor(...args: ERC20PulleeTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20PulleeTest> {
    return super.deploy(overrides || {}) as Promise<ERC20PulleeTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC20PulleeTest {
    return super.attach(address) as ERC20PulleeTest;
  }
  override connect(signer: Signer): ERC20PulleeTest__factory {
    return super.connect(signer) as ERC20PulleeTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20PulleeTestInterface {
    return new utils.Interface(_abi) as ERC20PulleeTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20PulleeTest {
    return new Contract(address, _abi, signerOrProvider) as ERC20PulleeTest;
  }
}
