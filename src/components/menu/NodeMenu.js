import {
	styled,
	ListItemIcon,
	Menu,
	MenuItem
} from '@mui/material';
import { ReactComponent as Rectangle } from '../../assets/schema/Rectangle.svg';
import { ReactComponent as Circle } from '../../assets/schema/Circle.svg';
import { ReactComponent as Diamond } from '../../assets/schema/Diamond.svg';

const SxMenu = styled(Menu)({
	'& ul.MuiList-root': { border: 'solid #175682 1px' },
});
const SxMenuItem = styled(MenuItem)({
	justifyContent: 'center',
});

function NodeMenu({
	contextMenu,
	handleCloseMenu,
	connectRectangle,
	connectDiamond,
	connectCircle
}) {
	return (
		<>
			<SxMenu
				open={contextMenu}
				onClose={handleCloseMenu}
				anchorReference="anchorPosition"
				anchorPosition={
					contextMenu !== null
						? { top: contextMenu.mouseY, left: contextMenu.mouseX }
						: undefined
				}
			>
				<SxMenuItem value='rectangle' onClick={connectRectangle}>
					<ListItemIcon>
						<Rectangle fontSize="small" />
					</ListItemIcon>
				</SxMenuItem>
				<SxMenuItem value='circle' onClick={connectCircle}>
					<ListItemIcon>
						<Circle fontSize="small" />
					</ListItemIcon>
				</SxMenuItem>
				<SxMenuItem value='diamond' onClick={connectDiamond}>
					<ListItemIcon>
						<Diamond fontSize="small" />
					</ListItemIcon>
				</SxMenuItem>
			</SxMenu>
		</>
	);
};

export default NodeMenu;
