# Vercel Deployment Guide

## Step-by-Step Manual Deployment Instructions

### Prerequisites
- GitHub account with access to the repository
- Vercel account (free tier available)
- Node.js 18+ installed locally (for testing)

### Step 1: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import the repository: `lemoncookie456/guild-tactics-vault`

### Step 2: Configure Environment Variables

In the Vercel dashboard, go to your project settings and add the following environment variables:

```
VITE_CHAIN_ID=11155111
VITE_RPC_URL=your_rpc_endpoint_here
VITE_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id
VITE_INFURA_API_KEY=your_infura_api_key
VITE_GUILD_TACTICS_VAULT_ADDRESS=your_deployed_contract_address
```

### Step 3: Build Configuration

1. In Vercel project settings, go to "Build & Development Settings"
2. Set the following:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Step 4: Deploy

1. Click "Deploy" in the Vercel dashboard
2. Wait for the build to complete (usually 2-3 minutes)
3. Your app will be available at: `https://guild-tactics-vault.vercel.app`

### Step 5: Custom Domain (Optional)

1. In Vercel dashboard, go to "Domains"
2. Add your custom domain
3. Configure DNS settings as instructed by Vercel
4. Wait for SSL certificate to be issued

### Step 6: Contract Deployment

Before the app is fully functional, you need to deploy the smart contract:

#### Install Hardhat Dependencies
```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox @fhevm/solidity
```

#### Create Hardhat Configuration
Create `hardhat.config.js`:
```javascript
require("@nomicfoundation/hardhat-toolbox");
require("@fhevm/solidity");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990",
      accounts: ["YOUR_PRIVATE_KEY"]
    }
  }
};
```

#### Deploy Contract
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

#### Update Environment Variables
After deployment, update the contract address in Vercel:
```
VITE_GUILD_TACTICS_VAULT_ADDRESS=[DEPLOYED_CONTRACT_ADDRESS]
```

### Step 7: Testing

1. Visit your deployed app
2. Connect your wallet (MetaMask, Rainbow, etc.)
3. Switch to Sepolia testnet
4. Get test ETH from [Sepolia Faucet](https://sepoliafaucet.com/)
5. Test guild creation and management features

### Troubleshooting

#### Build Errors
- Ensure all environment variables are set correctly
- Check that all dependencies are installed
- Verify Node.js version compatibility

#### Wallet Connection Issues
- Ensure WalletConnect Project ID is correct
- Check that the app is served over HTTPS
- Verify network configuration

#### Contract Interaction Issues
- Verify contract address is correct
- Ensure user is on Sepolia testnet
- Check that user has sufficient ETH for gas

### Monitoring

1. **Vercel Analytics**: Monitor app performance and usage
2. **GitHub Actions**: Set up CI/CD for automatic deployments
3. **Error Tracking**: Consider adding Sentry for error monitoring

### Security Considerations

1. **Environment Variables**: Never commit sensitive keys to repository
2. **Contract Security**: Audit smart contract before mainnet deployment
3. **Wallet Security**: Educate users about wallet security best practices

### Performance Optimization

1. **Image Optimization**: Use Vercel's built-in image optimization
2. **Caching**: Configure appropriate cache headers
3. **CDN**: Vercel automatically provides global CDN

### Backup and Recovery

1. **Code Backup**: Repository is automatically backed up on GitHub
2. **Database**: If using external database, ensure regular backups
3. **Environment**: Document all environment variables and configurations

### Scaling Considerations

1. **Traffic**: Vercel handles automatic scaling
2. **Database**: Consider database scaling for high traffic
3. **CDN**: Vercel's global CDN handles geographic distribution

### Maintenance

1. **Updates**: Regular dependency updates
2. **Security**: Monitor for security vulnerabilities
3. **Performance**: Regular performance monitoring and optimization

## Support

For deployment issues:
- Check Vercel documentation
- Review GitHub repository issues
- Contact development team

For contract deployment issues:
- Review Hardhat documentation
- Check Sepolia network status
- Verify gas prices and network congestion
