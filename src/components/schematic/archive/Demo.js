import React, { useState } from "react";

import ReactFlow, {
	addEdge,
	MiniMap,
	Controls,
	ControlButton,
	Background,
	updateEdge
} from "react-flow-renderer";
import removeElements from "react-flow-renderer";
import initialElements from "./initial-elements";

const onLoad = (reactFlowInstance) => {
	console.log("flow loaded:", reactFlowInstance);
	reactFlowInstance.fitView();
};

const OverviewFlow = () => {
	const [elements, setElements] = useState(initialElements);
	const onElementsRemove = (elementsToRemove) =>
		setElements((els) => removeElements(elementsToRemove, els));
	const onConnect = (params) => setElements((els) => addEdge(params, els));
	// gets called after end of edge gets dragged to another source or target
	const onEdgeUpdate = (oldEdge, newConnection) =>
		setElements((els) => updateEdge(oldEdge, newConnection, els));
	return (
		<ReactFlow
			elements={elements}
			onElementsRemove={onElementsRemove}
			onConnect={onConnect}
			onEdgeUpdate={onEdgeUpdate}
			onLoad={onLoad}
			snapToGrid={true}
			snapGrid={[15, 15]}
			onMove={(e) => console.log("moving")}
		>
			<MiniMap
				nodeStrokeColor={(n) => {
					if (n.style?.background) return n.style.background;
					if (n.type === "input") return "#0041d0";
					if (n.type === "output") return "#ff0072";
					if (n.type === "default") return "#1a192b";

					return "#eee";
				}}
				nodeColor={(n) => {
					if (n.style?.background) return n.style.background;

					return "#fff";
				}}
				nodeBorderRadius={2}
			/>
			<Controls
				onZoomIn={() => console.log("zoom in pressed")}
			>
				<ControlButton onClick={() => console.log("action")}>h</ControlButton>
			</Controls>
			<Background color="#aaa" gap={16} />
		</ReactFlow>
	);
};

export default OverviewFlow;
