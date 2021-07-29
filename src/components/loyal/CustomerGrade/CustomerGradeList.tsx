import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	DateField,
	NumberField,
	useLocale,
	ListProps,
	ReferenceField,
} from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';
const CustomerGradeList = (props: ListProps) => {
	const defaultClss = useMyDefaultStyles();
	const lang = useLocale();
	return (
		<List {...props}>
			<Datagrid>
				<NumberField
					headerClassName={defaultClss.header}
					label="custom_root.main.code"
					source="code"
				/>
				<ReferenceField
					headerClassName={defaultClss.header}
					label="custom_root.main.customer_name"
					reference="bsc_customer"
					source="customer_id"
				>
					<TextField source="name.full" />
				</ReferenceField>
				<ReferenceField
					headerClassName={defaultClss.header}
					label="Customer Grade Type"
					reference="loyal_customer_grade_type"
					source="cutomer_grade_type_id"
				>
					<TextField source={`label.${lang}`} />
				</ReferenceField>
				<DateField
					source="created_at"
					label="custom_root.main.created_at"
					headerClassName={defaultClss.header}
				/>
			</Datagrid>
		</List>
	);
};

export default CustomerGradeList;
