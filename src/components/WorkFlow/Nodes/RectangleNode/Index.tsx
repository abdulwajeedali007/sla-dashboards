import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import type { ComponentType } from 'react';
import {
  getStatusColor,
  getStatusColorForControlRoom,
} from '../../../../utils';

type CircleNode = Node<{
  label: string;
  text: string;
  color?: string;
  StepNumber?: string;
  status: string;
  Icon?: ComponentType<any>;
  IconColor: string;
  borderColor?: string;
}>;

export default function CircleNodeComponent({ data }: NodeProps<CircleNode>) {
  const Icon = data.Icon;
  let status = getStatusColorForControlRoom(data.status);

  return (
    <div
      className={`relative p-2 border-3 rounded-full w-50 h-25 flex flex-col justify-center items-center font-semibold ${status ? status : data.color} ${!status && data.borderColor}`}
    >
      <span className="absolute -top-12 text-3xl">{data.StepNumber}</span>

      {Icon && (
        <div
          className={`absolute bg-white p-2 rounded-full  -top-10 -right-2 ${data.IconColor}`}
        >
          <Icon size={40} />
        </div>
      )}

      <Handle type="target" id="left" position={Position.Left} />
      <Handle type="target" id="top" position={Position.Top} />

      <div
        className={`${data.status === 'Completed' ? 'text-white text-center' : 'text-center'}`}
      >
        <p className="text-base mb-1">{data.label}</p>
        <p className="text-[12px] font-light">{data.text}</p>
      </div>

      <Handle type="source" id="right" position={Position.Right} />
      <Handle type="source" id="bottom" position={Position.Bottom} />
    </div>
  );
}
