import React from 'react';
import { styled, Paper } from '@mui/material';
import SvgBackground from "../../assets/Background/Grid.svg"

const FormBackground = () => {
	return (
		<SxPaper />
	);
};

const SxPaper = styled(Paper)({
	position: 'fixed',
	height: '100%',
	width: '100%',
	backgroundImage: `url(${SvgBackground})`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center center',
});

export default FormBackground;