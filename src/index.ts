import { config } from "dotenv";
config({ path: `./.env/.env.${process.env.NODE_ENV}` });
console.log(process.env.NAME);
