# ⚔️ Guild Tactics Vault

> **The Ultimate Encrypted Gaming Experience**  
> Where strategy meets privacy in the blockchain realm

![Guild Tactics Vault](https://img.shields.io/badge/Status-Live-brightgreen) ![FHE](https://img.shields.io/badge/Encryption-FHE-blue) ![Ethereum](https://img.shields.io/badge/Network-Sepolia-orange)

## 🎮 What is Guild Tactics Vault?

Guild Tactics Vault is a revolutionary gaming platform that combines the thrill of competitive guild battles with cutting-edge privacy technology. Built on **Fully Homomorphic Encryption (FHE)**, it ensures your strategies, contributions, and reputation remain completely private while still being verifiable on-chain.

### 🌟 Key Features

- 🛡️ **Encrypted Guild Management** - Create and manage guilds with complete data privacy
- 🏆 **Private Tournaments** - Compete in tournaments where your skill level is encrypted
- ⚔️ **FHE-Protected Battles** - Battle other guilds with encrypted tactics and strategies  
- 📊 **Anonymous Reputation** - Build reputation through encrypted contributions
- 🔗 **Multi-Wallet Support** - Connect with Rainbow, MetaMask, and other popular wallets

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Web3 wallet (MetaMask, Rainbow, etc.)
- Testnet ETH for gas fees

### Installation

```bash
# Clone the repository
git clone https://github.com/lemoncookie456/guild-tactics-vault.git
cd guild-tactics-vault

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup

Create a `.env.local` file:

```env
# Network Configuration
VITE_CHAIN_ID=11155111
VITE_RPC_URL=your_rpc_url_here

# Wallet Configuration  
VITE_WALLET_CONNECT_PROJECT_ID=your_project_id_here

# Contract Address
VITE_GUILD_TACTICS_VAULT_ADDRESS=your_contract_address_here
```

## 🔐 Smart Contract Architecture

Our FHE-enabled smart contract provides unprecedented privacy protection:

- **Encrypted Guild Data** - Membership and contributions remain private
- **Private Tournament Results** - Participation and outcomes are encrypted
- **Secret Battle Tactics** - Strategies are hidden until battle completion
- **Anonymous Reputation** - Skill levels and achievements are encrypted

### 🛠️ Contract Capabilities

- **FHE Guild Creation** - Create guilds with encrypted target amounts
- **Private Contributions** - Contribute with encrypted amounts
- **Secure Tournaments** - Join tournaments with encrypted entry fees
- **Encrypted Battles** - Battle with hidden tactics and encrypted results
- **Anonymous Reputation** - Build encrypted reputation through achievements

## 🚀 Deployment Guide

### Frontend Deployment (Vercel)

1. **Connect Repository**
   - Link your GitHub repository to Vercel
   - Configure build settings for Vite

2. **Environment Variables**
   ```env
   VITE_CHAIN_ID=11155111
   VITE_RPC_URL=your_rpc_endpoint
   VITE_WALLET_CONNECT_PROJECT_ID=your_project_id
   VITE_GUILD_TACTICS_VAULT_ADDRESS=deployed_contract_address
   ```

3. **Deploy**
   - Click deploy and wait for build completion
   - Your app will be live at your Vercel domain

### Smart Contract Deployment

```bash
# Install Hardhat dependencies
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox

# Deploy to Sepolia testnet
npx hardhat run scripts/deploy.js --network sepolia

# Update environment variables with deployed address
```

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 **Issues**: [GitHub Issues](https://github.com/lemoncookie456/guild-tactics-vault/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/lemoncookie456/guild-tactics-vault/discussions)
- 📖 **Documentation**: Check our [Wiki](https://github.com/lemoncookie456/guild-tactics-vault/wiki)

---

<div align="center">

**Built with ❤️ by the Guild Tactics Vault Team**

[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?logo=github)](https://github.com/lemoncookie456/guild-tactics-vault)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://guild-tactics-vault.vercel.app)

</div>
