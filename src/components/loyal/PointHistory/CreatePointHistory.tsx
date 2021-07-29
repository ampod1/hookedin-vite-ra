import React from 'react';
import { Create } from 'react-admin';
import LoyalPointHistoryForm from './PointHistoryForm';
const CreateLoyalPointHistory = (props: any) => {
	return (
		<Create {...props}>
			<LoyalPointHistoryForm {...props} />
		</Create>
	);
};

export default CreateLoyalPointHistory;
