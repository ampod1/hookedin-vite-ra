import {
	ApolloClient,
	ApolloProvider,
	HttpLink,
	InMemoryCache,
} from '@apollo/client';
import buildHasuraProvider from 'ra-data-hasura';
import React, { useEffect, useState } from 'react';
import {
	Admin,
	DashboardMenuItem,
	LegacyDataProvider,
	ListGuesser,
	Resource,
} from 'react-admin';
import { MyAuthProvider } from './MyAuthProvider';
// import  Core_userList  from './components/core/Core_userList';
const headers = {
	'content-type': 'application/json',
	'x-hasura-admin-secret': import.meta.env.VITE_HASURA_GRAPHQL_ADMIN_SECRET,
};
import CustomLogin from './reactAdminCustom/CustomLogin';
import CustomLayout from './reactAdminCustom/CustomLayout';

import { theme } from './theme';
import Dashboard from './components/dashboard/Dashboard';
import i18nProvider from './localization/i18n/i18nProvider';
import UserList from './components/core/coreUser/UserList';
import UsertypeList from './components/core/coreUsertype/UsertypeList';
import CustomerList from './components/bsc/customer/CustomerList';
import CustomerTypeList from './components/bsc/customerType/CustomerTypeList';
import LoyalPointHistoryList from './components/loyal/PointHistory/PointHistoryList';
import CreateLoyalPointHistory from './components/loyal/PointHistory/CreatePointHistory';
import EditLoyalPointHistory from './components/loyal/PointHistory/EditPointHistory';
import RedeemOptionTypeList from './components/loyal/RedeemOptionType/RedeemOptionTypeList';
import CreateRedeemOptionType from './components/loyal/RedeemOptionType/CreateRedeemOptionType';
import EditRedeemOptionType from './components/loyal/RedeemOptionType/EditRedeemOptionType';
import RedeemOptionList from './components/loyal/RedeemOption/RedeemOptionList';
import EditRedeemOption from './components/loyal/RedeemOption/EditRedeemOption';
import CreateRedeemOption from './components/loyal/RedeemOption/CreateRedeemOption';
import EditCustomerGradeType from './components/loyal/CustomerGradeType/EditCustomerGradeType';
import CustomerGradeTypeList from './components/loyal/CustomerGradeType/CustomerGradeTypeList';
import CreateCustomerGradeType from './components/loyal/CustomerGradeType/CreateCustomerGradeType';
import CustomerGradeList from './components/loyal/CustomerGrade/CustomerGradeList';
import EditCustomerGrade from './components/loyal/CustomerGrade/EditCustomerGrade';
import CreateCustomerGrade from './components/loyal/CustomerGrade/CreateCustomerGrade';

const createApolloClient = () => {
	return new ApolloClient({
		link: new HttpLink({
			uri: 'https://caring-labrador-34.hasura.app/v1/graphql',
			headers,
		}),
		cache: new InMemoryCache(),
		defaultOptions: {
			query: { fetchPolicy: 'network-only' },
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
				<Admin
					authProvider={new MyAuthProvider()}
					theme={theme}
					i18nProvider={i18nProvider}
					dataProvider={dataProvider as any}
					loginPage={CustomLogin}
					dashboard={Dashboard}
					layout={CustomLayout}
				>
					<Resource name="bsc_customer" list={CustomerList} />
					<Resource name="bsc_customer_type" list={CustomerTypeList} />
					<Resource name="core_user" list={UserList} />
					<Resource name="user_types" list={UsertypeList} />
					<Resource
						name="loyal_point_history"
						list={LoyalPointHistoryList}
						create={CreateLoyalPointHistory}
						edit={EditLoyalPointHistory}
					/>
					<Resource
						name="loyal_redeem_option_type"
						list={RedeemOptionTypeList}
						create={CreateRedeemOptionType}
						edit={EditRedeemOptionType}
					/>
					<Resource
						name="loyal_redeem_option"
						list={RedeemOptionList}
						create={CreateRedeemOption}
						edit={EditRedeemOption}
					/>
					<Resource
						name="loyal_customer_grade_type"
						list={CustomerGradeTypeList}
						edit={EditCustomerGradeType}
						create={CreateCustomerGradeType}
					/>
					<Resource
						name="loyal_customer_grade"
						list={CustomerGradeList}
						edit={EditCustomerGrade}
						create={CreateCustomerGrade}
					/>
				</Admin>
			</ApolloProvider>
		</>
	);
}

export default App;
