require("reflect-metadata");
require('dotenv').config()
const createConnection = require("typeorm").createConnection
const { ApolloServer } = require('apollo-server');

const buildSchema = require("type-graphql").buildSchema
const BookResolver = require("../../src/resolvers/BookResolver")
const AuthorResolver = require("../../src/resolvers/AuthorResolver")

async function main() {
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

  const schema = await buildSchema({
    resolvers: [
      BookResolver,
      AuthorResolver
    ]
  });

  const server = new ApolloServer({ schema });

  return server.listen(process.env.PORT_TEST).then(({ url }) => {
    console.log(`🚀  Test Server ready at ${url}`);
    return server
  });
}


module.exports = async () => {
  console.log('---start---')
  global.httpServer = await  main();
};

















// async function start() {
//     return require('../../src/index').main()
// }

// module.exports = async () => {

//     console.log('---start---')
//     // global.httpServer = await  server.main();
//     const server = await start();
    
//     console.log('\n\n check 1 \n\n')

//     await server.listen(process.env.PORT_TEST);

//     console.log('\n\n check \n\n')
   
//   };
