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
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

const nodeDefaults = {
  sourcePosition: Position.Top,
  targetPosition: Position.Bottom,
};

const initialNodes = [
  {
    id: "A",
    type: "input",
    position: { x: 250, y: 600 },
    data: { label: "Simulted Client" },
    ...nodeDefaults,
  },
  {
    id: "B",
    position: { x: 250, y: 450 },
    data: { label: "Job Handler" },
    ...nodeDefaults,
  },
  {
    id: "C",
    position: { x: 250, y: 300 },
    data: { label: "Bubble Sort Worker" },
    ...nodeDefaults,
  },
  {
    id: "D",
    position: { x: 250, y: 150 },
    data: { label: "Job Handler" },
    ...nodeDefaults,
  },
  {
    id: "E",
    position: { x: 250, y: 0 },
    data: { label: "Simulated Client" },
    ...nodeDefaults,
  },
];

const initialEdges = [
  {
    id: "A-B",
    source: "A",
    target: "B",
  },
  {
    id: "B-C",
    source: "B",
    target: "C",
  },
  {
    id: "C-D",
    source: "C",
    target: "D",
  },
  {
    id: "D-E",
    source: "D",
    target: "E",
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