import React from 'react';
import {
	NumberInput,
	ReferenceInput,
	SelectInput,
	SimpleForm,
	TextInput,
	useLocale,
} from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';

const RedeemOptionForm = (props: any) => {
	const defaultClss = useMyDefaultStyles();
	const lang = useLocale();
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
			<ReferenceInput
				label="Option Type"
				reference="loyal_redeem_option_type"
				source="option_type_id"
				headerClassName={defaultClss.header}
			>
				<SelectInput optionText={`label.${lang}`} />
			</ReferenceInput>
			<NumberInput
				label="cost"
				source="Cose"
				headerClassName={defaultClss.header}
			/>
		</SimpleForm>
	);
};

export default RedeemOptionForm;
