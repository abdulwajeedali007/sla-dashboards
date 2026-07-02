import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';

type CircleNode = Node<{
  label: string;
  text: string;
  color?: string;
}>;

export default function CircleNodeComponent({ data }: NodeProps<CircleNode>) {
  return (
    <div className={`p-2 border rounded-md w-50 text-center ${data.color}`}>
      <Handle type="target" id="left" position={Position.Left} />
      <Handle type="target" id="top" position={Position.Top} />
      <p className="text-base m-0 p-0 text-center">{data.label}</p>
      <span className="text-[12px] m-0 p-0 text-center">{data.text}</span>
      <Handle type="source" id="right" position={Position.Right} />
      <Handle type="source" id="bottom" position={Position.Bottom} />
    </div>
  );
}
