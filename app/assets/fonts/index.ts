import { config } from '@/constants';

const {
  fonts: { onest },
} = config;

const fonts = {
  [onest.regular]: require('./Onest_400Regular.ttf'),
  [onest.medium]: require('./Onest_500Medium.ttf'),
  [onest.semiBold]: require('./Onest_600SemiBold.ttf'),
  [onest.bold]: require('./Onest_700Bold.ttf'),
};

export { fonts };
