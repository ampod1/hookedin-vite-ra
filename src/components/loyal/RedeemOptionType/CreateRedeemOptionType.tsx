import React from 'react';
import { Create } from 'react-admin';
import RedeemOptionTypeForm from './RedeemOptionTypeForm';
const CreateRedeemOptionType = (props: any) => {
	return (
		<Create {...props}>
			<RedeemOptionTypeForm {...props} />
		</Create>
	);
};

export default CreateRedeemOptionType;
