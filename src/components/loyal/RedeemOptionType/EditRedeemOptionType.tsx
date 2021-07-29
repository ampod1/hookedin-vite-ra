import React from 'react';
import { Edit } from 'react-admin';
import RedeemOptionTypeForm from './RedeemOptionTypeForm';
const EditRedeemOptionType = (props: any) => {
	return (
		<Edit {...props}>
			<RedeemOptionTypeForm {...props} />
		</Edit>
	);
};

export default EditRedeemOptionType;
