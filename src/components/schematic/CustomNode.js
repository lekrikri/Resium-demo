import { Handle, Position } from 'reactflow';
import OriginBg from '../../assets/schema/Origin.svg';
import DiamondBg from '../../assets/schema/Diamond.svg';

function OriginNode() {
	return (
		<div
			style={{
				backgroundImage: `url(${OriginBg})`,
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat',
				padding: "16px",

			}}>
			<Handle type='source' position='right' />
		</div>
	);
};

function RectangleNode() {
	return (
		<div
			style={{
				height: '50px',
				width: '100px',
				backgroundColor: "transparent",
				border: "solid #175682 1px",
				borderWidth: '1px',
				borderRadius: "2px",
				'&:focus': {
					borderColor: "#E17A3F",
				},
			}}>
			<Handle type='target' position={Position.Left} style={{ left: "-4%" }} />
			<Handle type='source' position={Position.Right} style={{ right: "-4%" }} />
		</div >
	);
};

function CircleNode() {
	return (
		<div
			style={{
				backgroundColor: "transparent",
				padding: "18px",
				border: "solid #175682 1px",
				borderRadius: "50px",
				'&:focus': {
					borderColor: "#E17A3F",
				},
			}}>
			<Handle type='target' position='left' />
			<Handle type='source' position='right' />
		</div>
	);
};

function DiamondNode() {
	return (
		<div
			style={{
				backgroundImage: `url(${DiamondBg})`,
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat',
				padding: "24px",

			}}>
			<Handle type='target' position={Position.Left} />
			<Handle type='source' position={Position.Right} style={{ right: "5%" }} />
		</div>
	);
};

export const nodeTypes = {
	origin: OriginNode,
	circle: CircleNode,
	rectangle: RectangleNode,
	diamond: DiamondNode,
};
