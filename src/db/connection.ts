import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env' });
export default new Sequelize(
    process.env.POSTGRES_DB!,
    process.env.POSTGRES_USERNAME!,
    String(process.env.POSTGRES_PASSWORD),
    {
        port: Number(process.env.POSTGRES_PORT),
        dialect: "postgres",
        host: String(process.env.POSTGRES_HOST),
    })