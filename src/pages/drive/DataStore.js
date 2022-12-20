import React from 'react';
import {
	Background,
	ProjectNavbar,
	WorkspaceNavbar,
	StudioNavbar,
	UserTable,
	ProgressBar,
	MemberFilter,
} from './index';

import {
	Box,
	FormControl,
	RadioGroup,
	FormLabel,
	FormControlLabel,
} from '@mui/material';

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import FgSpecs from '../../assets/Foreground/ForegroundSpecs.svg';
import Radio from '../../components/button/Radio';
import DefaultBtn from '../../components/button/Default';

const DataStore = () => {
	return (
		<Background>
			<ProjectNavbar />
			<WorkspaceNavbar />
			<Box
				ml={12}
				mr={12}
				mb={3}
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(4)',
					gridTemplateAreas: `'a b . d'`,
				}}
			>
				<Box sx={{ gridArea: 'a' }} >
					<div style={{ width: 100, height: 100 }}>
						<CircularProgressbarWithChildren styles={buildStyles({ trailColor: '#0E2E4C', pathColor: "#1464A1" })} value={66}>
							<div style={{ fontSize: 12, marginTop: -5 }}>
								<strong style={{ fontSize: '17px' }}>66%</strong>
								<p style={{ margin: '0' }}>Used</p>
							</div>
						</CircularProgressbarWithChildren>
					</div>
				</Box>
				<Box mt={2} sx={{ gridArea: 'b', textAlign: 'left', display: 'block', width: '280px' }}>
					<Box component='div'>
						STORAGE USED
						42 To
						<ProgressBar />
					</Box>
					<Box mt={3} component='div'>
						TOTAL STORAGE
						420 To
						<ProgressBar />
					</Box>
				</Box>
				<Box mt={2} sx={{ gridArea: 'd' }}>
					<Box sx={{
						display: "flex",
						justifyContent: 'center',
						alignItems: 'center',
						backgroundImage: `url(${FgSpecs})`,
						width: '722px',
						height: '150px',
						backgroundSize: '100%',
						backgroundRepeat: 'no-repeat'
					}}>
						<FormControl>
							<FormLabel>My Virtual Disk</FormLabel>
							<RadioGroup row>
								<FormControlLabel value='Storage' control={<Radio />} label='Storage' />
								<FormControlLabel value='CPU' control={<Radio />} label='CPU' />
								<FormControlLabel value='RAM' control={<Radio />} label='RAM' />
							</RadioGroup>
						</FormControl>
						<DefaultBtn>UPGRADE</DefaultBtn>
					</Box>
				</Box>
			</Box>
			<UserTable />
			<MemberFilter />
			<StudioNavbar />
		</Background>
	);
};

export default DataStore;
