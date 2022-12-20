import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/Utils/Search.svg';

import { TextField, Box, IconButton } from '@mui/material';

export function SearchField(props) {
	return (
		<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
			<IconButton>
				<SearchIcon />
			</IconButton>
			<TextField
				placeholder={props.placeholder}
				type="search"
				variant="standard"
				sx={{
					width: '20vw',
					input: {
						color: '#FFFFFF',
						"&::placeholder": {
							opacity: 1,
						},
					},
				}}
			/>
		</Box>
	);
};
