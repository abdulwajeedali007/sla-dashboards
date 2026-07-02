import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
type CircleNode = Node<{
  label: string;
  color?: string;
  text?: string;
}>;
export default function Index({ data }: NodeProps<CircleNode>) {
  return (
    <div className={`relative h-30 w-30 `}>
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
        className={`absolute inset-0 rotate-45 rounded-md border ${data.color}`}
      />

      <div className="absolute inset-0 z-10 flex flex-col gap-0 items-center justify-center">
        <span className="rotate-0 p-2 text-base text-center">{data.label}</span>
        <span className="rotate-0 p-2 text-[12px] text-center">
          {data.text}
        </span>
      </div>
    </div>
  );
}
