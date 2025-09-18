import { createPublicClient, createWalletClient, http, defineChain } from 'viem';

// Define Sepolia chain configuration
export const sepolia = defineChain({
  id: 11155111,
  name: 'Sepolia',
  network: 'sepolia',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990'],
    },
    public: {
      http: ['https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990'],
    },
  },
  blockExplorers: {
    default: { name: 'Etherscan', url: 'https://sepolia.etherscan.io' },
  },
  testnet: true,
});

// Contract addresses (to be deployed)
export const CONTRACT_ADDRESSES = {
  GuildTacticsVault: '0x0000000000000000000000000000000000000000', // Replace with actual deployed address
} as const;

// Contract ABIs
export const GUILD_TACTICS_VAULT_ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_targetAmount",
        "type": "uint256"
      }
    ],
    "name": "createGuild",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_guildId",
        "type": "uint256"
      }
    ],
    "name": "joinGuild",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_guildId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "contributeToGuild",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_guildId",
        "type": "uint256"
      }
    ],
    "name": "getGuildInfo",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "targetAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "currentAmount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "creator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isActive",
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
        "name": "_guildId",
        "type": "uint256"
      }
    ],
    "name": "getGuildMembers",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

// Create public client
export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
});

// Create wallet client (will be initialized with user's wallet)
export const createWalletClientInstance = (account: any) => {
  return createWalletClient({
    account,
    chain: sepolia,
    transport: http(),
  });
};
