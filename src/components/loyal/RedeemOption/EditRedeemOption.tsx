import React from 'react';
import { Edit } from 'react-admin';
import RedeemOptionForm from './RedeemOptionForm';
const EditRedeemOption = (props: any) => {
	return (
		<Edit {...props}>
			<RedeemOptionForm />
		</Edit>
	);
};

export default EditRedeemOption;
