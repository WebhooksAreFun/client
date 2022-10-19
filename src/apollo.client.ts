import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import { setContext } from "@apollo/client/link/context";
import { ACCESS_TOKEN_KEY } from "./local-storage";

export const createApolloClient = (httpUrl: string) => {
  const origin = new URL(httpUrl).origin;
  const graphqlUrl = `${origin}/graphql`;
  const wsUrl = graphqlUrl.replace("http", "ws");

  const httpLink = new HttpLink({
    uri: graphqlUrl,
  });

  const authLink = setContext((_, { headers }) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    return {
      headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
    };
  });

  const wsLink = new GraphQLWsLink(
    createClient({
      url: wsUrl,
    })
  );

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    authLink.concat(httpLink)
  );

  return new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  });
};
