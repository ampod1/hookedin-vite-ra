import React from "react";
import { Resource } from "react-admin";
import CustomerList from "./components/bsc/customer/CustomerList";
import CustomerTypeList from "./components/bsc/customerType/CustomerTypeList";
import UserList from "./components/core/coreUser/UserList";
import UsertypeList from "./components/core/coreUsertype/UsertypeList";
import CreateCustomerGrade from "./components/loyal/CustomerGrade/CreateCustomerGrade";
import CustomerGradeList from "./components/loyal/CustomerGrade/CustomerGradeList";
import EditCustomerGrade from "./components/loyal/CustomerGrade/EditCustomerGrade";
import CreateCustomerGradeType from "./components/loyal/CustomerGradeType/CreateCustomerGradeType";
import CustomerGradeTypeList from "./components/loyal/CustomerGradeType/CustomerGradeTypeList";
import EditCustomerGradeType from "./components/loyal/CustomerGradeType/EditCustomerGradeType";
import CreateLoyalPointHistory from "./components/loyal/PointHistory/CreatePointHistory";
import EditLoyalPointHistory from "./components/loyal/PointHistory/EditPointHistory";
import LoyalPointHistoryList from "./components/loyal/PointHistory/PointHistoryList";
import CreateRedeemOption from "./components/loyal/RedeemOption/CreateRedeemOption";
import EditRedeemOption from "./components/loyal/RedeemOption/EditRedeemOption";
import RedeemOptionList from "./components/loyal/RedeemOption/RedeemOptionList";
import CreateRedeemOptionType from "./components/loyal/RedeemOptionType/CreateRedeemOptionType";
import EditRedeemOptionType from "./components/loyal/RedeemOptionType/EditRedeemOptionType";
import RedeemOptionTypeList from "./components/loyal/RedeemOptionType/RedeemOptionTypeList";

const resources = [
  <Resource name="bsc_customer" list={CustomerList} />,
  <Resource name="bsc_customer_type" list={CustomerTypeList} />,
  <Resource name="core_user" list={UserList} />,
  <Resource name="user_types" list={UsertypeList} />,
  <Resource
    name="loyal_point_history"
    list={LoyalPointHistoryList}
    create={CreateLoyalPointHistory}
    edit={EditLoyalPointHistory}
  />,
  <Resource
    name="loyal_redeem_option_type"
    list={RedeemOptionTypeList}
    create={CreateRedeemOptionType}
    edit={EditRedeemOptionType}
  />,
  <Resource
    name="loyal_redeem_option"
    list={RedeemOptionList}
    create={CreateRedeemOption}
    edit={EditRedeemOption}
  />,

  <Resource
    name="loyal_customer_grade_type"
    list={CustomerGradeTypeList}
    edit={EditCustomerGradeType}
    create={CreateCustomerGradeType}
  />,
  <Resource
    name="loyal_customer_grade"
    list={CustomerGradeList}
    edit={EditCustomerGrade}
    create={CreateCustomerGrade}
  />,
];

export default resources;
