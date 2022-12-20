import {
	AppBar,
	Button,
	Stack,
	Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
// TODO OnFocus with location pathname => window.location.pathname
export function StudioNavbar() {
	return (
		<Box style={{ position: 'absolute', bottom: '0', width: '100%' }}>
			<AppBar position='sticky' color='transparent' elevation={0}>
				<Stack spacing={1.5} direction='row' alignItems="center"
					justifyContent="center" mb={5}>
					<Button
						component={Link}
						to="/Overview"
						sx={{ backgroundColor: '#13181E' }}
						variant='contained'>
						Overview
					</Button>
					<Button
						component={Link}
						to="/DataSources"
						sx={{ backgroundColor: '#13181E' }}
						variant='contained'>
						Data sources & Catalogs
					</Button>
					<Button
						component={Link}
						to="/DataStore"
						sx={{ backgroundColor: '#13181E' }}
						variant='contained'>
						Data Store
					</Button>
					<Button sx={{ backgroundColor: '#13181E' }} variant='contained'>
						Tools & API Catalogs
					</Button>
					<Button sx={{ backgroundColor: '#13181E' }} variant='contained'>
						Group Productions & Dissemination
					</Button>
					<Button sx={{ backgroundColor: '#13181E' }} variant='contained'>
						Billing - Tracing - Stat
					</Button>
				</Stack>
			</AppBar>
		</Box>
	);
};
