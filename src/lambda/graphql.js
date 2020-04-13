const { ApolloServer, gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (root, args, context) => 'Hello, world!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

exports.handler = server.createHandler();

// const { ApolloServer } = require('apollo-server-lambda');
// const { typeDefs } = require('./lib/typeDefs');
// const { resolvers } = require('./lib/resolvers');

// const lambda = newApolloServer({
//   typeDefs,
//   resolvers,
//   playground: true,
//   introspection: true
// });

// exports.handler = lambda.createHandler({
//   cors: {
//     origin: '*',
//     credentials: true
//   }
// });
