import { type Node, type NodeProps } from '@xyflow/react';

type TitleProps = Node<{
  label: string;
}>;
function TitleNode({ data }: NodeProps<TitleProps>) {
  return (
    // <div className="mb-9 flex flex-col justify-between  sm:flex-row sm:px-0 sm:flex-center sm:items-center">
    //   <div className="flex items-center gap-1 sm:gap-2 sm:flex-row">
    <h2 className="text-(--primary-color)  tracking-tight text-7xl capitalize font-semibold">
      {data.label}
    </h2>
    //   </div>
    // </div>
  );
}

export default TitleNode;
