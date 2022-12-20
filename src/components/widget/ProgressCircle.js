import React from 'react';
import { CircularProgress } from '@mui/material'

const ProgressCircle = (props) => {
	return (
		<CircularProgress
			variant="determinate"
			value={props.value}
			size={90}
			sx={{
				borderRadius: "100%",
			}}
		/>
	);
};

export default ProgressCircle;
