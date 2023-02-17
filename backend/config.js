const path = require("path");
const { config } = require("dotenv");

config({ path: path.resolve(__dirname, ".env") });

module.exports = {
  DATABASE_URL: process.env.DATABASE_URL,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
};
