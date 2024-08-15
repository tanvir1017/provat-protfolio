import { bool, cleanEnv, num, str } from "envalid";
const env = cleanEnv(process.env, {
  SMTP_EMAIL: str(),
  SMTP_SERVICE: str(),
  SMTP_HOST: str(),
  SMTP_PORT: num(),
  SMTP_SECURE: bool(),
  SMTP_PASS: str(),
});

export default env;
