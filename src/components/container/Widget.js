import React from 'react';
import { styled, Box } from '@mui/material';
import UserTable from '../table/User';


// TODO get member from group "type"
// JsonMembers.forEach((el)=>{
// 	console.log(el.company)
// });

const WidgetContainer = () => {

	return (
		<SxBox>

			<UserTable />

		</SxBox>
	);
};

const SxBox = styled(Box)({
	marginLeft: 'auto',
	marginRight: 'auto',
	width: '90%',
	backgroundColor: '#13181E',
	border: 'solid #175682 1px',
});

export default WidgetContainer;