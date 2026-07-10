import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import type { ComponentType } from 'react';
import {
  // getStatusColor,
  getStatusColorForControlRoom,
} from '../../../../utils';
type CircleNode = Node<{
  label: string;
  color?: string;
  text?: string;
  StepNumber?: string;
  status?: string;
  borderColor: string;
  Icon: ComponentType<any>;
  IconColor?: string;
}>;

export default function Index({ data }: NodeProps<CircleNode>) {
  let Icon = data.Icon;
  let status = getStatusColorForControlRoom(data.status?? '');
  return (
    <div className={`relative h-35 w-35`}>
      {/* Top Corner */}
      {/* <Handle
        type="source"
        position={Position.Top}
        style={{
          top: -8,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      /> */}

      {/* Right Corner */}
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        style={{
          right: -8,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />

      {/* Bottom Corner */}
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        style={{
          bottom: -8,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />

      {/* Left Corner */}
      <Handle
        type="target"
        id="left"
        position={Position.Left}
        style={{
          left: -8,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />

      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-center rotate-45  rounded-md border-3 w-30 h-30 flex justify-center items-center ${status ? status : data.color} ${!status && data.borderColor}`}
      />

      <div className="absolute inset-0 z-10 flex flex-col gap-0 items-center justify-center">
        <span className="absolute text-3xl -top-12 font-semibold">
          {data.StepNumber}
        </span>
        {Icon && (
          <div
            className={`absolute bg-white p-2 rounded-full  -top-8 -right-2 ${data.IconColor}`}
          >
            <Icon size={40} />
          </div>
        )}
        <div
          className={`flex flex-col ${data.status === 'Completed' ? 'text-white text-center' : 'text-center'}`}
        >
          <p className="rotate-0  text-base font-semibold mb-1">{data.label}</p>
          <p className="rotate-0 text-[12px] font-light ">{data.text}</p>
        </div>
      </div>
    </div>
  );
}
