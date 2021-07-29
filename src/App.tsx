import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import buildHasuraProvider from "ra-data-hasura";
import React, { useEffect, useState } from "react";
import { Admin } from "react-admin";
import resources from "./AdminResources";
import Dashboard from "./components/dashboard/Dashboard";
import i18nProvider from "./localization/i18n/i18nProvider";
import { MyAuthProvider } from "./MyAuthProvider";
import CustomLayout from "./reactAdminCustom/CustomLayout";
import CustomLogin from "./reactAdminCustom/CustomLogin";
import { theme } from "./theme";
// import  Core_userList  from './components/core/Core_userList';
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

const getDynamicResources = () => resources.filter((one) => one);

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
        <Admin
          authProvider={new MyAuthProvider()}
          theme={theme}
          i18nProvider={i18nProvider}
          dataProvider={dataProvider as any}
          loginPage={CustomLogin}
          dashboard={Dashboard}
          layout={CustomLayout}
        >
          {getDynamicResources}
        </Admin>
      </ApolloProvider>
    </>
  );
}

export default App;
