import React from 'react';
import { LinearProgress } from '@mui/material'

const ProgressBar = () => {
	return (
		<LinearProgress
			variant="determinate"
			value={60}
			sx={{
				backgroundColor: '#0E2E4C',
				"& .MuiLinearProgress-barColorPrimary": {
					backgroundColor: "#1464A1"
				},
				height: '8px',
			}}
		/>
	);
};

export default ProgressBar;