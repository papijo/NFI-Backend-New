require("dotenv").config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const PASS_SECRET_CRYPTOJS = process.env.PASS_SECRET_CRYPTOJS;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = {
  MONGODB_URI,
  PORT,
  PASS_SECRET_CRYPTOJS,
  JWT_SECRET_KEY,
};
