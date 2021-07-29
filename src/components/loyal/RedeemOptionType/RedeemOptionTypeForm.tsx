import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';

import { useMyDefaultStyles } from '../../../styles/default';
const RedeemOptionTypeForm = (props: any) => {
	const defaultClss = useMyDefaultStyles();

	return (
		<SimpleForm {...props}>
			<TextInput
				label="name"
				headerClassName={defaultClss.header}
				source={`label.en`}
			/>
			<TextInput
				label="الاسم"
				headerClassName={defaultClss.header}
				source={`label.ar`}
			/>
		</SimpleForm>
	);
};

export default RedeemOptionTypeForm;
