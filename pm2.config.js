const env = {
  NODE_ENV: 'production',
  HTTP_PORT: '80',
  HTTPS_PORT: '443',
  PROXY_PORT: '3000',
  CREDENTIALS_ENABLED: '0',
  //CREDENTIALS_PATH: '',
  //CREDENTIALS_CA: '',
  //CREDENTIALS_KEY: '',
  //CREDENTIALS_CERT: '',
  MONGO_URI: 'mongodb://localhost/bit_pal',
  JWT_SECRET: 'SECRET_KEY_FOR_CREATING_USER_TOKEN',
  WEBHOOK_ENABLED: '1',
  WEBHOOK_SECRET: 'code_h1gh_webhook_secret',
};

const root = '/home/ubuntu/BidPal';

module.exports = {
  apps: [
    {
      name: 'bidPal',
      script: root + '/bin/www',
      env,
    },
  ]
};
