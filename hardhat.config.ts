import * as dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@openzeppelin/hardhat-upgrades';
import '@nomiclabs/hardhat-etherscan';
import 'hardhat-contract-sizer';
import 'hardhat-gas-reporter';

dotenv.config();

const accounts = process.env.DEV_KEY !== undefined ? [process.env.DEV_KEY] : [];

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.15',
        settings: {
          // evmVersion: 'london',
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  contractSizer: {
    // override defaults as needed: https://www.npmjs.com/package/hardhat-contract-sizer
  },
  etherscan: {
    apiKey: {
      base: process.env.BASE_SCAN_API_KEY,
      scrollSepolia: 'abc',
      scroll: process.env.SCROLL_SCAN_API_KEY,
      mode: 'mode',
    },
    customChains: [
      {
        network: 'base',
        chainId: 8453,
        urls: {
          apiURL: 'https://api.basescan.org',
          browserURL: 'https://basescan.org',
        },
      },
      {
        network: 'scrollSepolia',
        chainId: 534351,
        urls: {
          apiURL: 'https://sepolia-blockscout.scroll.io/api',
          browserURL: 'https://sepolia-blockscout.scroll.io/',
        },
      },
      {
        network: 'scroll',
        chainId: 534352,
        urls: {
          apiURL: 'https://api.scrollscan.com/api',
          browserURL: 'https://scrollscan.com/',
        },
      },
      {
        network: 'mode',
        chainId: 34443,
        urls: {
          apiURL: 'https://api.routescan.io/v2/network/mainnet/evm/34443/etherscan',
          browserURL: 'https://modescan.io',
        },
      },
    ],
  },
  gasReporter: {
    enabled: true,
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.BASE_RPC || '',
        blockNumber: 5984940, // 10/31/23 9:30AM EST
      },
    },
    arbitrum: {
      url: process.env.ARBITRUM_RPC || '',
      accounts,
      chainId: 42161,
    },
    arbitrum_goerli: {
      url: process.env.ARBITRUM_GOERLI_RPC || '',
      accounts,
      chainId: 421613,
    },
    optimism: {
      url: `${process.env.OPTIMISM_RPC}`,
      accounts,
      chainId: 10,
    },
    optimism_goerli: {
      url: `${process.env.OPTIMISM_GOERLI_RPC}`,
      accounts,
      chainId: 420,
    },
    base: {
      url: process.env.BASE_RPC || '',
      accounts,
      chainId: 8453,
      // gas: 500000,
      // gasPrice: 100,
    },
    baseGoerli: {
      url: process.env.BASE_GOERLI_RPC,
      accounts,
      chainId: 84531,
      gas: 500000,
      gasPrice: 100,
    },
    bsc: {
      url: process.env.BSC_RPC || '',
      accounts,
      chainId: 56,
    },
    scroll: {
      url: process.env.SCROLL_RPC,
      accounts,
      chainId: 534352,
    },
    scrollSepolia: {
      url: process.env.SCROLL_SEPOLIA_RPC,
      accounts,
      chainId: 534351,
    },
    // fraxtal: {
    //   url: process.env.FRAXTAL_RPC,
    //   accounts,
    //   chainId: 252,
    // },
    fraxtalTestnet: {
      url: process.env.FRAXTAL_TESTNET_RPC,
      accounts,
      chainId: 2522,
    },
    mode: {
      url: process.env.MODE_RPC,
      accounts,
      chainId: 34443,
    },
    modeTestnet: {
      url: process.env.MODE_TESTNET_RPC,
      accounts,
      chainId: 919,
    },
  },
};

export default config;
