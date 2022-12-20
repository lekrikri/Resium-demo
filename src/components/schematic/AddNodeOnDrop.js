import React, { useState, useCallback, useRef } from 'react';
import ReactFlow, {
	useNodesState,
	useEdgesState,
	updateEdge,
	addEdge,
	useReactFlow,
	ReactFlowProvider,
	Background,
} from 'reactflow';
// TODO gather to an index
import './reactflow.css';
import 'reactflow/dist/style.css';
import NodeMenu from '../menu/NodeMenu';
import NodeModal from '../modal/NodeModal';
import { nodeTypes } from './CustomNode';
import ConnectionLine from './ConnectionLine';
import { Button } from '@mui/material';
// TODO END

const initialNodes = [
	{
		id: '0',
		type: 'origin',
		position: { x: 0, y: 50 },
	},
];

const flowKey = 'example-flow';
let id = localStorage.getItem(flowKey)
	? (JSON.parse(localStorage.getItem(flowKey))).nodes.length : 1;

const getNodeId = () => `${id++}`;

const fitViewOptions = {
	padding: 3,
};

const NodeBehaviour = () => {
	const reactFlowWrapper = useRef(null);
	const connectingNodeId = useRef(null);
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);
	const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
	// MENU event handler
	const [contextMenu, setContextMenu] = useState(false);
	// MODAL event handler
	const [openModal, setNodeModal] = useState(false);
	const handleOpenModal = () => setNodeModal(true);
	const handleCloseModal = () => setNodeModal(false);
	const { project } = useReactFlow();
	// TODO autosave session
	const [rfInstance, setRfInstance] = useState(null);

	const onSave = useCallback(() => {
		if (rfInstance) {
			const flow = rfInstance.toObject();
			localStorage.setItem(flowKey, JSON.stringify(flow));
		}
	}, [rfInstance]);

	const onRestore = useCallback(() => {
		const restoreFlow = async () => {
			const flow = JSON.parse(localStorage.getItem(flowKey));
			if (flow) {
				const { x = 0, y = 0, zoom = 1 } = flow.viewport;
				setNodes(flow.nodes || []);
				setEdges(flow.edges || []);
				project({ x, y, zoom });
			}
		};
		restoreFlow();
	}, [setNodes, project]);

	const onDelete = useCallback(() => {
		if (localStorage.getItem(flowKey)) {
			localStorage.removeItem(flowKey)
		}
	}, [rfInstance]);

	const onConnectStart = useCallback((_, { nodeId }) => {
		connectingNodeId.current = nodeId;
	}, []);

	const onConnectEnd = useCallback(
		(event) => {
			const targetIsPane = event.target.classList.contains('react-flow__pane');
			if (!targetIsPane) {
				// we need to remove the wrapper bounds, in order to get the correct position
				const id = getNodeId();
				setEdges((eds) => eds.concat({ id, source: connectingNodeId.current, target: id }));
			}
			else if (targetIsPane) {
				setContextMenu(
					contextMenu === false
						? {
							mouseX: event.clientX + 2,
							mouseY: event.clientY - 6,
						}
						: // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
						// Other native context menus might behave different.
						// With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
						true,
				);
			}
		},
		[project]
	);

	const connectRectangle = useCallback(
		(event) => {
			// we need to remove the wrapper bounds, in order to get the correct position
			const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
			const id = getNodeId();
			const newNode = {
				id,
				type: 'rectangle',
				// we are removing the half of the node width (75) to center the new node
				position: project({ x: event.clientX - left - 75, y: event.clientY - top }),
			};
			setNodes((nds) => nds.concat(newNode));
			setEdges((eds) => eds.concat({ id, source: connectingNodeId.current, target: id }));
			setContextMenu(false);
		},
		[project]
	);

	const connectCircle = useCallback(
		(event) => {
			// we need to remove the wrapper bonodeTypes={nodeTypes}unds, in order to get the correct position
			const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
			const id = getNodeId();
			const newNode = {
				id,
				type: 'circle',
				// we are removing the half of the node width (75) to center the new node
				position: project({ x: event.clientX - left - 75, y: event.clientY - top }),
			};
			setNodes((nds) => nds.concat(newNode));
			setEdges((eds) => eds.concat({ id, source: connectingNodeId.current, target: id }));
			setContextMenu(false);
		},
		[project]
	);

	const connectDiamond = useCallback(
		(event) => {
			// we need to remove the wrapper bonodeTypes={nodeTypes}unds, in order to get the correct position
			const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
			const id = getNodeId();
			const newNode = {
				id,
				type: 'diamond',
				// we are removing the half of the node width (75) to center the new node
				position: project({ x: event.clientX - left - 75, y: event.clientY - top }),
			};
			setNodes((nds) => nds.concat(newNode));
			setEdges((eds) => eds.concat({ id, source: connectingNodeId.current, target: id }));
			setContextMenu(false);
		},
		[project]
	);

	const handleCloseMenu = () => {
		setContextMenu(false);
	};

	const edgeUpdateSuccessful = useRef(true);
	const onEdgeUpdateStart = useCallback(() => {
		edgeUpdateSuccessful.current = false;
	}, []);
	const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
		edgeUpdateSuccessful.current = true;
		setEdges((eds) => updateEdge(oldEdge, newConnection, eds));
	}, []);
	const onEdgeUpdateEnd = useCallback((_, edge) => {
		if (!edgeUpdateSuccessful.current) {
			setEdges((eds) => eds.filter((e) => e.id !== edge.id));
		}
		edgeUpdateSuccessful.current = true;
	}, []);

	const showMembers = useCallback(() => {
		console.log()

	}, []);
	return (
		<>
			<NodeModal openModal={openModal} handleCloseModal={handleCloseModal} />
			<NodeMenu
				contextMenu={contextMenu} handleCloseMenu={handleCloseMenu}
				connectRectangle={connectRectangle} connectCircle={connectCircle}
				connectDiamond={connectDiamond}
			/>
			<div className="wrapper" ref={reactFlowWrapper}>
				<ReactFlow
					nodes={nodes}
					nodeTypes={nodeTypes}
					edges={edges}
					onNodeClick={showMembers}
					onDoubleClick={handleOpenModal}
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					snapToGrid
					onEdgeUpdate={onEdgeUpdate}
					onEdgeUpdateStart={onEdgeUpdateStart}
					onEdgeUpdateEnd={onEdgeUpdateEnd}
					connectionLineComponent={ConnectionLine}
					onConnect={onConnect}
					onConnectStart={onConnectStart}
					onConnectEnd={onConnectEnd}
					fitView
					fitViewOptions={fitViewOptions}
					onInit={setRfInstance}
				>
					<Background variant="dots" gap={15} size={1} color={'#252C3C'} />
				</ReactFlow>
			</div>
			<div>
				<Button variant='contained' onClick={onSave}>SAVE</Button>
				<Button variant='contained' onClick={onRestore}>RESTORE</Button>
				<Button variant='contained' onClick={onDelete}>DELETE</Button>
			</div>
		</>
	);
};

export default () => (
	<ReactFlowProvider>
		<NodeBehaviour />
	</ReactFlowProvider>
);
