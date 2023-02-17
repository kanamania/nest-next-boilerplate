export const configuration = () => ({
  NODE_ENV: process.env.API_ENV,
  port: parseInt(process.env.PORT, 10) || 333,
  isGlobal: true,
});
