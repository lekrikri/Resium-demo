import {
	AppBar,
	Toolbar,
	Button,
} from '@mui/material';
import { ReactComponent as DriveSvg } from '../../assets/icon/Drive.svg';
import { ReactComponent as StudioSvg } from '../../assets/icon/Studio.svg';
import { ReactComponent as PanelViewSvg } from '../../assets/icon/PanelView.svg';
import { ReactComponent as NavbarSvg } from '../../assets/Container/Navbar.svg';
import { Link } from 'react-router-dom';

export function WorkspaceNavbar() {
	return (
		<AppBar
			position="static"
			color={"transparent"}
			elevation={0}
			style={{ alignItems: 'center' }}
		>
			<Toolbar>
				<Button
					component={Link}
					to="/Overview">
					<DriveSvg />
				</Button>
				<Button
					component={Link}
					to="/Studio">
					<StudioSvg />
				</Button>
				<Button
					component={Link}
					to="/PanelView">
					<PanelViewSvg />
				</Button>
			</Toolbar>
			<NavbarSvg />
		</AppBar>
	);
};
