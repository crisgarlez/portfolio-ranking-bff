import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    app: {
      version: process.env.APP_VERSION,
    },
    rankingService: {
      url: process.env.URL,
    },
  };
});
