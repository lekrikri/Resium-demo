import React from 'react';
import { Button } from '@mui/material'
import IconBtn from "../../assets/button/Default.svg"


const DefaultBtn = (props) => {
	return (
		<Button sx={{
			backgroundImage: `url(${IconBtn})`,
			backgroundRepeat: 'no-repeat',
			width: '214px',
			height: '47px',
			color: '#FFFFFF',
			fontWeight: '600',
		}}
		{...props}
		/>
	);
};

export default DefaultBtn;