import React from "react";
import {
  Datagrid,
  DateField,
  FieldProps,
  List,
  ListProps,
  NumberField,
  ReferenceField,
  TextField,
  useLocale,
  useRecordContext,
} from "react-admin";
import { useMyDefaultStyles } from "../../../styles/default";
import CoinIconSVG from "../../../svg/money.svg";

const CoinsCounterField = (props: FieldProps) => {
  const record = useRecordContext(props);
  return (
    <span>
      {(+record.points_count).toLocaleString()}{" "}
      <img src={CoinIconSVG} style={{ width: "1em" }} />
    </span>
  );
};
const LoyalPointHistoryList = (props: ListProps) => {
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
        <CoinsCounterField
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
