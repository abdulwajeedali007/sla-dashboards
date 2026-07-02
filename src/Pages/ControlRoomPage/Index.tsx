import { useCallback } from 'react';
import {
  ReactFlow,
  // applyNodeChanges,
  // applyEdgeChanges,
  addEdge,
  // type Node,
  Controls,
  useNodesState,
  useEdgesState,
  type Connection,
  Background,
  BackgroundVariant,
  type Node,
  type NodeMouseHandler,
  // Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
// import { useNavigate } from 'react-router';
import RectangleComp from '../../components/WorkFlow/Nodes/RectangleNode/Index';
import Diamond from '../../components/WorkFlow/Nodes/DiamondNode/Index';
import Circle from '../../components/WorkFlow/Nodes/CircleNode/Index';
import Title from '../../components/Title/Index';
import { initialNodes } from '../../components/WorkFlow/nodes';
import { initialEdges } from '../../components/WorkFlow/edges';
// import { departments } from '../../components/WorkFlow/department';
// import DepartmentBackground from '../../components/WorkFlow/DepartmentBackground';

const nodeTypes = {
  rectangle: RectangleComp,
  diamond: Diamond,
  circle: Circle,
};

function Index() {
  // const navigate = useNavigate();
  // const onNodeClick = (event, node) => {
  const onNodeClick: NodeMouseHandler = (_, node: Node) => {
    // navigate(`/task/${node.id}`);
    console.log(node);
  };

  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: Connection) => {
    setEdges((eds) =>
      addEdge(
        {
          ...params,
          id: crypto.randomUUID(),
        },
        eds,
      ),
    );
  }, []);
  return (
    <div className="w-full h-screen my-8">
      <div className="px-8">
        <Title heading={'Control Room'} />
      </div>
      {/* <DepartmentBackground departments={departments} nodes={nodes} /> */}
      <div className="w-full h-screen ">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          onNodeClick={onNodeClick}
          panOnDrag
          zoomOnScroll
          zoomOnPinch
          zoomOnDoubleClick
          fitView
        >
          <Background variant={BackgroundVariant.Cross} />
          <Controls position={'top-right'} />
        </ReactFlow>
      </div>
    </div>
  );
}
export default Index;
