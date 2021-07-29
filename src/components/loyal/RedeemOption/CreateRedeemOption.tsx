import React from 'react';
import { Create } from 'react-admin';
import RedeemOptionForm from './RedeemOptionForm';
const CreateRedeemOption = (props: any) => {
	return (
		<Create {...props}>
			<RedeemOptionForm />
		</Create>
	);
};

export default CreateRedeemOption;
