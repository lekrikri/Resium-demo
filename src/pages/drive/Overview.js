import React from 'react';
import {
	Background,
	Heading,
	Subheadind,
	Text,
	ProjectNavbar,
	WorkspaceNavbar,
	StudioNavbar,
	CustomizedTables,
} from './index'
import { Grid } from '@mui/material';

// TODO remove only for demo
import { ReactComponent as Gauge } from '../../assets/DemoOnly_ToRemove/gauge.svg';
import { ReactComponent as ProgressBar } from '../../assets/DemoOnly_ToRemove/progressBar.svg';
// TODO remove only for demo

const Overview = () => {
	return (
		<Background>
			<ProjectNavbar />
			<WorkspaceNavbar />
			<Grid container spacing={4} ml={3} direction="row">
				<Grid item sm={12} md={6} lg={4}>
					<Heading>
						Project outline
					</Heading>
					<Subheadind>
						Pollution numérique et data science
					</Subheadind>
					<Text>
						Et tortor leo ultrices amet, a id rhoncus, ullamcorper iaculis. A ac eget vestibulum sed. Orci velit aenean pulvinar netus id. Enim laoreet aliquam mi pulvinar iaculis egestas a pulvinar. Nibh consequat aliquet sollicitudin aenean et faucibus hendrerit vivamus. Ac mi odio neque nulla. Sit diam eget pellentesque pellentesque libero nam auctor adipiscing. Accumsan a, habitant at aliquam dignissim nisi elit venenatis fermentum. Sagittis et, nulla vitae dolor neque euismod ultrices. Auctor sed at eget quisque. Facilisi nec in laoreet viverra integer eros fermentum. Euismod velit quam mollis rutrum ac blandit in mauris ut. Elementum viverra mauris lobortis phasellus pharetra, massa aenean amet. Ullamcorper faucibus diam diam et felis sagittis.
						Libero, donec vel nisi, tristique elementum consectetur erat. Venenatis scelerisque curabitur urna, ipsum, etiam at vel id. Vestibulum cras id arcu vulputate in nec ut. Quis lectus aliquam nunc ut pretium nunc. Scelerisque feugiat nisl tortor amet tristique dignissim.
					</Text>
					<Heading>
						Project outline
					</Heading>
					<Subheadind>
						Pollution numérique et data science
					</Subheadind>
					<Text>
						Et tortor leo ultrices amet, a id rhoncus, ullamcorper iaculis. A ac eget vestibulum sed. Orci velit aenean pulvinar netus id. Enim laoreet aliquam mi pulvinar iaculis egestas a pulvinar. Nibh consequat aliquet sollicitudin aenean et faucibus hendrerit vivamus. Ac mi odio neque nulla. Sit diam eget pellentesque pellentesque libero nam auctor adipiscing. Accumsan a, habitant at aliquam dignissim nisi elit venenatis fermentum. Sagittis et, nulla vitae dolor neque euismod ultrices. Auctor sed at eget quisque. Facilisi nec in laoreet viverra integer eros fermentum. Euismod velit quam mollis rutrum ac blandit in mauris ut. Elementum viverra mauris lobortis phasellus pharetra, massa aenean amet. Ullamcorper faucibus diam diam et felis sagittis.
						Libero, donec vel nisi, tristique elementum consectetur erat. Venenatis scelerisque curabitur urna, ipsum, etiam at vel id. Vestibulum cras id arcu vulputate in nec ut. Quis lectus aliquam nunc ut pretium nunc. Scelerisque feugiat nisl tortor amet tristique dignissim.
					</Text>
				</Grid>
				<Grid item sm={12} md={6} lg={4}>
					<Heading>
						Member
					</Heading>
					<Subheadind>
						Lorem ipsum
					</Subheadind>
					<CustomizedTables />
				</Grid>
				<Grid item sm={12} md={6} lg={4}>
					<Heading>
						Dashboard
					</Heading>
					<Subheadind>
						Lorem ipsum
					</Subheadind>
					<Gauge />
					<Subheadind>
						Lorem ipsum
					</Subheadind>
					<ProgressBar />
					<ProgressBar />
				</Grid>
			</Grid>
			<StudioNavbar />
		</Background>
	);
};

export default Overview;
