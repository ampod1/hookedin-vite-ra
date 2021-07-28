import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import buildHasuraProvider from "ra-data-hasura";
import React, { useEffect, useState } from "react";
import { Admin, LegacyDataProvider, ListGuesser, Resource } from "react-admin";
import CustomerList from "./components/bsc/CustomersList";
const headers = {
  "content-type": "application/json",
  "x-hasura-admin-secret": import.meta.env.VITE_HASURA_GRAPHQL_ADMIN_SECRET,
};

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://caring-labrador-34.hasura.app/v1/graphql",
      headers,
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      query: { fetchPolicy: "network-only" },
    },
  });
};

const client = createApolloClient();

function App() {
  const [dataProvider, setDataProvider] = useState<null | Function>(null);

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider(
        {
          client,
        }
        //{ buildFields: customBuildFields }
      );
      setDataProvider(() => dataProvider);
    };
    buildDataProvider();
  }, []);

  if (!dataProvider) return <p>Loading...</p>;
  return (
    <>
      <ApolloProvider client={client}>
        <Admin dataProvider={dataProvider as any}>
          <Resource name="bsc_customer" list={CustomerList} />
        </Admin>
      </ApolloProvider>
    </>
  );
}

export default App;
