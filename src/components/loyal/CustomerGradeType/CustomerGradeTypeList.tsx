import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	DateField,
	NumberField,
	useLocale,
	ListProps,
} from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';
const CustomerGradeTypeList = (props: ListProps) => {
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
				<NumberField
					headerClassName={defaultClss.header}
					label="Points Limiit"
					source="point_limit"
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

export default CustomerGradeTypeList;
