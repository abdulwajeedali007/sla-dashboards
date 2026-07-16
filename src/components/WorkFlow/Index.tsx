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
import RectangleComp from './Nodes/RectangleNode';
import DiamondNode from './Nodes/DiamondNode';
import CircleNode from './Nodes/CircleNode';
import GroupNode from './Nodes/GroupNode';
import TitleNode from '../../components/WorkFlow/Nodes/TitleNode';
import Legends from '../Legends/Index';
import TaskDetailsPopup from '../../components/TaskDetailsPopup/Index';
import Loader from '../../components/Loader/Index';
import ProjectDetails from '../../components/ProjectDetails/Index';
import InfoBlock from '../../components/WorkFlow/Nodes/Info';
// import Title from '../../components/Title/Index';
// import { initialNodes } from '../../components/WorkFlow/nodes';
import { initialEdges } from '../../components/WorkFlow/edges';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store';
// import { buildNodes } from './workflowBuilder';
import { buildNodes } from './workflowBuilder1';
import { fetchTaskDetails } from '../../store/SingleTaskDetailsPopupSlice';
import { fetchSlaTasks } from '../../store/TaskWiseDetailsSlice';
import { useParams } from 'react-router';
import type { SlaTask } from '../../Types';
// import { format } from 'date-fns';
import { getStatusColor, mileStone } from '../../utils';
import { Construction } from 'lucide-react';
// import Legends from '../Legends/Index';
// import { fetchSlaTasks } from '../../store/TaskWiseDetailsSlice';
// import { departments } from '../../components/WorkFlow/department';
// import DepartmentBackground from '../../components/WorkFlow/DepartmentBackground';

const nodeTypes = {
  rectangle: RectangleComp,
  diamond: DiamondNode,
  circle: CircleNode,
  GroupNode: GroupNode,
  InfoBlock: InfoBlock,
  TitleNode: TitleNode,
  // Legends,
};

