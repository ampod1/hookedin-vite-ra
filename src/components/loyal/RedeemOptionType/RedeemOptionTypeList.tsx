import React from "react";
import {
  Datagrid,
  DateField,
  List,
  ListProps,
  NumberField,
  TextField,
  useLocale,
} from "react-admin";
import { useMyDefaultStyles } from "../../../styles/default";
const RedeemOptionTypeList = (props: ListProps) => {
  const defaultClss = useMyDefaultStyles();
  const lang = useLocale();

  return (
    <List {...props} sort={{ field: "code", order: "ASC" }}>
      <Datagrid rowClick="edit">
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
        <DateField
          source="created_at"
          label="custom_root.main.created_at"
          headerClassName={defaultClss.header}
        />
      </Datagrid>
    </List>
  );
};

export default RedeemOptionTypeList;
