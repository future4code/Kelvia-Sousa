import knex from 'knex'
import {config} from 'dotenv'

config()

export const connection = knex({ // Estabelece conexão com o banco
 client: "mysql",
 connection: {
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
 multipleStatements: true
 }
})