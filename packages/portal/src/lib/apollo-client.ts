import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const apolloClient = new ApolloClient({
  ssrMode: false,
  link: new HttpLink({
    uri:
      process && process.env.NODE_ENV !== "production"
        ? "http://localhost:4134/api-gateway/"
        : "https://cuckoo.network/api-gateway/",
    fetch,
    credentials: "same-origin",
    headers: {
      ...(process.env.NEXT_PUBLIC_USER_AUTH_TOKEN ? {
        authorization:
          `Bearer ${process.env.NEXT_PUBLIC_USER_AUTH_TOKEN}`,
      }: {})
    }
  }),
  cache: new InMemoryCache(),
});
