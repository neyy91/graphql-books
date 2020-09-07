import "reflect-metadata";
require('dotenv').config()
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { BookResolver } from "./resolvers/BookResolver";
import { AuthorResolver } from "./resolvers/AuthorResolver";


export async function main() {
  await createConnection({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_MAIN,
    entities: [
      __dirname + "/models/*.ts"
    ],
    synchronize: true,
    logging: false
  });

  const schema = await buildSchema({ resolvers: [BookResolver, AuthorResolver] });
  const server = new ApolloServer({ schema });
  await server.listen(process.env.PORT_TEST);
  console.log("Server has started!",process.env.PORT_TEST);
}

main();
