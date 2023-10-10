import "reflect-metadata";

import path from 'node:path';

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AppointmentsResolver } from "./resolver/appointments-resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      AppointmentsResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    validate: false
  })

  const server = new ApolloServer({
    schema,
  })

  const { url } = await server.listen()

  console.log(`✨ HTTP server running on ${url}`)
}

bootstrap()