import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';

type CircleNode = Node<{
  label: string;
  text?: string;
  color?: string;
  border?: boolean;
}>;

export default function CircleNodeComponent({ data }: NodeProps<CircleNode>) {
  return (
    <div
      className={`${data.border ? 'border-5' : 'border'} w-30 h-30 flex justify-center h-20 items-center rounded-full w-20 h-20 text-center ${data.color}`}
    >
      <Handle type="target" id="left" position={Position.Left} />
      <div className="flex flex-col">
        <p className="text-center text-base font-semibold">{data.label}</p>
        <span className="text-center text-[12px]">{data.text}</span>
      </div>
      <Handle type="source" id="right" position={Position.Right} />
      <Handle type="target" id="top" position={Position.Top} />
      <Handle type="target" id="bottom" position={Position.Bottom} />
    </div>
  );
}
