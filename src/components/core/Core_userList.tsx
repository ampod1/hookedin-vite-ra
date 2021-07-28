import React from "react";
import {
  List,
  Datagrid,
  NumberField,
  DateField,
  ReferenceField,
  TextField,
  EmailField,
} from "react-admin";

export const Core_userList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="code" />
      <DateField source="created_at" />
      <ReferenceField source="customer_id" reference="bsc_customer">
        <TextField source="name.full" />
      </ReferenceField>
      <EmailField source="email" />
      <TextField source="id" />
      <TextField source="name.full" />
      <TextField source="passwired" />
      <DateField source="updated_at" />

      <ReferenceField source="user_type_id" reference="user_types">
        <TextField source="id" />
      </ReferenceField>

      <TextField source="media.profile_img.url" />
      <TextField source="phone" />
    </Datagrid>
  </List>
);
