import { Box, Collapse, ListItem, ListItemText } from '@material-ui/core';
import {
	AssignmentIndTwoTone,
	DnsTwoTone,
	ExpandLess,
	ExpandMore,
	LockTwoTone,
} from '@material-ui/icons';
import React, { useState } from 'react';
import { MenuItemLink, MenuProps, ReduxState, useTranslate } from 'react-admin';
import { BiBuildingHouse } from 'react-icons/bi';
import { BsFillQuestionSquareFill, BsPersonLinesFill } from 'react-icons/bs';
import { GiMailbox } from 'react-icons/gi';
import { IoAlbums, IoHammerSharp, IoNewspaperSharp } from 'react-icons/io5';
import {
	RiBuilding2Fill,
	RiClipboardFill,
	RiCommunityFill,
	RiCustomerService2Line,
	RiDashboard2Line,
	RiDoorLine,
} from 'react-icons/ri';
import { useSelector } from 'react-redux';
import LocaleSwitcher from './../components/UI/LocalSwitch';

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
	console.log('trans', translate);
	return (
		<div style={{ width: '100%' }}>
			<Box m={2} py={2}>
				<LocaleSwitcher />
				<MenuItemLink
					to="/"
					exact
					leftIcon={<RiDashboard2Line style={{ fontSize: '1.5em' }} />}
					{...props}
					primaryText={translate('custom_root.menu.home')}
				/>
				<ListItem
					button
					onClick={() => {
						setOpenUsersSub(!openUsersSub);
					}}
				>
					<ListItemText
						primary={isSidebarOpen ? translate('custom_root.menu.users') : ''}
					/>
					{openUsersSub ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={openUsersSub} timeout="auto" unmountOnExit>
					<MenuItemLink
						to="/core_user"
						exact
						leftIcon={<AssignmentIndTwoTone style={{ fontSize: '1.5em' }} />}
						{...props}
						primaryText={translate('custom_root.menu.users')}
					/>
					<MenuItemLink
						to="/core_usertype"
						exact
						leftIcon={<LockTwoTone style={{ fontSize: '1.5em' }} />}
						{...props}
						primaryText={translate('custom_root.menu.user_types')}
					/>
				</Collapse>

				<ListItem
					button
					onClick={() => {
						setOpenLoyalSub(!openLoyalSub);
					}}
				>
					<ListItemText primary={isSidebarOpen ? 'Loyal Program' : ''} />
					{openLoyalSub ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={openLoyalSub} timeout="auto" unmountOnExit>
					<MenuItemLink
						to="/loyal_point_history"
						exact
						leftIcon={<AssignmentIndTwoTone style={{ fontSize: '1.5em' }} />}
						{...props}
						primaryText="Point History"
					/>
					<MenuItemLink
						to="/loyal_redeem_option_type"
						exact
						leftIcon={<AssignmentIndTwoTone style={{ fontSize: '1.5em' }} />}
						{...props}
						primaryText="Redeem Option Types"
					/>
					<MenuItemLink
						to="/loyal_redeem_option"
						exact
						leftIcon={<AssignmentIndTwoTone style={{ fontSize: '1.5em' }} />}
						{...props}
						primaryText="Redeem Options"
					/>
					<MenuItemLink
						to="/loyal_customer_grade_type"
						exact
						leftIcon={<AssignmentIndTwoTone style={{ fontSize: '1.5em' }} />}
						{...props}
						primaryText="Customer Grade Type"
					/>
					<MenuItemLink
						to="/loyal_customer_grade"
						exact
						leftIcon={<AssignmentIndTwoTone style={{ fontSize: '1.5em' }} />}
						{...props}
						primaryText="Customer Grade"
					/>
				</Collapse>
				{/* <ListItem
					button
					onClick={() => {
						setOpenCustomersSub(!openCustomersSub);
					}}
				>
					<ListItemText
						primary={
							isSidebarOpen ? translate('custom_root.menu.customers') : ''
						}
					/>
					{openCustomersSub ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={openCustomersSub} timeout="auto" unmountOnExit>
					<MenuItemLink
						to="/bsc_customer"
						exact
						leftIcon={<RiCustomerService2Line style={{ fontSize: '1.5em' }} />}
						{...props}
						primaryText={translate('custom_root.menu.customers')}
					/>
					<MenuItemLink
						to="/bsc_customer_type"
						exact
						leftIcon={<BsPersonLinesFill style={{ fontSize: '1.5em' }} />}
						{...props}
						primaryText={translate('custom_root.menu.customer_types')}
					/>
				</Collapse>
				<ListItem
					button
					onClick={() => {
						setOpenUnitsSub(!openUnitsSub);
					}}
				>
					<ListItemText
						primary={isSidebarOpen ? translate('custom_root.menu.units') : ''}
					/>
					{openUnitsSub ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={openUnitsSub} timeout="auto" unmountOnExit>
					<MenuItemLink
						to="/mnt_site"
						exact
						leftIcon={<BiBuildingHouse style={{ fontSize: '1.5em' }} />}
						{...props}
						primaryText={translate('custom_root.menu.sites')}
					/>
					<MenuItemLink
						to="/mnt_project"
						exact
						leftIcon={<RiBuilding2Fill style={{ fontSize: '1.5em' }} />}
						{...props}
						primaryText={translate('custom_root.menu.projects')}
					/>
					<MenuItemLink
						to="/mnt_unit"
						exact
						leftIcon={<RiCommunityFill style={{ fontSize: '1.5em' }} />}
						{...props}
						primaryText={translate('custom_root.menu.units')}
					/>
					<MenuItemLink
						to="/mnt_address"
						exact
						leftIcon={<GiMailbox style={{ fontSize: '1.5em' }} />}
						{...props}
						primaryText={translate('custom_root.menu.addresses')}
					/>
					<MenuItemLink
						to="/mnt_customer_unit"
						exact
						leftIcon={<RiDoorLine style={{ fontSize: '1.5em' }} />}
						{...props}
						primaryText={translate('custom_root.menu.customer_units')}
					/>
				</Collapse>
				<ListItem
					button
					onClick={() => {
						setOpenRequestsSub(!openRequestsSub);
					}}
				>
					<ListItemText
						primary={
							isSidebarOpen ? translate('custom_root.menu.requests') : ''
						}
					/>
					{openRequestsSub ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={openRequestsSub} timeout="auto" unmountOnExit>
					<MenuItemLink
						to="/mnt_request"
						exact
						leftIcon={<RiClipboardFill style={{ fontSize: '1.5em' }} />}
						{...props}
						primaryText={translate('custom_root.menu.customer_requests')}
					/>
					<MenuItemLink
						to="/mnt_request_assign"
						exact
						leftIcon={<IoHammerSharp style={{ fontSize: '1.5em' }} />}
						{...props}
						primaryText={translate('custom_root.menu.tech_tasks')}
					/>
					<MenuItemLink
						to="/mnt_request_status_type"
						exact
						leftIcon={
							<BsFillQuestionSquareFill style={{ fontSize: '1.5em' }} />
						}
						{...props}
						primaryText={translate('custom_root.menu.req_stat_type')}
					/>
					<MenuItemLink
						to="/mnt_request_status"
						exact
						leftIcon={<IoAlbums style={{ fontSize: '1.5em' }} />}
						{...props}
						primaryText={translate('custom_root.menu.req_stat')}
					/>
				</Collapse>
				<ListItem
					button
					onClick={() => {
						setOpenContractsSub(!openContractsSub);
					}}
				>
					<ListItemText
						primary={
							isSidebarOpen ? translate('custom_root.menu.unit_contracts') : ''
						}
					/>
					{openContractsSub ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={openContractsSub} timeout="auto" unmountOnExit>
					<MenuItemLink
						to="/mnt_contract"
						exact
						leftIcon={<IoNewspaperSharp style={{ fontSize: '1.5em' }} />}
						{...props}
						primaryText={translate('custom_root.menu.unit_contracts')}
					/>
					<MenuItemLink
						to="/mnt_item"
						exact
						leftIcon={<DnsTwoTone style={{ fontSize: '1.5em' }} />}
						{...props}
						primaryText={translate('custom_root.menu.mnt_items')}
					/>
				</Collapse> */}
			</Box>
		</div>
	);
}
