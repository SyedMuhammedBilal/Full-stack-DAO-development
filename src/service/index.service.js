import Web3 from "web3";
import { config, contractAddress } from "../config/config";
import { Contract_ABi } from "../ABis/RaydiumDAO";

export class IndexService {
  contractAbi;
  contractAddress;

  constructor(_contractAbi, _contractAddress) {
    this.contractAbi = _contractAbi;
    this.contractAddress = _contractAddress;
  }

  getProposalCounts = async () => {
    try {
      const { contractServerUrl } = config;
      console.log("contractServerUrl", contractServerUrl);
      console.log("this.contractAbi", this.contractAbi);
      console.log("this.contractAddress", this.contractAddress);
      const contract = new contractServerUrl.eth.Contract(
        Contract_ABi,
        contractAddress
      );
      const proposalCounts = await contract.methods.nextProposal().call();
      return proposalCounts;
    } catch (error) {
      return error;
    }
  };

  getProposalDetail = async (proposalId) => {
    try {
      const { contractServerUrl } = config;
      const contract = new contractServerUrl.eth.Contract(
        this.contractAbi,
        contractAddress
      );
      const proposal = await contract.methods.getProposal().call();
      return proposal;
    } catch (error) {
      return error;
    }
  };

  createProposal = async (description, title) => {
    try {
      const { contractServerUrl } = config;
      const contract = new contractServerUrl.eth.Contract(
        this.contractAbi,
        contractAddress
      );
      const proposal = await contract.methods
        .createProposal(description, title)
        .send({
          from: sessionStorage.getItem("walletAddress"),
        });
      return proposal;
    } catch (error) {
      return error;
    }
  };

  voteOnProposal = async (proposalId, vote) => {
    try {
      const { contractServerUrl } = config;
      const contract = new contractServerUrl.eth.Contract(
        this.contractAbi,
        contractAddress
      );
      const proposal = await contract.methods
        .voteOnProposal(proposalId, vote)
        .send({
          from: sessionStorage.getItem("walletAddress"),
        });
      return proposal;
    } catch (error) {
      return error;
    }
  };
}
