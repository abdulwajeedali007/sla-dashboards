import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import type { ComponentType } from 'react';
import {
  // getStatusColor,
  getStatusColorForControlRoom,
} from '../../../utils';
import { nodeConfig } from '../layoutConfig';

type NodeTypes = Node<{
  label: string;
  text: string;
  color?: string;
  StepNumber?: string;
  status: string;
  Icon?: ComponentType<any>;
  IconColor: string;
  borderColor?: string;
}>;

export default function RectangleNode({ data }: NodeProps<NodeTypes>) {
  const Icon = data.Icon;
  let status = getStatusColorForControlRoom(data.status ?? '');
  const { width, height } = nodeConfig.nodeSize.rectangle;

  return (
    <div
      style={{ width, height }}
      className={`relative p-4 border-3 rounded-xl flex flex-col justify-center items-center  ${status ? status : data.color} ${!status && data.borderColor}`}
    >
      {data.StepNumber && (
        <span className="absolute text-xl -top-6 -left-5 flex justify-center  items-center bg-white h-10 w-10 rounded-full">
          {data.StepNumber}
        </span>
      )}
      {Icon && (
        <div
          className={`absolute bg-white p-2.5 rounded-full  -top-6 -right-5  ${data.IconColor}`}
        >
          <Icon size={24} />
        </div>
      )}

      <Handle type="target" id="left" position={Position.Left} />
      <Handle type="target" id="top" position={Position.Top} />

      <div
        className={`${data.status === 'Completed' ? 'text-white text-center' : 'text-center'}`}
      >
        <p className="text-base mb-1 font-semibold capitalize">{data.label}</p>
        <p className="text-[12px] font-light ">{data.text}</p>
      </div>

      <Handle type="source" id="right" position={Position.Right} />
      <Handle type="source" id="bottom" position={Position.Bottom} />
    </div>
  );
}
