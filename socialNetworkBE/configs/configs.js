module.exports = {
  PORT: process.env.PORT || 3000,

  HOST: process.env.HOST || 'http://localhost',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:4200',

  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:4200;http://localhost:3000',

  JWT_SECRET: process.env.JWT_SECRET || 'SecretToken',
  JWT_SECRET_TIME: process.env.JWT_SECRET_TIME || '30m',

  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'SecretRefreshToken',
  JWT_REFRESH_SECRET_TIME: process.env.JWT_REFRESH_SECRET_TIME || '1h',

  DB_NAME: process.env.DB_NAME || 'localhost',
  DB_HOST: process.env.DB_HOST || 'socianNetwork',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || 'Mn23081995',

  serverRateLimits: {
    period: 15 * 60 * 1000,
    maxRequests: 1000
  }
};
