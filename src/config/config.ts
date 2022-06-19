import Web3 from "web3";

export const contractAddress = "0xab1C1AB229b40c31c161Cfd92E4f935889Dd2388";

export const config: any = {
    contractServerUrl: new Web3(Web3.givenProvider || "http://localhost:7545")
}