import React from 'react';
import {
	Datagrid,
	DateField,
	List,
	ListProps,
	NumberField,
	ReferenceField,
	TextField,
	useLocale,
} from 'react-admin';

export default function CustomerList(props: ListProps) {

	const lang = useLocale();
	return (
		<List {...props}>
			<Datagrid rowClick="edit">
				<NumberField
					source="code"
					label="custom_root.main.code"

				/>
				<TextField
					source="name.full"

					label="custom_root.main.customer_name"
				/>

				<DateField
					source="created_at"
					label="custom_root.main.created_at"

				/>
			</Datagrid>
		</List>
	);
}
