import React from 'react';
import { Create } from 'react-admin';
import CustomerGradeTypeForm from './CustomerGradeTypeForm';
const CreateCustomerGradeType = (props: any) => {
	return (
		<Create {...props}>
			<CustomerGradeTypeForm {...props} />
		</Create>
	);
};

export default CreateCustomerGradeType;
