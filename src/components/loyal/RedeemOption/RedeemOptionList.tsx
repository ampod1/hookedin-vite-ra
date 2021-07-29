import React from 'react';
import {
	Datagrid,
	NumberField,
	List,
	useLocale,
	DateField,
	TextField,
	ReferenceField,
} from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';

const RedeemOptionList = (props: any) => {
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
				<TextField
					label="custom_root.main_name"
					headerClassName={defaultClss.header}
					source={`label.${lang}`}
				/>
				<ReferenceField
					label="Option Type"
					reference="loyal_redeem_option_type"
					source="option_type_id"
					headerClassName={defaultClss.header}
				>
					<TextField source={`label.${lang}`} />
				</ReferenceField>
				<NumberField
					headerClassName={defaultClss.header}
					label="Cost"
					source="cost"
				/>
				<DateField
					source="created_at"
					label="custom_root.main.created_at"
					headerClassName={defaultClss.header}
				/>
			</Datagrid>
		</List>
	);
};

export default RedeemOptionList;
