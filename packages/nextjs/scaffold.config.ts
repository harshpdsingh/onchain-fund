import { defineChain } from "viem";
import * as chains from "viem/chains";

export const airdao = defineChain({
  id: 22040,
  name: "airdao testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "AMB",
  },
  rpcUrls: {
    default: {
      http: ["https://network.ambrosus-test.io"],
      webSocket: ["https://network.ambrosus-test.io"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://network.ambrosus-test.io" },
  },
});

export type ScaffoldConfig = {
  targetNetworks: readonly chains.Chain[];
  pollingInterval: number;
  alchemyApiKey: string;
  walletConnectProjectId: string;
  onlyLocalBurnerWallet: boolean;
};

const scaffoldConfig = {
  // The networks on which your DApp is live
  targetNetworks: [
    chains.sepolia,
    chains.baseSepolia,
    chains.flowTestnet,
    airdao,
    chains.zircuitTestnet,
    chains.rootstockTestnet,
    chains.polygonZkEvmCardona,
    chains.morphHolesky,
  ],

  // The interval at which your front-end polls the RPC servers for new data
  // it has no effect if you only target the local network (default is 4000)
  pollingInterval: 30000,

  // You can get your Alchemy's default API key at https://dashboard.alchemyapi.io
  // It's recommended to store it in an env variable:
  // .env.local for local testing, and in the Vercel/system env config for live apps.
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "",

  // This is ours WalletConnect's default project ID.
  // You can get your own at https://cloud.walletconnect.com
  // It's recommended to store it in an env variable:
  // .env.local for local testing, and in the Vercel/system env config for live apps.
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "3a8170812b534d0ff9d794f19a901d64",

  // Only show the Burner Wallet when running on hardhat network
  onlyLocalBurnerWallet: true,
} as const satisfies ScaffoldConfig;

export default scaffoldConfig;
