import React from 'react';
import { Create } from 'react-admin';
import CustomerGradeForm from './CustomerGradeForm';
const CreateCustomerGrade = (props: any) => {
	return (
		<Create {...props}>
			<CustomerGradeForm {...props} />
		</Create>
	);
};

export default CreateCustomerGrade;
