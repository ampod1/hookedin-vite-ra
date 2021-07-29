import React from 'react';
import { Edit } from 'react-admin';
import CustomerGradeForm from './CustomerGradeForm';
const EditCustomerGrade = (props: any) => {
	return (
		<Edit {...props}>
			<CustomerGradeForm {...props} />
		</Edit>
	);
};

export default EditCustomerGrade;
