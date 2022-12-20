import React from 'react';
import { styled, Box } from '@mui/material';
import SvgBackground from '../../assets/Container/Form.svg'

const FormContainer = styled(Box)({
	display: 'block',
	flexDirection: 'column',
	alignItems: 'left',
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: `translate(-50%, -50%)`,
	backgroundImage: `url(${SvgBackground})`,
	backgroundSize: '100% 100%',
	backgroundRepeat: 'no-repeat',
	padding: '110px',
	'@media (max-width: 450px)': {
		backgroundImage: 'none'
	}
});

export default FormContainer;
