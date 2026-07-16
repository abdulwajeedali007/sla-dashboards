import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import type { ComponentType } from 'react';
// import { nodeTypeSize } from '../nodeTypeConfig';
import {
  // getStatusColor,
  getStatusColorForControlRoom,
} from '../../../utils';
import { nodeConfig } from '../layoutConfig';

type NodeTypes = Node<{
  label: string;
  text?: string;
  color?: string;
  border?: boolean;
  StepNumber: string;
  status?: string;
  Icon: ComponentType<any>;
  IconColor?: string;
  borderColor?: string;
}>;

export default function CircleNode({ data }: NodeProps<NodeTypes>) {
  let Icon = data.Icon;
  let status = getStatusColorForControlRoom(data.status ?? '');
  const { width, height } = nodeConfig.nodeSize.circle;
  return (
    <div
      style={{ width, height }}
      className={`border-3 relative p-4 flex justify-center items-center rounded-full text-center ${status ? status : data.color} ${!status && data.borderColor}`}
    >
      {Icon && (
        <div
          className={`absolute bg-white p-2.5 rounded-full  -top-2 -right-0 ${data.IconColor}`}
        >
          <Icon size={24} />
        </div>
      )}
      {data.StepNumber && (
        <span className="absolute text-xl -top-2 left-1 flex justify-center  items-center bg-white h-10 w-10 rounded-full">
          {data.StepNumber}
        </span>
      )}
      <Handle type="target" id="left" position={Position.Left} />
      <div
        className={`flex flex-col p-2 ${data.status === 'Completed' ? 'text-white text-center' : 'text-center'}`}
      >
        <p className="text-center text-base font-semibold mb-1 capitalize">
          {data.label}
        </p>
        <p className="text-center font-light text-[12px]">{data.text}</p>
      </div>
      <Handle type="source" id="right" position={Position.Right} />
      <Handle type="target" id="top" position={Position.Top} />
      <Handle type="target" id="bottom" position={Position.Bottom} />
    </div>
  );
}
