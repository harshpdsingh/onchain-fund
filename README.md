# On-Chain Pension Fund

## Overview
This project is an on-chain pension fund built using [Scaffold-ETH](https://github.com/scaffold-eth/scaffold-eth). It allows users to deposit and manage their retirement funds in a decentralized manner. The system includes a fallback mechanism to transfer funds to a designated wallet if the original owner becomes inactive.

## Features
- **Decentralized Retirement Fund:** Users can deposit and withdraw USDC tokens from their pension fund.
- **Proof of Life Mechanism:** Users must periodically update their activity to prevent automatic fallback transfers.
- **Fallback Wallet:** Users can set a fallback wallet where funds will be transferred if they remain inactive beyond a set period (90 days).
- **Secure Transactions:** Built with security measures such as reentrancy protection and pausable contract functionality.
- **Blockchain Integration:** Deployed on Ethereum's Sepolia testnet using a mock USDC contract for testing.

## Smart Contract
The core logic is handled by the `Retirement` smart contract, which includes:
- **Deposit & Withdrawal:** Users can deposit USDC into their retirement fund and withdraw it as needed.
- **Transaction History:** All deposits, withdrawals, and fallback transfers are recorded for transparency.
- **Fallback Transfers:** If a user remains inactive for more than 90 days, their funds are transferred to their designated fallback wallet.
- **Admin Controls:** The contract owner can pause and unpause the contract for security purposes.

### Smart Contract Addresses (Sepolia Testnet)
- **Retirement Contract:** `0x01d7c78154bFE64d1d5529e327b18fE6e693070a`
- **USDC Mock Contract:** `0x8bAD9cB8155F8524DD12e5c72259578294299dE3`

## Web Application
The front-end is built using **Next.js** and allows users to interact with the smart contract easily. Features include:
- **Deposit & Withdraw Funds**
- **Set a Fallback Wallet**
- **Check Account Balance**
- **View Transaction History**
- **Update Proof of Life**

## Installation & Setup
To run the project locally:
```bash
# Clone the repository
git clone https://github.com/harshpdsingh/onchain-fund.git
cd onchain-fund/packages/nextjs

# Install dependencies
yarn install

# Start the development server
yarn start
```

Ensure you have **Metamask** installed and connected to the Sepolia testnet.

## Future Enhancements
- Integration with real USDC on the Ethereum mainnet
- Support for multiple fallback wallets
- Improved UI/UX for seamless user experience
- Smart contract upgrades for more flexibility

