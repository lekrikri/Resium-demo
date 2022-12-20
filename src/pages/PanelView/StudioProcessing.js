import React from 'react';
import {
	Background,
	ProjectNavbar,
	WorkspaceNavbar,
} from '../drive/index';
import NodeBehaviour from '../../components/schematic/AddNodeOnDrop'
import WidgetContainer from '../../components/container/Widget';
import { styled, Grid } from '@mui/material';

const DiagramArea = styled('div')({
	marginTop: '2%',
	marginLeft: '2%',
	marginRight: '2%',
	float: 'right',
	width: '57vw',
	height: '73vh',
	alignItems: 'center',
});

const StudioProcessing = () => {
	return (
		<Background>
			<ProjectNavbar />
			<WorkspaceNavbar />

			<Grid container direction='row'>
				
				<Grid item md={2.5}>
					<WidgetContainer />
				</Grid>
				<Grid item md={7}>
					<DiagramArea>
						<NodeBehaviour />
					</DiagramArea>
				</Grid>
				<Grid item md={2.5}>
					<WidgetContainer />
				</Grid>
				
			</Grid>

		</Background>
	);
};

export default StudioProcessing;