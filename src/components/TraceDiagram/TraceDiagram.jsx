import { ChangeEventHandler, useCallback, useState } from "react";
import {
  ReactFlow,
  addEdge,
  Node,
  useNodesState,
  useEdgesState,
  OnConnect,
  Edge,
  MiniMap,
  Background,
  Controls,
  Panel,
  ColorMode,
  Position,
  MarkerType 
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

const nodeDefaults = {
  sourcePosition: Position.Bottom,
  targetPosition: Position.Top,
};

const initialNodes = [
  {
    id: "A",
    type: "input",
    position: { x: 250, y: 0 },
    data: { label: "Simulted Client" }
  },
  {
    id: "B",
    position: { x: 250, y: 150 },
    data: { label: "Job Handler" }
  },
  {
    id: "C",
    position: { x: 250, y: 300 },
    data: { label: "Bubble Sort Worker" }
  },
  {
    id: "D",
    position: { x: 250, y: 450 },
    data: { label: "Job Handler" }
  },
  {
    id: "E",
    type: "output",
    position: { x: 250, y: 600 },
    data: { label: "Simulated Client" }
  },
];

const marker = {
  type: MarkerType.ArrowClosed,
  width: 20,
  height: 20,
  color: '#FF0072',
}

const arrowStyle = {
  strokeWidth: 2,
  stroke: '#FF0072',
}

const initialEdges = [
  {
    id: "A-B",
    source: "A",
    target: "B",
    animated: true,
    markerEnd: marker,
    style: arrowStyle,
    label: 'Submit Random Job',
  },
  {
    id: "B-C",
    source: "B",
    target: "C",
    animated: true,
    markerEnd: marker,
    style: arrowStyle,
    label: 'Distribute Storing Job to Worker',
  },
  {
    id: "C-D",
    source: "C",
    target: "D",
    animated: true,
    markerEnd: marker,
    style: arrowStyle,
    label: 'Return Finished Job to Handler',
  },
  {
    id: "D-E",
    source: "D",
    target: "E",
    animated: true,
    markerEnd: marker,
    style: arrowStyle,
    label: 'Return Finished Job to Client',
  },
];

export const TraceDiagram = () => {
  const [colorMode, setColorMode] = useState("dark");
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onChange = (evt) =>
    setColorMode(evt.target.value);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      colorMode={colorMode}
      fitView
    >
      <MiniMap />
      <Background />
      <Controls />

      <Panel position="top-right">
        <select onChange={onChange} data-testid="colormode-select">
          <option value="dark">dark</option>
          <option value="light">light</option>
          <option value="system">system</option>
        </select>
      </Panel>
    </ReactFlow>
  );
};