import * as dotenv from "dotenv";
dotenv.config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nomicfoundation/hardhat-verify";
import "hardhat-deploy";
import "hardhat-deploy-ethers";

const deployerPrivateKey =
  process.env.DEPLOYER_PRIVATE_KEY ?? "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const etherscanApiKey = process.env.ETHERSCAN_API_KEY || "DNXJA8RX2Q3VZ4URQIWP7Z68CJXQZSC6AW";
const forkingURL = process.env.FORKING_URL || "";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  defaultNetwork: "sepolia",
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks: {
    // Local development network with forking capability
    hardhat: {
      forking: {
        url: forkingURL,
        enabled: process.env.MAINNET_FORKING_ENABLED === "true",
      },
    },
    // Only Sepolia network kept
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/-IcOyIXHcvV-v5Y1MHMFmzQuw1cQNFbf", // More reliable endpoint
      accounts: [deployerPrivateKey],
    },
  },
  etherscan: {
    apiKey: etherscanApiKey,
  },
  verify: {
    etherscan: {
      apiKey: etherscanApiKey,
    },
  },
  sourcify: {
    enabled: false,
  },
};

export default config;
