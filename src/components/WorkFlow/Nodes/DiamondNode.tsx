import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import type { ComponentType } from 'react';
import {
  // getStatusColor,
  getStatusColorForControlRoom,
} from '../../../utils';
import { nodeConfig } from '../layoutConfig';
type NodeTypes = Node<{
  label: string;
  color?: string;
  text?: string;
  StepNumber?: string;
  status?: string;
  borderColor: string;
  Icon: ComponentType<any>;
  IconColor?: string;
}>;

export default function DiamondNode({ data }: NodeProps<NodeTypes>) {
  let Icon = data.Icon;
  let status = getStatusColorForControlRoom(data.status ?? '');
  const { width, height } = nodeConfig.nodeSize.diamond;
  return (
    <div className={`relative`} style={{ width, height }}>
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
        style={{ width, height }}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-center rotate-45  rounded-md border-3  flex justify-center items-center ${status ? status : data.color} ${!status && data.borderColor}`}
      />

      <div className="absolute inset-0 z-10 flex flex-col gap-0 items-center justify-center">
        {data.StepNumber && (
          <span className="absolute text-xl -top-2 left-1 flex justify-center  items-center bg-white h-10 w-10 rounded-full">
            {data.StepNumber}
          </span>
        )}
        {Icon && (
          <div
            className={`absolute bg-white p-2.5 rounded-full  -top-2 -right-0  ${data.IconColor}`}
          >
            <Icon size={24} />
          </div>
        )}
        <div
          className={`flex flex-col items-center ${data.status === 'Completed' ? 'text-white text-center' : 'text-center'}`}
        >
          <p className="rotate-0  text-base font-semibold mb-1 capitalize w-30">
            {data.label}
          </p>
          <p className="rotate-0 text-[12px] font-light w-30">{data.text}</p>
        </div>
      </div>
    </div>
  );
}
