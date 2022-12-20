import React from 'react';
import {
	ProjectNavbar,
	WorkspaceNavbar,
	StudioNavbar,
	DataNavbar,
	DataFilter,
	DataCard,
	Background,
} from './index';
import { Box, Grid } from '@mui/material';

const DataSources = () => {
	return (
		<Background>
			<ProjectNavbar />
			<WorkspaceNavbar />
			<Box sx={{ ml: 31, mr: 29 }}>
				<DataNavbar />
			</Box>
			<Grid container spacing={4} ml={3} direction='row'>
				<Grid item xs={1.4}>
					<DataFilter />
				</Grid>
				<Grid item xs={11} sm={5} md={3}>
					<DataCard />
				</Grid>
				<Grid item xs={11} sm={5} md={3}>
					<DataCard />
				</Grid>
				<Grid item xs={11} sm={5} md={3}>
					<DataCard />
				</Grid>
			</Grid>
			<StudioNavbar />
		</Background>
	);
};

export default DataSources;