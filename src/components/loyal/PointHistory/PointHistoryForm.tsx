import React from 'react';
import {
	NumberInput,
	ReferenceInput,
	SelectInput,
	SimpleForm,
} from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';

const LoyalPointHistoryForm = (props: any) => {
	const defaultClss = useMyDefaultStyles();

	return (
		<SimpleForm {...props}>
			<NumberInput
				source="points_count"
				headerClassName={defaultClss.header}
				label="Points"
			/>
			<ReferenceInput
				source="customer_id"
				reference="bsc_customer"
				headerClassName={defaultClss.header}
				label="custom_root.main.customer_name"
			>
				<SelectInput optionText="name.full" />
			</ReferenceInput>
		</SimpleForm>
	);
};

export default LoyalPointHistoryForm;
