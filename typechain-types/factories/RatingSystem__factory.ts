/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { RatingSystem, RatingSystemInterface } from "../RatingSystem";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_question",
        type: "string",
      },
    ],
    name: "addQuestion",
    outputs: [
      {
        internalType: "uint256",
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
        internalType: "uint256",
        name: "_quesID",
        type: "uint256",
      },
    ],
    name: "deleteQuestion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_quesID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rateID",
        type: "uint256",
      },
    ],
    name: "deleteRating",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_questionID",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_rate",
        type: "uint8",
      },
    ],
    name: "rate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610e61806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806340342308146100515780638037559e1461006d5780639a3c4c7914610089578063f129dbd9146100a5575b600080fd5b61006b600480360381019061006691906106fd565b6100d5565b005b61008760048036038101906100829190610776565b6102e4565b005b6100a3600480360381019061009e91906107b6565b61042e565b005b6100bf60048036038101906100ba9190610929565b6105a8565b6040516100cc9190610981565b60405180910390f35b6001600083815260200190815260200160002060040160009054906101000a900460ff16610138576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161012f906109d3565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff1660016000848152602001908152602001600020600301600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146101f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101e790610a3f565b60405180910390fd5b60016000838152602001908152602001600020600301600082815260200190815260200160002060000160159054906101000a900460ff16610267576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025e90610aab565b60405180910390fd5b600160008381526020019081526020016000206003016000828152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a81549060ff02191690556000820160156101000a81549060ff021916905550505050565b60018160ff16101580156102fc575060058160ff1611155b61033b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610332906109d3565b60405180910390fd5b6000600160008481526020019081526020016000209050600081600201600081548092919061036990610afa565b9190505590503382600301600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508282600301600083815260200190815260200160002060000160146101000a81548160ff021916908360ff160217905550600182600301600083815260200190815260200160002060000160156101000a81548160ff02191690831515021790555050505050565b3373ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146104d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c9906109d3565b60405180910390fd5b600115156001600083815260200190815260200160002060040160009054906101000a900460ff1615151461053c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610533906109d3565b60405180910390fd5b60016000828152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006105879190610656565b60028201600090556004820160006101000a81549060ff0219169055505050565b60008060008154809291906105bc90610afa565b9190505550600060016000805481526020019081526020016000209050338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508281600101908161062d9190610d59565b5060018160040160006101000a81548160ff021916908315150217905550600054915050919050565b50805461066290610b7c565b6000825580601f106106745750610693565b601f0160209004906000526020600020908101906106929190610696565b5b50565b5b808211156106af576000816000905550600101610697565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6106da816106c7565b81146106e557600080fd5b50565b6000813590506106f7816106d1565b92915050565b60008060408385031215610714576107136106bd565b5b6000610722858286016106e8565b9250506020610733858286016106e8565b9150509250929050565b600060ff82169050919050565b6107538161073d565b811461075e57600080fd5b50565b6000813590506107708161074a565b92915050565b6000806040838503121561078d5761078c6106bd565b5b600061079b858286016106e8565b92505060206107ac85828601610761565b9150509250929050565b6000602082840312156107cc576107cb6106bd565b5b60006107da848285016106e8565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610836826107ed565b810181811067ffffffffffffffff82111715610855576108546107fe565b5b80604052505050565b60006108686106b3565b9050610874828261082d565b919050565b600067ffffffffffffffff821115610894576108936107fe565b5b61089d826107ed565b9050602081019050919050565b82818337600083830152505050565b60006108cc6108c784610879565b61085e565b9050828152602081018484840111156108e8576108e76107e8565b5b6108f38482856108aa565b509392505050565b600082601f8301126109105761090f6107e3565b5b81356109208482602086016108b9565b91505092915050565b60006020828403121561093f5761093e6106bd565b5b600082013567ffffffffffffffff81111561095d5761095c6106c2565b5b610969848285016108fb565b91505092915050565b61097b816106c7565b82525050565b60006020820190506109966000830184610972565b92915050565b600082825260208201905092915050565b50565b60006109bd60008361099c565b91506109c8826109ad565b600082019050919050565b600060208201905081810360008301526109ec816109b0565b9050919050565b7f54686520726174696e67206f776e6572206e6f74206d61746368656400000000600082015250565b6000610a29601c8361099c565b9150610a34826109f3565b602082019050919050565b60006020820190508181036000830152610a5881610a1c565b9050919050565b7f54686520726174696e6720616c72656164792044656c65746564000000000000600082015250565b6000610a95601a8361099c565b9150610aa082610a5f565b602082019050919050565b60006020820190508181036000830152610ac481610a88565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610b05826106c7565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610b3757610b36610acb565b5b600182019050919050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610b9457607f821691505b602082108103610ba757610ba6610b4d565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610c0f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610bd2565b610c198683610bd2565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610c56610c51610c4c846106c7565b610c31565b6106c7565b9050919050565b6000819050919050565b610c7083610c3b565b610c84610c7c82610c5d565b848454610bdf565b825550505050565b600090565b610c99610c8c565b610ca4818484610c67565b505050565b5b81811015610cc857610cbd600082610c91565b600181019050610caa565b5050565b601f821115610d0d57610cde81610bad565b610ce784610bc2565b81016020851015610cf6578190505b610d0a610d0285610bc2565b830182610ca9565b50505b505050565b600082821c905092915050565b6000610d3060001984600802610d12565b1980831691505092915050565b6000610d498383610d1f565b9150826002028217905092915050565b610d6282610b42565b67ffffffffffffffff811115610d7b57610d7a6107fe565b5b610d858254610b7c565b610d90828285610ccc565b600060209050601f831160018114610dc35760008415610db1578287015190505b610dbb8582610d3d565b865550610e23565b601f198416610dd186610bad565b60005b82811015610df957848901518255600182019150602085019450602081019050610dd4565b86831015610e165784890151610e12601f891682610d1f565b8355505b6001600288020188555050505b50505050505056fea26469706673582212208235bf5d7617a80da924a35603943b4ee74545426ba67d62a56146a3a35fe94164736f6c63430008110033";

type RatingSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RatingSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RatingSystem__factory extends ContractFactory {
  constructor(...args: RatingSystemConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RatingSystem> {
    return super.deploy(overrides || {}) as Promise<RatingSystem>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RatingSystem {
    return super.attach(address) as RatingSystem;
  }
  override connect(signer: Signer): RatingSystem__factory {
    return super.connect(signer) as RatingSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RatingSystemInterface {
    return new utils.Interface(_abi) as RatingSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RatingSystem {
    return new Contract(address, _abi, signerOrProvider) as RatingSystem;
  }
}
