import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import type { ComponentType } from 'react';
import {
  getStatusColor,
  getStatusColorForControlRoom,
} from '../../../../utils';

type CircleNode = Node<{
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

export default function CircleNodeComponent({ data }: NodeProps<CircleNode>) {
  let Icon = data.Icon;
  let status = getStatusColorForControlRoom(data.status);

  return (
    <div
      className={`${data.border ? 'border-8' : 'border-3'} relative w-35 h-35 flex justify-center items-center rounded-full text-center ${status ? status : data.color} ${!status && data.borderColor}`}
    >
      {Icon && (
        <div
          className={`absolute bg-white p-2 rounded-full  -top-10 -right-4 ${data.IconColor}`}
        >
          <Icon size={40} />
        </div>
      )}
      <span className="absolute text-3xl -top-12 font-semibold">
        {data.StepNumber}
      </span>
      <Handle type="target" id="left" position={Position.Left} />
      <div
        className={`flex flex-col p-2 ${data.status === 'Completed' ? 'text-white text-center' : 'text-center'}`}
      >
        <p className="text-center text-base font-semibold mb-1">{data.label}</p>
        <p className="text-center font-light text-[12px]">{data.text}</p>
      </div>
      <Handle type="source" id="right" position={Position.Right} />
      <Handle type="target" id="top" position={Position.Top} />
      <Handle type="target" id="bottom" position={Position.Bottom} />
    </div>
  );
}
