import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
	Card,
	CardContent,
	Collapse,
	IconButton,
	Typography,
	Box,
} from '@mui/material'

								// TODO____Icon to set____ \\
// import { ReactComponent as Alien } from '../../assets/icon/Alien.svg'
// import { ReactComponent as Audio } from '../../assets/icon/Audio.svg'
// import { ReactComponent as Barrel } from '../../assets/icon/Barrel.svg'
// import { ReactComponent as Histogram } from '../../assets/icon/Histogram.svg'
// import { ReactComponent as Landscape } from '../../assets/icon/Landscape.svg'
// import { ReactComponent as Photo } from '../../assets/icon/Photo.svg'
// import { ReactComponent as Play } from '../../assets/icon/Play.svg'
// import { ReactComponent as Sheet } from '../../assets/icon/Sheet.svg'
import { ReactComponent as Cube } from '../../assets/icon/Cube.svg';
import { ReactComponent as MoreIcon } from '../../assets/icon/More.svg';

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest
	})
}));

export function DataCard() {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card sx={{
			maxWidth: 390,
			backgroundColor: '#13181E',
			border: 'solid 2px #252C3C'
		}}>
			<CardContent>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Cube />
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'
					>
						<MoreIcon />
					</ExpandMore>
				</Box>
				<Typography variant='h7' color='#3F4B5B'>
					3D assets
				</Typography>
				<Typography variant='h6' color='#5FF1F1'>
					3D graphic 1990
				</Typography>
				<Typography variant='body2' color='#3F4B5B'>
					Aliquam magna consectetur lacinia purus pulvinar dictum ac pretium.
					Nulla urna mattis volutpat venenatis blandit semper et cursus.
				</Typography>
				<Box>
					<Typography variant='body2' color='#3F4B5B' align='right'>
						Files: 1500
					</Typography>
				</Box>
			</CardContent>
			<Collapse in={expanded} timeout='auto' unmountOnExit>
				<CardContent>
					<Typography paragraph>Property 1: 1111</Typography>
					<Typography paragraph>Property 2: 2222</Typography>
					<Typography paragraph>Property 3: 3333</Typography>
					<Typography paragraph>Property 4: 4444</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}
