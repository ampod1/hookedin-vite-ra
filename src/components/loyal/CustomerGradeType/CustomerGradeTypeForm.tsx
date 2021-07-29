import React from 'react';
import { SimpleForm, TextInput, NumberInput } from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';
const CustomerGradeTypeForm = (props: any) => {
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
			<NumberInput
				headerClassName={defaultClss.header}
				label="Points Limit"
				source="point_limit"
			/>
		</SimpleForm>
	);
};

export default CustomerGradeTypeForm;
