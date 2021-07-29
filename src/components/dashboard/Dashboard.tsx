import { makeStyles } from '@material-ui/core';

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import React from 'react';
import styles from '../assets/jss/material-dashboard-react/views/dashboardStyle.jsx';
import Card from '../mtrlDashboard/Card/Card.jsx';
import CardFooter from '../mtrlDashboard/Card/CardFooter.jsx';
import CardHeader from '../mtrlDashboard/Card/CardHeader.jsx';
import CardIcon from '../mtrlDashboard/Card/CardIcon.jsx';
import GridContainer from '../mtrlDashboard/Grid/GridContainer.jsx';
import GridItem from '../mtrlDashboard/Grid/GridItem.jsx';
import Danger from '../mtrlDashboard/Typography/Danger.jsx';
import Warning from '../mtrlDashboard/Typography/Warning.jsx';

// const styles = require('../assets/jss/material-dashboard-react/views/dashboardStyle.jsx');
// const Card = require('../mtrlDashboard/Card/Card.jsx');
// const CardFooter = require('../mtrlDashboard/Card/CardFooter');
// const CardHeader = require('../mtrlDashboard/Card/CardHeader');
// const CardIcon = require('../mtrlDashboard/Card/CardIcon');
// const GridContainer = require('../mtrlDashboard/Grid/GridContainer');
// const GridItem = require('../mtrlDashboard/Grid/GridItem');
// const Danger = require('../mtrlDashboard/Typography/Danger');
// const Warning = require('../mtrlDashboard/Typography/Warning');
const useStyles = makeStyles(styles as any);

export default function Dashboard() {
	const classes = useStyles();
	return (
		<>
			<div className={classes.root}>
				<GridContainer>
					<GridItem {...{ xs: 12, sm: 6 }}>
						<Card>
							<CardHeader stats icon>
								<CardIcon color="success">
									<AccessAlarmIcon />
								</CardIcon>
								<p className={classes.allText}>New Requests </p>
								<h3 className={classes.allText}>
									29/50 <small>Request</small>
								</h3>
							</CardHeader>
							<CardFooter stats>
								<div className={classes.stats}>
									<Danger>
										<Warning />
									</Danger>
									<a href="#pablo" onClick={(e) => e.preventDefault()}>
										Get more info
									</a>
								</div>
							</CardFooter>
						</Card>
					</GridItem>
					<GridItem {...{ xs: 12, sm: 6 }}>
						<Card>
							<CardHeader stats icon>
								<CardIcon color="info">
									<VisibilityTwoToneIcon />
								</CardIcon>
								<p className={classes.allText}> Finished Tasks </p>
								<h3 className={classes.allText}>
									2150 <small>View</small>
								</h3>
							</CardHeader>
							<CardFooter stats>
								<div className={classes.stats}>
									<Danger>
										<Warning />
									</Danger>
									<a href="#pablo" onClick={(e) => e.preventDefault()}>
										Get more info
									</a>
								</div>
							</CardFooter>
						</Card>
					</GridItem>
					<GridItem {...{ xs: 12, sm: 6 }}>
						<Card>
							<CardHeader stats icon>
								<CardIcon color="danger">
									<TrendingUpTwoToneIcon />
								</CardIcon>
								<p className={classes.allText}> Average Conversion Rate </p>
								<h3 className={classes.allText}>
									8.30 <small>%</small>
								</h3>
							</CardHeader>
							<CardFooter stats>
								<div className={classes.stats}>
									<Danger>
										<Warning />
									</Danger>
									<a href="#pablo" onClick={(e) => e.preventDefault()}>
										Get more info
									</a>
								</div>
							</CardFooter>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		</>
	);
}