function Index() {
  const dispatch = useDispatch<AppDispatch>();
  // const { fitView } = useReactFlow();
  const [selectedNode, setSelectedNode] = useState<Node | false>(false);
  const { data, loading } = useSelector((state: RootState) => state.slaTasks);
  const { data: taskDetailsData, loading: loadingtaskDetailsData } =
    useSelector((state: RootState) => state.taskDetails);
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const firstNode = nodes.filter((item) => item.data.StepNumber === '1')[0];
  const firstNodeId = firstNode?.data?.pyGUID as string;
  const [nodeId, setNodeId] = useState('');
  const [status, setStatus] = useState('In Progress');
  function getStatusFilterData(value: string) {
    setStatus(value);
  }
  const { statusFilterData } = mileStone(data ?? [], '', status);
  const { id } = useParams();
  const onNodeClick: NodeMouseHandler = (_, node: Node) => {
    // navigate(`/task/${node.id}`);
    const id = node && node.data.pyGUID;
    if (id) {
      setSelectedNode(node);
      dispatch(fetchTaskDetails(id as string));
    }
  };
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
    if (id) {
      dispatch(fetchSlaTasks(id));
    }
    setNodeId(firstNodeId);
    dispatch(fetchTaskDetails(nodeId));
    // }
  }, [dispatch, nodeId]);
  useEffect(() => {
    if (data && data?.length > 0) {
      setNodes(buildNodes(data));
    }
    // requestAnimationFrame(() => {
    //   fitView({
    //     padding: 0.08,
    //     duration: 50,
    //   });
    // });
  }, [data, setNodes]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="w-full  mt-4">
      {/* <div className="px-8"><Title heading={'Control Room'} /></div> */}
      <div className="mb-2">
        <ProjectDetails />
      </div>
      {/* <DepartmentBackground departments={departments} nodes={nodes} /> */}
      <div className="flex gap-2">
        {/* <div className="rounded-[20px] bg-white border border-(--border-color)">
          <InfoBlock />
        </div> */}
        <div className="w-full min-h-[700px] bg-blue-50 rounded-[20px] border border-(--border-color)">
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
            // defaultViewport={{ x: -500, y: 400, zoom: -1 }}
            // fitView
            // fitViewOptions={{
            //   padding: 0.2,
            // }}
            minZoom={0.15}
            maxZoom={2}
            fitView
            fitViewOptions={{
              padding: 0.05,
            }}
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
                borderRadius: 20,
              },
              // labelBgStyle: {
              //   fill: 'none',
              // },
              labelBgPadding: [15, 0],
            }}
          >
            <Background variant={BackgroundVariant.Cross} />
            <Controls position={'top-right'} />
          </ReactFlow>
        </div>

        <div className="px-4 py-5 w-xl rounded-[20px] bg-white border border-(--border-color) hidden md:block">
          <div>
            {/* <div className="flex gap-5 pb-3 border-b border-(--border-color) font-bold uppercase mb-2">
              <p>Total {status} steps </p> - <p>{statusFilterData.length}</p>
            </div> */}
            <div>
              <Legends
                getStatusFilterData={getStatusFilterData}
                status={status}
                controlPanel="true"
              />
            </div>

            <div className="max-h-[325px] h-[325px] mb-2 p-2 custom-scrollbar border border-(--border-color) rounded-[20px] overflow-y-auto ">
              {statusFilterData && statusFilterData.length === 0 ? (
                <p className="flex justify-center my-8">
                  No steps found with status {status}
                </p>
              ) : (
                statusFilterData.map((task: SlaTask) => {
                  const status = getStatusColor(task.TaskStatus);

                  // const textStatusColor = getTextStatusColor(task.TaskStatus);
                  return (
                    <div
                      className="bg-white border border-(--border-color) p-4 rounded-[20px] mb-4"
                      key={task.pyGUID}
                    >
                      <div className="flex items-center pb-2 mb-2 border-b border-(--border-color)">
                        <p
                          className={` text-center leading-6 h-6 w-6 mr-3 ${status} rounded text-white text-sm`}
                        >
                          {task.StepNumber}
                        </p>
                        <p className="font-bold text-sm">{task.TaskName}</p>
                      </div>
                      <div className="flex justify-between">
                        <div className="">
                          <p className="font-light text-sm">
                            {/* <Info size={20} />  */}
                            <span>Status</span>
                          </p>
                          <p
                            className={`text-[10px] tracking-wide text-white  ${status} font-semibold inline-block px-2 py-1 rounded-[20px]`}
                          >
                            {task.TaskStatus}
                          </p>
                        </div>
                        <div className="">
                          <p className="font-light text-sm">
                            {/* <Building2 size={20} /> */}
                            <span>Department Name</span>
                          </p>
                          <p className="font-bold text-sm">
                            {task.DepartmentName}
                          </p>
                        </div>
                      </div>
                      {/* <div className="mb-6 py-1 flex items-center justify-between">
                        <p className="flex items-center text-sm gap-1">
                          <UserRound size={20} />
                          <span>Dependency Step</span>
                        </p>
                        <p className="font-medium">
                          {Number(task.StepNumber) - 1}
                        </p>
                      </div> 
                      <div className="mb-6 py-1 flex items-center justify-between">
                        <p className="flex items-center text-sm gap-1">
                          <Calendar size={20} />
                          <span>End Date</span>
                        </p>
                         <p className="font-medium">
                        {task.TaskDueDate
                          ? format(new Date(task.TaskEndDate), 'yyyy-MM-dd')
                          : '-'}
                      </p> *
                      </div> */}
                    </div>
                  );
                })
              )}
            </div>

            {/* {taskDetailsData.map((task) => (
              <div>{task.TaskName}</div>
            ))} */}
            <div className="h-70  rounded-[20px] flex flex-col justify-center items-center bg-white border border-(--border-color)">
              <Construction
                color="#212121"
                size={60}
                strokeWidth={1}
                className="mb-4"
              />
              <p className="text-(--primary-color)">
                AI Integration is in progress
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {selectedNode && (
          <TaskDetailsPopup
            toggle={selectedNode}
            setToggle={setSelectedNode}
            loading={loadingtaskDetailsData}
            data={taskDetailsData}
          />
        )}
      </div>
    </div>
  );
}
export default Index;
