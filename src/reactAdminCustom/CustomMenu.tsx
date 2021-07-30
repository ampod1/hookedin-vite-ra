import { Box, Collapse, ListItem, ListItemText } from "@material-ui/core";
import {
  AssignmentIndTwoTone,
  ExpandLess,
  ExpandMore,
  LockTwoTone,
} from "@material-ui/icons";
import React, { useState } from "react";
import { MenuItemLink, MenuProps, ReduxState, useTranslate } from "react-admin";
import { GiTwoCoins } from "react-icons/gi";
import { RiDashboard2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import LocaleSwitcher from "./../components/UI/LocalSwitch";

export default function CustomMenu(props: MenuProps) {
  const [openContractsSub, setOpenContractsSub] = useState(false);
  const [openUsersSub, setOpenUsersSub] = useState(false);
  const [openLoyalSub, setOpenLoyalSub] = useState(false);
  const [openUnitsSub, setOpenUnitsSub] = useState(false);
  const [openCustomersSub, setOpenCustomersSub] = useState(false);
  const [openRequestsSub, setOpenRequestsSub] = useState(false);
  const isSidebarOpen = useSelector(
    (state: ReduxState) => state.admin.ui.sidebarOpen
  );
  const translate = useTranslate();
  console.log("trans", translate);
  return (
    <div style={{ width: "100%" }}>
      <Box m={2} py={2}>
        <LocaleSwitcher />
        <MenuItemLink
          to="/"
          exact
          leftIcon={<RiDashboard2Line style={{ fontSize: "1.5em" }} />}
          {...props}
          primaryText={translate("custom_root.menu.home")}
        />
        <ListItem
          button
          onClick={() => {
            setOpenUsersSub(!openUsersSub);
          }}
        >
          <ListItemText
            primary={isSidebarOpen ? translate("custom_root.menu.users") : ""}
          />
          {openUsersSub ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openUsersSub} timeout="auto" unmountOnExit>
          <MenuItemLink
            to="/core_user"
            exact
            leftIcon={<AssignmentIndTwoTone style={{ fontSize: "1.5em" }} />}
            {...props}
            primaryText={translate("custom_root.menu.users")}
          />
          <MenuItemLink
            to="/core_usertype"
            exact
            leftIcon={<LockTwoTone style={{ fontSize: "1.5em" }} />}
            {...props}
            primaryText={translate("custom_root.menu.user_types")}
          />
        </Collapse>

        <ListItem
          button
          onClick={() => {
            setOpenLoyalSub(!openLoyalSub);
          }}
        >
          <ListItemText primary={isSidebarOpen ? "Loyal Program" : ""} />
          {openLoyalSub ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openLoyalSub} timeout="auto" unmountOnExit>
          <MenuItemLink
            to="/loyal_point_history"
            exact
            leftIcon={<GiTwoCoins style={{ fontSize: "1.5em" }} />}
            {...props}
            primaryText="Point History"
          />
          <MenuItemLink
            to="/loyal_redeem_option_type"
            exact
            leftIcon={<AssignmentIndTwoTone style={{ fontSize: "1.5em" }} />}
            {...props}
            primaryText="Redeem Option Types"
          />
          <MenuItemLink
            to="/loyal_redeem_option"
            exact
            leftIcon={<AssignmentIndTwoTone style={{ fontSize: "1.5em" }} />}
            {...props}
            primaryText="Redeem Options"
          />
          <MenuItemLink
            to="/loyal_customer_grade_type"
            exact
            leftIcon={<AssignmentIndTwoTone style={{ fontSize: "1.5em" }} />}
            {...props}
            primaryText="Customer Grade Type"
          />
          <MenuItemLink
            to="/loyal_customer_grade"
            exact
            leftIcon={<AssignmentIndTwoTone style={{ fontSize: "1.5em" }} />}
            {...props}
            primaryText="Customer Grade"
          />
        </Collapse>
      </Box>
    </div>
  );
}
