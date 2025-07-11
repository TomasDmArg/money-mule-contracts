/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { Addressable } from "ethers";
import { Contract, ContractFactory, ContractTransactionResponse, Interface } from "ethers"
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers"
import type { NonPayableOverrides } from "../../common.js"
  import type { MoneyMuleRound, MoneyMuleRoundInterface, MoneyMuleFactory } from "../../MoneyMuleRound.sol/MoneyMuleRound.js";

  const _abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_roundId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_founder",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_targetAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_fundingDeadline",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "fundingAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "internalType": "address[3]",
            "name": "juryWallets",
            "type": "address[3]"
          }
        ],
        "internalType": "struct MoneyMuleFactory.MilestoneData[]",
        "name": "_milestones",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "ReentrancyGuardReentrantCall",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "SafeERC20FailedOperation",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "milestoneId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "FundsReleased",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "investor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "InvestmentMade",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "investor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "InvestmentWithdrawn",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "investor",
        "type": "address"
      }
    ],
    "name": "InvestorWhitelisted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "milestoneId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "juror",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approve",
        "type": "bool"
      }
    ],
    "name": "JuryVoteCast",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "milestoneId",
        "type": "uint256"
      }
    ],
    "name": "MilestoneCompleted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "milestoneId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "triggeredBy",
        "type": "address"
      }
    ],
    "name": "MilestoneDeadlineTriggered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "milestoneId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "enum MoneyMuleRound.MilestoneStatus",
        "name": "result",
        "type": "uint8"
      }
    ],
    "name": "MilestoneVotingFinalized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "enum MoneyMuleRound.RoundPhase",
        "name": "newPhase",
        "type": "uint8"
      }
    ],
    "name": "PhaseChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "RoundCancelled",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "VERIFICATION_DELAY",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "VOTING_PERIOD",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "cancelRound",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "milestoneId",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "approve",
        "type": "bool"
      }
    ],
    "name": "castJuryVote",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "milestoneId",
        "type": "uint256"
      }
    ],
    "name": "completeMilestone",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "createdAt",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "factory",
    "outputs": [
      {
        "internalType": "contract MoneyMuleFactory",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "milestoneId",
        "type": "uint256"
      }
    ],
    "name": "finalizeMilestoneVoting",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "founder",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "fundingDeadline",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "investor",
        "type": "address"
      }
    ],
    "name": "getInvestmentAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "milestoneId",
        "type": "uint256"
      }
    ],
    "name": "getMilestone",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "fundingAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "internalType": "address[3]",
        "name": "juryWallets",
        "type": "address[3]"
      },
      {
        "internalType": "enum MoneyMuleRound.MilestoneStatus",
        "name": "status",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "votesFor",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "votesAgainst",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "votingStartTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "completedAt",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "fundsReleased",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRoundInfo",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "founderAddr",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "tokenAddr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "target",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "current",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "internalType": "enum MoneyMuleRound.RoundPhase",
        "name": "currentPhase",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "created",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalMilestones",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "investor",
        "type": "address"
      }
    ],
    "name": "getWithdrawableAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "milestoneId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "juror",
        "type": "address"
      }
    ],
    "name": "hasJurorVoted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "invest",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "investments",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "investor",
        "type": "address"
      }
    ],
    "name": "isWhitelisted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "milestones",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "fundingAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "internalType": "enum MoneyMuleRound.MilestoneStatus",
        "name": "status",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "votesFor",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "votesAgainst",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "votingStartTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "completedAt",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "fundsReleased",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "milestonesCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "moveToExecutionPhase",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "phase",
    "outputs": [
      {
        "internalType": "enum MoneyMuleRound.RoundPhase",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "milestoneId",
        "type": "uint256"
      }
    ],
    "name": "releaseFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "roundId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "targetAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "token",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "milestoneId",
        "type": "uint256"
      }
    ],
    "name": "triggerMilestoneDeadline",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "whitelist",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "investor",
        "type": "address"
      }
    ],
    "name": "whitelistInvestor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdrawInvestment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;

  const _bytecode = "0x60806040523461045d576120da8038038061001981610461565b92833981019060c08183031261045d57805161003760208301610486565b61004360408401610486565b9060608401519260808501519460a08101519060018060401b03821161045d570186601f8201121561045d578051966001600160401b0388116102fd578760051b91602080610093818601610461565b809b815201938201019082821161045d5760208101935b82851061033457505050505060015f553360018060a01b0319600154161760015560025560018060a01b031660018060a01b0319600354161760035560018060a01b031660018060a01b0319600454161760045560055560075560ff1960085416600855426009558051600a555f905b805182101561032557600182019182811161031157825f52600b60205260405f20928355610148818361049a565b5151805160018501916001600160401b0382116102fd57825490600182811c921680156102f3575b60208310146102df5781601f849311610294575b50602090601f8311600114610231575f92610226575b50508160011b915f199060031b1c19161790555b60206101ba828461049a565b510151600284015560406101ce828461049a565b510151600384015560606101e2828461049a565b510151925f5b600381106102065750600701805460ff19169055600101915061011a565b84516001600160a01b0316600482840101556020909401936001016101e8565b015190505f8061019a565b5f8581528281209350601f198516905b81811061027c5750908460019594939210610264575b505050811b0190556101ae565b01515f1960f88460031b161c191690555f8080610257565b82840151855560019094019360209384019301610241565b909150835f5260205f20601f840160051c810191602085106102d5575b601f0160051c01905b8181106102ca5783929150610184565b5f81556001016102ba565b90915081906102b1565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610170565b634e487b7160e01b5f52604160045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b604051611c1790816104c38239f35b84516001600160401b03811161045d57820160c0818603601f19011261045d5760405190608082016001600160401b038111838210176102fd5760405260208101516001600160401b03811161045d5760209082010186601f8201121561045d5780516001600160401b0381116102fd576103b8601f8201601f1916602001610461565b91818352886020838301011161045d57815f9260208093018386015e830101528252604081015160208301526060810151604083015285609f8201121561045d5760405190606082016001600160401b038111838210176102fd576040528160e082019188831161045d57608001905b8282106104455750505060608201528152602094850194016100aa565b6020809161045284610486565b815201910190610428565b5f80fd5b6040519190601f01601f191682016001600160401b038111838210176102fd57604052565b51906001600160a01b038216820361045d57565b80518210156104ae5760209160051b010190565b634e487b7160e01b5f52603260045260245ffdfe60806040526004361015610011575f80fd5b5f5f3560e01c80632037fcbf146114fd5780632442e1cb14611391578063298f76701461129b5780632afcf48014610f965780632d6fa4b2146107ac5780633af32abf1461076d5780634d68282f14610dbb5780634d853ee514610d925780635c41290514610b115780636c8dc28814610a95578063796b23bb14610a7757806384bc76a6146109f8578063852ea2031461091557806386a594d0146108215780638cd221c914610803578063953b8fb8146107e557806396b98862146107ac5780639b19251a1461076d578063ab36e4a61461074f578063b1610d7e14610731578063b1c9fe6e14610709578063c430bcda1461057f578063c45a015514610556578063cf09e0d014610538578063e89e4ed61461047f578063efc4020f146102f0578063f0bc9de9146102d2578063f441b1c8146102b4578063f55627ac146101c6578063f67771751461019a5763fc0c546a1461016f575f80fd5b346101975780600319360112610197576004546040516001600160a01b039091168152602090f35b80fd5b50346101975760203660031901126101975760206101be6101b961169d565b61195d565b604051908152f35b503461019757602036600319011261019757600435801515806102a8575b6101ed90611814565b808252600b6020526040822060ff600782015416600581101561029457906102196001600a93146118e5565b015462093a8081018091116102805742111561023b5761023890611b12565b80f35b60405162461bcd60e51b815260206004820152601760248201527f566f74696e6720706572696f64206e6f7420656e6465640000000000000000006044820152606490fd5b634e487b7160e01b83526011600452602483fd5b634e487b7160e01b84526021600452602484fd5b50600a548111156101e4565b50346101975780600319360112610197576020600654604051908152f35b50346101975780600319360112610197576020604051620151808152f35b50346101975760203660031901126101975760043580151580610473575b61031790611814565b60ff60085416600481101561045f5760010361042157808252600b602052604082206007810160ff815416600581101561040d576103d0576003820154421061039457600160ff19825416179055600a4291015533907f7b7babea0984d2d2fe5a374d5b4097070a22989f78c3a0c151da411fbd967b9e8380a380f35b60405162461bcd60e51b8152602060048201526014602482015273111958591b1a5b99481b9bdd081c995858da195960621b6044820152606490fd5b60405162461bcd60e51b81526020600482015260156024820152744d696c6573746f6e65206e6f742070656e64696e6760581b6044820152606490fd5b634e487b7160e01b85526021600452602485fd5b60405162461bcd60e51b81526020600482015260166024820152754e6f7420696e20657865637574696f6e20706861736560501b6044820152606490fd5b634e487b7160e01b83526021600452602483fd5b50600a5481111561030e565b5034610197576020366003190112610197576040906004358152600b6020522080546104ad600183016116f6565b9160028101549060038101549060ff6007820154166008820154600983015490610517600a8501549360ff600c600b88015497015416966105026040519b8c9b8c5261014060208d01526101408c019061166c565b9860408b015260608a01526080890190611690565b60a087015260c086015260e085015261010084015215156101208301520390f35b50346101975780600319360112610197576020600954604051908152f35b50346101975780600319360112610197576001546040516001600160a01b039091168152602090f35b50346101975760203660031901126101975761059961169d565b6003546001600160a01b0316906105b13383146118a7565b60ff600854166004811015610294576105ca9015611857565b6001600160a01b03169081156106c457811461066d57808252600d60205260ff60408320541661063257808252600d60205260408220805460ff191660011790557fded95a7461813082c997645a1b5e07eb321073a96b7c65dc7f793625383f896e8280a280f35b60405162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481dda1a5d195b1a5cdd1959606a1b6044820152606490fd5b60405162461bcd60e51b815260206004820152602960248201527f466f756e6465722063616e6e6f742062652077686974656c69737465642061736044820152681034b73b32b9ba37b960b91b6064820152608490fd5b60405162461bcd60e51b815260206004820152601860248201527f496e76616c696420696e766573746f72206164647265737300000000000000006044820152606490fd5b5034610197578060031936011261019757602060ff6008541661072f60405180926116b3565bf35b5034610197578060031936011261019757602060405162093a808152f35b50346101975780600319360112610197576020600a54604051908152f35b50346101975760203660031901126101975760209060ff906040906001600160a01b0361079861169d565b168152600d84522054166040519015158152f35b5034610197576020366003190112610197576020906040906001600160a01b036107d461169d565b168152600c83522054604051908152f35b50346101975780600319360112610197576020600554604051908152f35b50346101975780600319360112610197576020600254604051908152f35b503461019757806003193601126101975761084760018060a01b036003541633146118a7565b60ff600854166004811015610901576002146108bc57600360ff1960085416176008557fa6dcc92f45df25789d5639b7a0c97ba1edf3bb1c0b5dd3376fd96a0db87c464260206040517fdd287b702179a5c0cb1da128f0c74f3d92185d10282e995ed8ad9285d24c74938480a160038152a180f35b60405162461bcd60e51b815260206004820152601d60248201527f43616e6e6f742063616e63656c20636f6d706c6574656420726f756e640000006044820152606490fd5b634e487b7160e01b82526021600452602482fd5b50346101975760203660031901126101975760043561093f60018060a01b036003541633146118a7565b801515806109ec575b61095190611814565b808252600b602052604082206007810160ff815416600581101561040d576002036109ae57600460ff19825416179055600b429101557f41f5e423c5ae79dcb8565618891e74a7a6e76232568150b33d79001a62391b1e8280a280f35b60405162461bcd60e51b8152602060048201526016602482015275135a5b195cdd1bdb99481b9bdd08185c1c1c9bdd995960521b6044820152606490fd5b50600a54811115610948565b503461019757806003193601126101975761012060025460018060a01b036003541660018060a01b0360045416610a6a6005546006546007549060ff600854169260095495600a5497604051998a5260208a015260408901526060880152608087015260a086015260c08501906116b3565b60e0830152610100820152f35b50346101975780600319360112610197576020600754604051908152f35b503461019757604036600319011261019757602435906004356001600160a01b0383168303610b0d57600d9181604092151580610b01575b610ad690611814565b8152600b60205220019060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50600a54811115610acd565b5080fd5b5034610197576040366003190112610197576004356024359081151591828103610d8e5781151580610d82575b610b4790611814565b818452600b60205260408420928493855b6003811015610d7857818101600401546001600160a01b03163314610b7f57600101610b58565b50509091925060015b15610d2357828452600b6020526040842060ff6007820154166005811015610d0f576001610bb691146118e5565b600a81015462093a808101809111610cfb574211610cc057600d81019160018060a01b0333165f528260205260ff60405f205416610c8b57335f9081526020939093526040909220805460ff19166001179055600392610c64929015610c765760088201610c248154611931565b90555b604051908152847fef017823c80f585322c8be7799173653043d474e1999b3aa57075f99f458ce2060203393a3600960088201549101549061189a565b14610c6d575080f35b61023890611b12565b60098201610c848154611931565b9055610c27565b60405162461bcd60e51b815260206004820152600d60248201526c105b1c9958591e481d9bdd1959609a1b6044820152606490fd5b60405162461bcd60e51b8152602060048201526013602482015272159bdd1a5b99c81c195c9a5bd908195b991959606a1b6044820152606490fd5b634e487b7160e01b86526011600452602486fd5b634e487b7160e01b86526021600452602486fd5b60405162461bcd60e51b815260206004820152602760248201527f4e6f7420617574686f72697a6564206a75726f7220666f722074686973206d696044820152666c6573746f6e6560c81b6064820152608490fd5b5050909192610b88565b50600a54821115610b3e565b8380fd5b50346101975780600319360112610197576003546040516001600160a01b039091168152602090f35b503461019757602036600319011261019757600435610de560018060a01b036003541633146118a7565b80151580610f8a575b610df790611814565b610dff61193f565b808252600b6020526040822060ff600782015416600581101561029457600403610f4557600c81019081549060ff8216610f0757600b810154620151808101809111610cfb574210610ec257610e8d6002610e96927f80230996023d69b50793fa73f1919127c9d8e741d3989743c479169f22e7a28895600160209660ff19161790550154600654906117c2565b600554906117e9565b600454600354610eb49183916001600160a01b039081169116611ad6565b604051908152a26001815580f35b60405162461bcd60e51b815260206004820152601a60248201527f566572696669636174696f6e2064656c6179206e6f74206d65740000000000006044820152606490fd5b60405162461bcd60e51b8152602060048201526016602482015275119d5b991cc8185b1c9958591e481c995b19585cd95960521b6044820152606490fd5b60405162461bcd60e51b815260206004820152601760248201527f4d696c6573746f6e65206e6f7420636f6d706c657465640000000000000000006044820152606490fd5b50600a54811115610dee565b50346111745760203660031901126111745760043560ff60085416600481101561128757610fc49015611857565b610fcc61193f565b335f52600d60205260ff60405f2054161561125057600754421161120b5780156111b557610ffc8160065461189a565b60055410611178576004546040516323b872dd60e01b60208201523360248201523060448201526064808201849052815261104a916001600160a01b03166110456084836116c0565b611b89565b335f52600c60205260405f205415611104575b338252600c6020526040822061107482825461189a565b90556110828160065461189a565b80600655600554146110c2575b6040519081527f07146ef3ff2146eaf34fa4d392d4c56663333b682654b3123bf270f9ec529f3160203392a26001815580f35b6110d4600160ff196008541617600855565b7fa6dcc92f45df25789d5639b7a0c97ba1edf3bb1c0b5dd3376fd96a0db87c4642602060405160018152a161108f565b600154600254906001600160a01b0316803b156111745760405163c2c8a71b60e01b815233600482015260248101929092525f908290604490829084905af1801561116957611154575b5061105d565b6111619192505f906116c0565b5f905f61114e565b6040513d5f823e3d90fd5b5f80fd5b60405162461bcd60e51b8152602060048201526015602482015274115e18d959591cc81d185c99d95d08185b5bdd5b9d605a1b6044820152606490fd5b60405162461bcd60e51b815260206004820152602860248201527f496e766573746d656e7420616d6f756e74206d75737420626520677265617465604482015267072207468616e20360c41b6064820152608490fd5b60405162461bcd60e51b815260206004820152601760248201527f46756e64696e6720646561646c696e65207061737365640000000000000000006044820152606490fd5b60405162461bcd60e51b815260206004820152600f60248201526e139bdd081dda1a5d195b1a5cdd1959608a1b6044820152606490fd5b634e487b7160e01b5f52602160045260245ffd5b34611174575f3660031901126111745760ff600854166004811015611287576112c49015611857565b60075442111561134c5760065415611315576112e8600160ff196008541617600855565b7fa6dcc92f45df25789d5639b7a0c97ba1edf3bb1c0b5dd3376fd96a0db87c4642602060405160018152a1005b60405162461bcd60e51b815260206004820152600f60248201526e139bc8199d5b991cc81c985a5cd959608a1b6044820152606490fd5b60405162461bcd60e51b815260206004820152601c60248201527f46756e64696e6720646561646c696e65206e6f742072656163686564000000006044820152606490fd5b3461117457602036600319011261117457600435606090816040516113b682826116c0565b369037801515806114f1575b906113cf60049392611814565b5f52600b60205260405f2090815491600281015491600382015460ff6007840154166008840154600985015491600a86015493600b8701549560ff600c89015416978161141e600183016116f6565b6040519d90928e91015f825b600382106114cb5750505061145c9291611443916116c0565b6040519b8c526101a060208d01526101a08c019061166c565b9860408b0152890152608088015f905b600382106114ab5750508798506114879060e0890190611690565b61010087015261012086015261014085015261016084015215156101808301520390f35b8a516001600160a01b0316815260209a8b019a600192909201910161146c565b600192945082919350602090828060a01b0386541681520193019101908e91859361142a565b50600a548111156113c2565b346111745760203660031901126111745760043561151961193f565b335f52600c60205260405f2054908115611627576115363361195d565b80156115d7578115818382156115cd575b50506115c5575b61155c8293611561936117c2565b6117e9565b335f52600c60205261157860405f20918254611807565b905560045461159390829033906001600160a01b0316611ad6565b6040519081527fca2b4d68e42b50bb8686d4e808d2fb68c569d9b8f497cc8784d7fe315d889e8760203392a260015f55005b90508061154e565b1190508185611547565b60405162461bcd60e51b815260206004820152602260248201527f4e6f20616d6f756e7420617661696c61626c6520666f72207769746864726177604482015261185b60f21b6064820152608490fd5b60405162461bcd60e51b815260206004820152601960248201527f4e6f20696e766573746d656e7420746f207769746864726177000000000000006044820152606490fd5b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b9060058210156112875752565b600435906001600160a01b038216820361117457565b9060048210156112875752565b90601f8019910116810190811067ffffffffffffffff8211176116e257604052565b634e487b7160e01b5f52604160045260245ffd5b90604051915f8154908160011c92600183169283156117b8575b6020851084146117a4578487528693908115611782575060011461173e575b5061173c925003836116c0565b565b90505f9291925260205f20905f915b81831061176657505090602061173c928201015f61172f565b602091935080600191548385890101520191019091849261174d565b90506020925061173c94915060ff191682840152151560051b8201015f61172f565b634e487b7160e01b5f52602260045260245ffd5b93607f1693611710565b818102929181159184041417156117d557565b634e487b7160e01b5f52601160045260245ffd5b81156117f3570490565b634e487b7160e01b5f52601260045260245ffd5b919082039182116117d557565b1561181b57565b60405162461bcd60e51b8152602060048201526014602482015273125b9d985b1a59081b5a5b195cdd1bdb9948125160621b6044820152606490fd5b1561185e57565b60405162461bcd60e51b81526020600482015260146024820152734e6f7420696e2066756e64696e6720706861736560601b6044820152606490fd5b919082018092116117d557565b156118ae57565b60405162461bcd60e51b815260206004820152600f60248201526e2737ba103a3432903337bab73232b960891b6044820152606490fd5b156118ec57565b60405162461bcd60e51b815260206004820152601f60248201527f4d696c6573746f6e65206e6f742061637469766520666f7220766f74696e67006044820152606490fd5b5f1981146117d55760010190565b60025f541461194e5760025f55565b633ee5aeb560e01b5f5260045ffd5b6001600160a01b03165f908152600c60205260409020548015611ad15760ff6008541660048110156112875760038114611a5657801580611a4b575b611a475760018114908115611a3c575b506119b357505f90565b905f6001600a54905b818111156119f057505061155c6119ed92936119e76119e1610e8d60065480966117c2565b84611807565b906117c2565b90565b805f52600b60205260ff600c60405f20015416611a16575b611a1190611931565b6119bc565b91611a34611a1191845f52600b602052600260405f2001549061189a565b929050611a08565b60029150145f6119a9565b5090565b506007544211611999565b50905f6001600a54905b81811115611a8557505061155c6119ed92936119e76119e1610e8d60065480966117c2565b805f52600b60205260ff600c60405f20015416611aab575b611aa690611931565b611a60565b91611ac9611aa691845f52600b602052600260405f2001549061189a565b929050611a9d565b505f90565b60405163a9059cbb60e01b60208201526001600160a01b0392909216602483015260448083019390935291815261173c916110456064836116c0565b805f52600b6020527f3d14b90f5a2b8d465304355e828bb6bfe279cbd6ef0fe1291b343176c920aad5602060ff600760405f2060088101546009820154105f14611b7757818101600284198254161790555b015416611b746040518092611690565ba2565b81810160038419825416179055611b64565b905f602091828151910182855af115611169575f513d611bd857506001600160a01b0381163b155b611bb85750565b635274afe760e01b5f9081526001600160a01b0391909116600452602490fd5b60011415611bb156fea2646970667358221220a4d4cc392837b8d0878daff93d50995969dedca4e4ac83dc6138fe504496935364736f6c634300081c0033";

  
      type MoneyMuleRoundConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

      const isSuperArgs = (xs: MoneyMuleRoundConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
        xs.length > 1
    

  export class MoneyMuleRound__factory extends ContractFactory {
    
      constructor(...args: MoneyMuleRoundConstructorParams) {
        if (isSuperArgs(args)) {
          super(...args);
        } else {
          super(_abi, _bytecode, args[0]);
        }
        
      }
    
    override getDeployTransaction(_roundId: BigNumberish, _founder: AddressLike, _token: AddressLike, _targetAmount: BigNumberish, _fundingDeadline: BigNumberish, _milestones: MoneyMuleFactory.MilestoneDataStruct[], overrides?: NonPayableOverrides & { from?: string }): Promise<ContractDeployTransaction> {
      return super.getDeployTransaction(_roundId, _founder, _token, _targetAmount, _fundingDeadline, _milestones, overrides || {});
    };
    override deploy(_roundId: BigNumberish, _founder: AddressLike, _token: AddressLike, _targetAmount: BigNumberish, _fundingDeadline: BigNumberish, _milestones: MoneyMuleFactory.MilestoneDataStruct[], overrides?: NonPayableOverrides & { from?: string }) {
      return super.deploy(_roundId, _founder, _token, _targetAmount, _fundingDeadline, _milestones, overrides || {}) as Promise<MoneyMuleRound & {
        deploymentTransaction(): ContractTransactionResponse;
      }>;
    }
    override connect(runner: ContractRunner | null): MoneyMuleRound__factory {
      return super.connect(runner) as MoneyMuleRound__factory;
    }
    
    
    static readonly bytecode = _bytecode;
    static readonly abi = _abi;
    static createInterface(): MoneyMuleRoundInterface {
      return new Interface(_abi) as MoneyMuleRoundInterface;
    }
    
    override attach(address: string | Addressable): MoneyMuleRound {
      return super.attach(address) as MoneyMuleRound;
    }
  static connect(address: string, runner?: ContractRunner | null): MoneyMuleRound {
      return new Contract(address, _abi, runner) as unknown as MoneyMuleRound;
    }
  }

  
  