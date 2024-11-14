import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import {
  baseSepolia
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Koala Collection',
  projectId: 'ywm6lmmwwwhxspst',
  chains: [
    baseSepolia,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [baseSepolia] : []),
  ],
  ssr: true,
  transports: [http("https://base-sepolia.g.alchemy.com/v2/pzYaueJOOGaIX7IzzPhdr_RjJdZrGOQS")],
});