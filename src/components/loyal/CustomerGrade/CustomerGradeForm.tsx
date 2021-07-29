import React from 'react';
import {
	SimpleForm,
	SelectInput,
	ReferenceInput,
	useLocale,
} from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';
const CustomerGradeForm = (props: any) => {
	const defaultClss = useMyDefaultStyles();
	const lang = useLocale();
	return (
		<SimpleForm {...props}>
			<ReferenceInput
				headerClassName={defaultClss.header}
				label="custom_root.main.customer_name"
				reference="bsc_customer"
				source="customer_id"
			>
				<SelectInput optionText="name.full" />
			</ReferenceInput>
			<ReferenceInput
				label="Customer Grade Type"
				reference="loyal_customer_grade_type"
				source="cutomer_grade_type_id"
			>
				<SelectInput optionText={`label.${lang}`} />
			</ReferenceInput>
		</SimpleForm>
	);
};

export default CustomerGradeForm;
