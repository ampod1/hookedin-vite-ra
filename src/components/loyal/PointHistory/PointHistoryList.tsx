import React from 'react';
import {
	Datagrid,
	ListProps,
	ReferenceField,
	TextField,
	useLocale,
	List,
	NumberField,
	DateField,
} from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';

const LoyalPointHistoryList = (props: ListProps) => {
	const defaultClss = useMyDefaultStyles();
	const lang = useLocale();
	return (
		<List {...props} sort={{ field: 'code', order: 'ASC' }}>
			<Datagrid>
				<NumberField
					headerClassName={defaultClss.header}
					label="custom_root.main.code"
					source="code"
				/>
				<NumberField
					source="points_count"
					headerClassName={defaultClss.header}
					label="Points"
				/>
				<ReferenceField
					source="customer_id"
					reference="bsc_customer"
					headerClassName={defaultClss.header}
					label="custom_root.main.customer_name"
				>
					<TextField source="name.full" />
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

export default LoyalPointHistoryList;
