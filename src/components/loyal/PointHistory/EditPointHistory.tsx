import React from 'react';
import { Edit } from 'react-admin';
import LoyalPointHistoryForm from './PointHistoryForm';
const EditLoyalPointHistory = (props: any) => {
	return (
		<Edit {...props}>
			<LoyalPointHistoryForm {...props} />
		</Edit>
	);
};

export default EditLoyalPointHistory;
