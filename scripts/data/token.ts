import { ChainId } from '../types';

export const TOKENS = {
  WETH: {
    [ChainId.BSC]: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    [ChainId.ARBITRUM]: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    [ChainId.ARBITRUM_GOERLI]: '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3',
    [ChainId.OPTIMISM]: '0x4200000000000000000000000000000000000006',
    // [NetworkChain.OPTIMISM]: '0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000',
    [ChainId.BASE]: '0x4200000000000000000000000000000000000006',
    [ChainId.BASE_GOERLI]: '0x4200000000000000000000000000000000000006',
  },
};

export const TEST_TOKENS = {
  // Dummy 6 decimal "stable"
  SUSD: {
    [ChainId.BASE_GOERLI]: '0xf0d799E4600FF12ce3c4cdd67F8F460e7dF1eFea',
  },
  WBTZ: {
    [ChainId.BASE_GOERLI]: '0x243CAf595F57005e6A067645FeE1e5c1Cdbc60a2',
  },
};
