import { type Node, type NodeProps } from '@xyflow/react';

type GroupNode = Node<{
  label: string;
  width?: string;
  height?: string;
  color?: string;
  borderColor?: string;
}>;
export default function GroupNode({ data }: NodeProps<GroupNode>) {
  return (
    <div
      className={`pointer-events-none rounded-2xl -z-10 border-3 ${data.color} ${data.borderColor}`}
      style={{
        width: `${data.width}px`,
        height: `${data.height}px`,
      }}
    >
      <div className="p-3 font-bold text-[36px] capitalize text-center">
        {data.label}
      </div>
    </div>
  );
}
