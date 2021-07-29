import React from 'react';
import { Edit } from 'react-admin';
import CustomerGradeTypeForm from './CustomerGradeTypeForm';
const EditCustomerGradeType = (props: any) => {
	return (
		<Edit {...props}>
			<CustomerGradeTypeForm {...props} />
		</Edit>
	);
};

export default EditCustomerGradeType;
