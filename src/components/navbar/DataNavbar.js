import React, { useState } from 'react';
import { ReactComponent as BoxIcon } from '../../assets/icon/CartonBox.svg';
import { ReactComponent as AddDataIcon } from '../../assets/Utils/AddData.svg';
import { SearchField } from '../input/SearchField';
import {
	AppBar, Toolbar,
	Tabs, Tab, IconButton,
} from '@mui/material';

export function DataNavbar() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<AppBar
				position='static'
				color={'transparent'}
				elevation={0}
			>
				<Toolbar>
					<Tabs
						variant='scrollable'
						onChange={handleChange}
						value={value}
						textColor='inherit'
						TabIndicatorProps={{
							sx: { backgroundColor: '#1464A1' }
						}}
						sx={{
							'& button.MuiTab-root': { textTransform: 'none' },
							'& button:active': { backgroundColor: '#5FF1F1' },
							'& button:hover': { backgroundColor: '#1464A1' },
							'& button.Mui-selected': { backgroundColor: '#1464A1' },
						}}
					>
						<Tab label='Data Sources' />
						<Tab label='Catalogs' />
					</Tabs>
					<IconButton>
						<BoxIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<AppBar
				position='static'
				color={'transparent'}
				elevation={0}
			>
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					<SearchField placeholder='Search a domain' />
					<IconButton>
						<AddDataIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</>
	);
};
