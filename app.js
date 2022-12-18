const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const express = require('express');
const resolvers = require('./resolver/resolver');
const typeDefs = require('./schema/schema');
const mongoDataMethods = require('./data/db');

require('dotenv').config();

connectDB();
startApolloServer();

async function connectDB() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected!');
  } catch (error) {
    console.log('🚀 ~ error', error.message);
    process.exit(1);
  }
}

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongoDataMethods }),
  });
  await server.start();

  server.applyMiddleware({ app });

  app.use((req, res) => {
    res.status(200);
    res.send('Hello!');
    res.end();
  });

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}
