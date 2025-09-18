# Guild Tactics Vault

A decentralized gaming platform built with FHE (Fully Homomorphic Encryption) technology, enabling secure and private guild battles and tournaments on the blockchain.

## Features

- **Secure Guild Management**: Create and manage gaming guilds with encrypted data
- **Private Tournaments**: Participate in tournaments with encrypted skill levels and contributions
- **FHE-Protected Battles**: Battle other guilds with fully encrypted tactics and strategies
- **Reputation System**: Build reputation through encrypted contributions and victories
- **Wallet Integration**: Connect with popular wallets like Rainbow, MetaMask, and more

## Technology Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Blockchain**: Ethereum Sepolia Testnet
- **Wallet**: RainbowKit, Wagmi, Viem
- **Encryption**: FHE (Fully Homomorphic Encryption) via Zama
- **UI Components**: shadcn/ui, Radix UI

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Web3 wallet (MetaMask, Rainbow, etc.)
- Sepolia ETH for gas fees

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lemoncookie456/guild-tactics-vault.git
cd guild-tactics-vault
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

### Environment Configuration

Create a `.env.local` file with the following variables:

```env
# Chain Configuration
VITE_CHAIN_ID=11155111
VITE_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990

# Wallet Connect Configuration
VITE_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475

# Contract Addresses
VITE_GUILD_TACTICS_VAULT_ADDRESS=0x0000000000000000000000000000000000000000
```

## Smart Contract

The project includes a fully homomorphic encryption-enabled smart contract that protects:

- Guild membership and contributions
- Tournament participation and results
- Battle tactics and strategies
- Player reputation and skill levels

### Contract Features

- **Encrypted Guild Management**: Create guilds with encrypted target amounts and member counts
- **Private Member Contributions**: Contribute to guilds with encrypted amounts
- **Secure Tournament System**: Participate in tournaments with encrypted entry fees and prizes
- **FHE-Protected Battles**: Battle other guilds with encrypted battle points and victory conditions
- **Reputation Tracking**: Build encrypted reputation through contributions and victories

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set the following environment variables in Vercel:
   - `VITE_CHAIN_ID`: 11155111
   - `VITE_RPC_URL`: https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
   - `VITE_WALLET_CONNECT_PROJECT_ID`: 2ec9743d0d0cd7fb94dee1a7e6d33475
   - `VITE_GUILD_TACTICS_VAULT_ADDRESS`: [Your deployed contract address]

3. Deploy the application

### Contract Deployment

1. Install Hardhat dependencies:
```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
```

2. Deploy the contract to Sepolia:
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

3. Update the contract address in your environment variables

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support and questions, please open an issue on GitHub or contact the development team.
