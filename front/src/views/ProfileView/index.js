import React, { useState } from 'react';
import { Box, Container, Divider, Tab, Tabs, makeStyles } from '@material-ui/core';
import Page from '../../components/Page';
import Header from './Header';
import General from './General';
import PasswordChange from './PasswordChange';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		minHeight: '100%',
		paddingTop: theme.spacing(3)
	}
}));

function AccountView() {
	const classes = useStyles();
	const [ currentTab, setCurrentTab ] = useState('apie');
	const tabs = [ { value: 'apie', label: 'Apie' }, { value: 'password', label: 'Slaptažodžio keitimas' } ];

	const handleTabsChange = (event, value) => {
		setCurrentTab(value);
	};

	return (
		<Page className={classes.root} title="Profile Edit">
			<Container maxWidth="lg">
				<Header />
				<Box mt={3}>
					<Tabs
						onChange={handleTabsChange}
						scrollButtons="auto"
						value={currentTab}
						variant="scrollable"
						textColor="secondary"
						className={classes.tabs}
					>
						{tabs.map((tab) => <Tab key={tab.value} label={tab.label} value={tab.value} />)}
					</Tabs>
				</Box>
				<Divider />
				<Box mt={3}>
					{(currentTab === 'apie' && <General />) || (currentTab === 'password' && <PasswordChange />)}
				</Box>
			</Container>
		</Page>
	);
}

export default AccountView;
