import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("cuckoo:token")
      : undefined;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  ssrMode: false,
  link: authLink.concat(
    new HttpLink({
      uri:
        process && process.env.NODE_ENV !== "production"
          ? "http://localhost:4123/api-gateway/"
          : "https://cuckoo.network/api-gateway/",
      fetch,
      credentials: "same-origin",
      headers: {
        ...(process.env.NEXT_PUBLIC_USER_AUTH_TOKEN
          ? {
              authorization: `Bearer ${process.env.NEXT_PUBLIC_USER_AUTH_TOKEN}`,
            }
          : {}),
        ["x-test"]: "test",
      },
    }),
  ),
  cache: new InMemoryCache(),
});
