import { useCallback, useEffect, useState } from 'react';
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
  MarkerType,
  // Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
// import { useNavigate } from 'react-router';
import RectangleComp from '../../components/WorkFlow/Nodes/RectangleNode/Index';
import Diamond from '../../components/WorkFlow/Nodes/DiamondNode/Index';
import Circle from '../../components/WorkFlow/Nodes/CircleNode/Index';
import GroupNode from '../../components/WorkFlow/Nodes/GroupNode/Index';
import TitleNode from '../../components/WorkFlow/Nodes/TitleNode';
import Info from '../../components/WorkFlow/Nodes/Info';
import Legends from '../../components/WorkFlow/Nodes/LegendNode/Index';
import TaskDetailsPopup from '../../components/TaskDetailsPopup/Index';
import Loader from '../../components/Loader/Index';
// import Title from '../../components/Title/Index';
// import { initialNodes } from '../../components/WorkFlow/nodes';
import { initialEdges } from '../../components/WorkFlow/edges';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store';
import { buildNodes } from './workflowBuilder';
import { fetchTaskDetails } from '../../store/SingleTaskDetailsPopupSlice';
import { fetchSlaTasks } from '../../store/TaskWiseDetailsSlice';
// import { fetchSlaTasks } from '../../store/TaskWiseDetailsSlice';
// import { departments } from '../../components/WorkFlow/department';
// import DepartmentBackground from '../../components/WorkFlow/DepartmentBackground';

const nodeTypes = {
  rectangle: RectangleComp,
  diamond: Diamond,
  circle: Circle,
  GroupNode: GroupNode,
  Info: Info,
  TitleNode: TitleNode,
  Legends,
};

function Index() {
  // const navigate = useNavigate();
  // const onNodeClick = (event, node) => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedNode, setSelectedNode] = useState<Node | false>(false);
  const onNodeClick: NodeMouseHandler = (_, node: Node) => {
    // navigate(`/task/${node.id}`);
    // console.log(node);
    const id = node && node.data.pyGUID;
    if (id) {
      setSelectedNode(node);
      dispatch(fetchTaskDetails(id as string));
    }
  };

  const { data, loading } = useSelector((state: RootState) => state.slaTasks);
  console.log(data);
  const { data: taskDetailsData, loading: loadingtaskDetailsData } =
    useSelector((state: RootState) => state.taskDetails);
  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // console.log('loading', loading);
  // const initialNodes = buildNodes([]);
  // console.log(initialNodes);
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
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
  useEffect(() => {
    // if (id) {
    dispatch(fetchSlaTasks(''));
    // dispatch(fetchProjectDetails(id));
    // }
  }, [dispatch]);
  useEffect(() => {
    if (data && data?.length > 0) {
      setNodes(buildNodes(data));
    }
  }, [data, setNodes]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="w-full h-screen my-8">
      <div className="px-8">{/* <Title heading={'Control Room'} /> */}</div>
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
          // fitView
          defaultViewport={{ x: -500, y: 400, zoom: 0 }}
          defaultEdgeOptions={{
            style: {
              stroke: '#2563EB',
              strokeWidth: 3,
            },
            markerEnd: {
              type: MarkerType.ArrowClosed,
              color: '#2563EB',
            },
            labelStyle: {
              fill: '#2563EB', // Label text color
              fontSize: 14,
              fontWeight: 600,
            },
            labelBgPadding: [15, 0],
          }}
        >
          <Background variant={BackgroundVariant.Cross} />
          <Controls position={'top-right'} />
        </ReactFlow>
      </div>
      {selectedNode && (
        <TaskDetailsPopup
          toggle={selectedNode}
          setToggle={setSelectedNode}
          loading={loadingtaskDetailsData}
          data={taskDetailsData}
        />
      )}
    </div>
  );
}
export default Index;
