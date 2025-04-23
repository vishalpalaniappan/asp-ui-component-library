import { useCallback, useState } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  MiniMap,
  Background,
  Controls,
  Panel,
  useReactFlow
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { initialNodes, initialEdges } from './SampleNodes.js';
import { getLayoutedElements } from "./DagreLayout.js";

const Flow = () => {
  const { fitView } = useReactFlow();
  const [colorMode, setColorMode] = useState("dark");
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onChange = (evt) =>
    setColorMode(evt.target.value);

  const onLayout = useCallback(
    (direction) => {
      console.log(nodes);
      const layouted = getLayoutedElements(nodes, edges, { direction });
 
      setNodes([...layouted.nodes]);
      setEdges([...layouted.edges]);
 
      fitView();
    },
    [nodes, edges],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      colorMode={colorMode}
      fitView
    >
      <Controls />

      <Panel position="top-right">
        <select onChange={onChange} data-testid="colormode-select">
          <option value="dark">dark</option>
          <option value="light">light</option>
          <option value="system">system</option>
        </select>
      </Panel>

      <Panel position="top-left">
        <button onClick={() => onLayout('TB')}>vertical layout</button>
        <button onClick={() => onLayout('LR')}>horizontal layout</button>
      </Panel>
    </ReactFlow>
  );
};

export const TraceDiagram = (props) => {
  return (
    <ReactFlowProvider>
      <Flow {...props} />
    </ReactFlowProvider>
  );
}