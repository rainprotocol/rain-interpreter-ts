/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  LibStackTopTest,
  LibStackTopTestInterface,
} from "../../../../../../contracts/test/interpreter/runtime/LibStackTop/LibStackTopTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "operand_",
        type: "uint256",
      },
    ],
    name: "applyFn",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
    ],
    name: "applyFn",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "length_",
        type: "uint256",
      },
    ],
    name: "applyFn2Heads",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "operand_",
        type: "uint256",
      },
    ],
    name: "applyFn2Operand",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "length_",
        type: "uint256",
      },
    ],
    name: "applyFn2Tails",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "length_",
        type: "uint256",
      },
    ],
    name: "applyFn3Heads",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
    ],
    name: "applyFn3Summer",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "n_",
        type: "uint256",
      },
    ],
    name: "applyFnNSummer",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
    ],
    name: "applyFnSummer",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytes_",
        type: "bytes",
      },
    ],
    name: "asStackTop",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
    ],
    name: "asStackTop",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytes_",
        type: "bytes",
      },
    ],
    name: "asStackTopAsBytes",
    outputs: [
      {
        internalType: "bytes",
        name: "bytesCopy_",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
    ],
    name: "asStackTopAsUint256Array",
    outputs: [
      {
        internalType: "uint256[]",
        name: "arrayCopy_",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "sentinel_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stepSize_",
        type: "uint256",
      },
    ],
    name: "consumeSentinel",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTopSentinel_",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "arraySentinel_",
        type: "uint256[]",
      },
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
      {
        internalType: "StackTop",
        name: "stackBottom_",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "sentinel_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stepSize0_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stepSize1_",
        type: "uint256",
      },
    ],
    name: "consumeSentinels",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTopSentinel_",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "arraySentinel0_",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "arraySentinel1_",
        type: "uint256[]",
      },
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
      {
        internalType: "StackTop",
        name: "stackBottom_",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
    ],
    name: "down",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTopBefore_",
        type: "uint256",
      },
      {
        internalType: "StackTop",
        name: "stackTopAfter_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "n_",
        type: "uint256",
      },
    ],
    name: "down",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTopBefore_",
        type: "uint256",
      },
      {
        internalType: "StackTop",
        name: "stackTopAfter_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "length_",
        type: "uint256",
      },
    ],
    name: "list",
    outputs: [
      {
        internalType: "uint256",
        name: "head_",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "tail_",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "n_",
        type: "uint256",
      },
    ],
    name: "peek",
    outputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytes_",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "n_",
        type: "uint256",
      },
    ],
    name: "peek",
    outputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
    ],
    name: "peek",
    outputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytes_",
        type: "bytes",
      },
    ],
    name: "peek",
    outputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytes_",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "n_",
        type: "uint256",
      },
    ],
    name: "peek2",
    outputs: [
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "n_",
        type: "uint256",
      },
    ],
    name: "peek2",
    outputs: [
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
    ],
    name: "peekUp",
    outputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "n_",
        type: "uint256",
      },
    ],
    name: "peekUp",
    outputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytes_",
        type: "bytes",
      },
    ],
    name: "peekUp",
    outputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytes_",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "n_",
        type: "uint256",
      },
    ],
    name: "peekUp",
    outputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytes_",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "n_",
        type: "uint256",
      },
    ],
    name: "peekUpStackTop",
    outputs: [
      {
        internalType: "StackTop",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytes_",
        type: "bytes",
      },
    ],
    name: "peekUpStackTop",
    outputs: [
      {
        internalType: "StackTop",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
    ],
    name: "peekUpStackTop",
    outputs: [
      {
        internalType: "StackTop",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "n_",
        type: "uint256",
      },
    ],
    name: "peekUpStackTop",
    outputs: [
      {
        internalType: "StackTop",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "n_",
        type: "uint256",
      },
    ],
    name: "pop",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTopAfter_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytes_",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "n_",
        type: "uint256",
      },
    ],
    name: "pop",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTopAfter_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
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
      {
        internalType: "uint256",
        name: "c_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "d_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "e_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "f_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "g_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "h_",
        type: "uint256",
      },
    ],
    name: "push",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "pushArray_",
        type: "uint256[]",
      },
    ],
    name: "push",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
    ],
    name: "push",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "pushArray_",
        type: "uint256[]",
      },
    ],
    name: "pushWithLength",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytes_",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "n_",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [
      {
        internalType: "StackTop",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "n_",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [
      {
        internalType: "StackTop",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array0_",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "array1_",
        type: "uint256[]",
      },
    ],
    name: "toIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "index_",
        type: "uint256",
      },
      {
        internalType: "StackTop",
        name: "stackBottom_",
        type: "uint256",
      },
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytes0_",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "bytes1_",
        type: "bytes",
      },
    ],
    name: "unalignedPush",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytes0_",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "bytes1_",
        type: "bytes",
      },
    ],
    name: "unalignedPushWithLength",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTop_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
    ],
    name: "up",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTopBefore_",
        type: "uint256",
      },
      {
        internalType: "StackTop",
        name: "stackTopAfter_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "n_",
        type: "uint256",
      },
    ],
    name: "up",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTopBefore_",
        type: "uint256",
      },
      {
        internalType: "StackTop",
        name: "stackTopAfter_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "n_",
        type: "uint256",
      },
    ],
    name: "upBytes",
    outputs: [
      {
        internalType: "StackTop",
        name: "stackTopBefore_",
        type: "uint256",
      },
      {
        internalType: "StackTop",
        name: "stackTopAfter_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611bf0806100206000396000f3fe608060405234801561001057600080fd5b506004361061030a5760003560e01c806393baa2f71161019c578063bfde9e75116100ee578063e2c6ab1511610097578063eeb8a8d311610071578063eeb8a8d314610684578063ef55257a14610692578063ef7fe6f2146106a057600080fd5b8063e2c6ab1514610650578063e72a138914610663578063ecb18e6c1461067157600080fd5b8063d66fce84116100c8578063d66fce8414610617578063da6af4151461062a578063de7d3caf1461063d57600080fd5b8063bfde9e75146105da578063c2f9bb68146105e8578063c443623d1461060957600080fd5b8063a7545d3511610150578063b21403d71161012a578063b21403d7146105a1578063b3ada260146105b4578063bb2280db146105c757600080fd5b8063a7545d3514610565578063b085b82414610580578063b1ba23f91461059357600080fd5b806394c73cb91161018157806394c73cb914610536578063a230438f14610544578063a5e17b971461055257600080fd5b806393baa2f7146104ff57806393cdfe911461052357600080fd5b80635972ee55116102605780636bc33b221161020957806387948fa2116101e357806387948fa2146104d05780638b34a8b7146104de57806392c0a2d9146104f157600080fd5b80636bc33b2214610487578063833f62f0146104aa578063845aabb3146104bd57600080fd5b8063616dab071161023a578063616dab071461044e578063651e89371461046157806365e04fd61461047457600080fd5b80635972ee55146104155780635d6fd5c5146104285780635efa78541461043b57600080fd5b806327cc9330116102c257806340722cef1161029c57806340722cef146103dc578063435ca8b6146103ef57806351fc8d331461040257600080fd5b806327cc9330146103965780632fd751a0146103a95780633d329988146103bc57600080fd5b80630e017018116102f35780630e0170181461035d57806323c5b7241461037057806327ba93631461038357600080fd5b80630347fab61461030f578063054b956a1461033c575b600080fd5b61032261031d3660046115f4565b6106ce565b604080519283526020830191909152015b60405180910390f35b61034f61034a3660046115f4565b610726565b604051908152602001610333565b61034f61036b3660046116c7565b610771565b61034f61037e3660046115f4565b61079e565b61034f6103913660046116fd565b6107c9565b61034f6103a4366004611732565b6107e1565b61034f6103b73660046116fd565b6107fd565b6103cf6103ca3660046116fd565b61080d565b6040516103339190611767565b6103226103ea3660046116c7565b610829565b61034f6103fd3660046115f4565b61088e565b61034f6104103660046117d3565b6108a5565b610322610423366004611732565b6108b9565b61034f610436366004611837565b6108f7565b61034f6104493660046115f4565b61090b565b61032261045c3660046115f4565b610936565b61034f61046f366004611732565b610952565b61034f610482366004611891565b61098b565b61049a610495366004611912565b6109e1565b604051610333949392919061199b565b6103226104b8366004611732565b610a2b565b61034f6104cb3660046115f4565b610a3f565b61034f6103b7366004611732565b61034f6104ec366004611837565b610a7c565b61034f6103a43660046116fd565b61051261050d3660046119c7565b610a92565b604051610333959493929190611a1b565b61034f6105313660046115f4565b610af1565b61034f6103fd3660046116c7565b61034f6104cb3660046116c7565b61034f610560366004611732565b610b07565b6105736103ca366004611732565b6040516103339190611a5b565b61034f61058e3660046115f4565b610b30565b61034f610391366004611732565b61034f6105af3660046115f4565b610b5b565b61034f6105c2366004611732565b610b86565b61034f6105d5366004611732565b610b99565b61032261031d3660046116c7565b6105fb6105f63660046115f4565b610bc2565b604051610333929190611a6e565b61034f61036b3660046115f4565b61034f6106253660046117d3565b610c10565b61034f6106383660046115f4565b610c26565b61032261064b3660046115f4565b610c51565b61034f61065e366004611a87565b610c67565b61034f61065e366004611912565b61032261067f3660046115f4565b610c94565b61034f6105c23660046116fd565b6103226103ea3660046115f4565b6106b36106ae366004611837565b610ca7565b60408051938452602084019290925290820152606001610333565b6000806106d9610cca565b6107126106ea84865b906020020190565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00180519091565b909250905061071f610cca565b9250929050565b6000610730610cca565b610761610cd28361075a602061074a885160209081020190565b6107549190611aee565b876106e2565b9190610d39565b905061076b610cca565b92915050565b600061077b610cca565b61078c61078883856106e2565b5190565b50610795610cca565b825b9392505050565b60006107a8610cca565b610761610dc0836107c2602061074a885160209081020190565b9190610e33565b60006107d3610cca565b6107db610cca565b8161076b565b60006107eb610cca565b81515b90506107f8610cca565b919050565b6000610807610cca565b816107ee565b606081610818610cca565b809150610823610cca565b50919050565b600080610834610cca565b61071261084184866106e2565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08101517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909101519091565b6000610898610cca565b61076161078883856106e2565b60006108af610cca565b6107618383610ee6565b8060006108c4610cca565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082015b90506108f2610cca565b915091565b6000610901610cca565b6107618383610f00565b6000610915610cca565b610761610f1a8361092f602061074a885160209081020190565b9190610f26565b816000610941610cca565b6020830282035b905061071f610cca565b600061095c610cca565b6107ee610f1a6109856020610975865160209081020190565b61097f9190611aee565b856106e2565b90610f6a565b88610994610cca565b8881526020810188905260408101879052606081018690526080810185905260a0810184905260c0810183905260e08101829052610100016109d4610cca565b9998505050505050505050565b60006060600080610a0b60206109fb895160209081020190565b610a059190611aee565b886106e2565b9150869050610a1c82828888610fd6565b90989097509195509350915050565b806000610a36610cca565b602082016108e8565b6000610a49610cca565b610761610a5683856106e2565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015190565b6000610a86610cca565b61076182845b90611036565b6000606080600080610abd6020610aad8b5160209081020190565b610ab79190611aee565b8a6106e2565b9150889050610ace82828a8a610fd6565b9095509350610adf85828a89610fd6565b909a9499509750909550935090915050565b6000610afb610cca565b81835260208301610761565b6000610b11610cca565b6107ee611056610b2a6020610975865160209081020190565b9061106d565b6000610b3a610cca565b6107616110ff83610b54602061074a885160209081020190565b9190611116565b6000610b65610cca565b61076161117883610b7f602061074a885160209081020190565b9190611184565b6000610b90610cca565b6107ee82610a56565b6000610ba3610cca565b6107ee6111ba610bbc6020610975865160209081020190565b906111c7565b60006060610bce610cca565b61071283610bdf81602088016106e2565b6020820290037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00180519181529091565b6000610c1a610cca565b61076182845b90611206565b6000610c30610cca565b61076161122e83610c4a602061074a885160209081020190565b9190611302565b816000610c5c610cca565b602083028201610948565b6000610c71610cca565b610c8283610c7f84876106e2565b52565b610c8a610cca565b835b949350505050565b816000610c9f610cca565b828201610948565b60008282610cb3610cca565b6020828203049250610cc3610cca565b9250925092565b6040516000a0565b60008060005b8351811015610d1a57838181518110610cf357610cf3611b29565b602002602001015182610d069190611b58565b915080610d1281611b6b565b915050610cd8565b5080610d268587611b58565b610d309190611ba3565b95945050505050565b6020810283037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018051828252600091809250600080610d9b857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00180519091565b91509150610db5610db18286868b63ffffffff16565b8352565b505050509392505050565b60008060005b8351811015610e0857838181518110610de157610de1611b29565b602002602001015182610df49190611b58565b915080610e0081611b6b565b915050610dc6565b508084610e158789611b58565b610e1f9190611b58565b610e299190611ba3565b9695505050505050565b6020810283037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00180518282526000918280610e6e836106ea565b915091506000610e9e837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015190565b9050610ed9610eb3828488888d63ffffffff16565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0850152565b5090979650505050505050565b600061079782610c2084518661104e90919063ffffffff16565b600061079782610a8c84518661104e90919063ffffffff16565b60006107978284611b58565b60208181028403805191810191829060005b87831015610f5e57508151610f51828263ffffffff8a16565b9150602083019250610f38565b50909152509392505050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0820180517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090930180519093600092909190610fcb838363ffffffff8816565b905250929392505050565b600060608085610fe557600080fd5b6000806020860260208a039950602089035b808b111561101d578a51890361100f578a935061101d565b998190039991870191610ff7565b50508161102957600080fd5b8152969795505050505050565b600061104282846113e5565b81516020028301610797565b815260200190565b6000816110638486611b58565b610c8c9190611b58565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0820180517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0840180517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09095015190946000939091906110f384848463ffffffff8a16565b90525093949350505050565b60008361110c8385611b58565b610c8c9190611ba3565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0830180517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909401805190946000929091906110f385848463ffffffff8a16565b60006107978383611ba3565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe083018051600091610fcb848363ffffffff8816565b600061076b826002611ba3565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0820180516000916111fc8263ffffffff8616565b9052509192915050565b600061122583835161121e6112188690565b60200190565b91906113fe565b81518301610797565b6060825167ffffffffffffffff81111561124a5761124a6114f6565b604051908082528060200260200182016040528015611273578160200160208202803683370190505b50905060005b83518110156112fa578483828151811061129557611295611b29565b60200260200101518583815181106112af576112af611b29565b60200260200101516112c19190611ba3565b6112cb9190611b58565b8282815181106112dd576112dd611b29565b6020908102919091010152806112f281611b6b565b915050611279565b509392505050565b600060208202840381611315828561147a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe060208602840301805186825291925060006113568383868b63ffffffff16565b9050868151146113c6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4241445f524553554c545f4c454e475448000000000000000000000000000000604482015260640160405180910390fd5b816113d182826113e5565b6020880281019a9950505050505050505050565b60006020830190506113f9818385516114ce565b505050565b5b6020811061143c5782518252602092830192909101907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0016113ff565b80156113f9577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600882021c80835116811985511617835250505050565b606060008267ffffffffffffffff811115611497576114976114f6565b6040519080825280602002602001820160405280156114c0578160200160208202803683370190505b509050602081016112fa8582865b8060200283015b808410156114f05783518352602093840193909201916114d5565b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561156c5761156c6114f6565b604052919050565b600082601f83011261158557600080fd5b8135602067ffffffffffffffff8211156115a1576115a16114f6565b8160051b6115b0828201611525565b92835284810182019282810190878511156115ca57600080fd5b83870192505b848310156115e9578235825291830191908301906115d0565b979650505050505050565b6000806040838503121561160757600080fd5b823567ffffffffffffffff81111561161e57600080fd5b61162a85828601611574565b95602094909401359450505050565b600082601f83011261164a57600080fd5b813567ffffffffffffffff811115611664576116646114f6565b61169560207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611525565b8181528460208386010111156116aa57600080fd5b816020850160208301376000918101602001919091529392505050565b600080604083850312156116da57600080fd5b823567ffffffffffffffff8111156116f157600080fd5b61162a85828601611639565b60006020828403121561170f57600080fd5b813567ffffffffffffffff81111561172657600080fd5b610c8c84828501611639565b60006020828403121561174457600080fd5b813567ffffffffffffffff81111561175b57600080fd5b610c8c84828501611574565b600060208083528351808285015260005b8181101561179457858101830151858201604001528201611778565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b600080604083850312156117e657600080fd5b823567ffffffffffffffff808211156117fe57600080fd5b61180a86838701611639565b9350602085013591508082111561182057600080fd5b5061182d85828601611639565b9150509250929050565b6000806040838503121561184a57600080fd5b823567ffffffffffffffff8082111561186257600080fd5b61186e86838701611574565b9350602085013591508082111561188457600080fd5b5061182d85828601611574565b60008060008060008060008060006101208a8c0312156118b057600080fd5b893567ffffffffffffffff8111156118c757600080fd5b6118d38c828d01611574565b9c60208c01359c5060408c01359b60608101359b5060808101359a5060a0810135995060c0810135985060e08101359750610100013595509350505050565b60008060006060848603121561192757600080fd5b833567ffffffffffffffff81111561193e57600080fd5b61194a86828701611574565b9660208601359650604090950135949350505050565b600081518084526020808501945080840160005b8381101561199057815187529582019590820190600101611974565b509495945050505050565b8481526080602082015260006119b46080830186611960565b6040830194909452506060015292915050565b600080600080608085870312156119dd57600080fd5b843567ffffffffffffffff8111156119f457600080fd5b611a0087828801611574565b97602087013597506040870135966060013595509350505050565b85815260a060208201526000611a3460a0830187611960565b8281036040840152611a468187611960565b60608401959095525050608001529392505050565b6020815260006107976020830184611960565b828152604060208201526000610c8c6040830184611960565b600080600060608486031215611a9c57600080fd5b833567ffffffffffffffff811115611ab357600080fd5b61194a86828701611639565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082611b24577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8082018082111561076b5761076b611abf565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611b9c57611b9c611abf565b5060010190565b808202811582820484141761076b5761076b611abf56fea2646970667358221220c473576214ad27e60ffde3007fa07af9b7964bb7db016c61d4bc62c1c7afa2cd64736f6c63430008110033";

type LibStackTopTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibStackTopTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibStackTopTest__factory extends ContractFactory {
  constructor(...args: LibStackTopTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibStackTopTest> {
    return super.deploy(overrides || {}) as Promise<LibStackTopTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibStackTopTest {
    return super.attach(address) as LibStackTopTest;
  }
  override connect(signer: Signer): LibStackTopTest__factory {
    return super.connect(signer) as LibStackTopTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibStackTopTestInterface {
    return new utils.Interface(_abi) as LibStackTopTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibStackTopTest {
    return new Contract(address, _abi, signerOrProvider) as LibStackTopTest;
  }
}
