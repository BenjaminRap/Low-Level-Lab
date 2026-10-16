import { Handle, Node, NodeProps, Position } from "@xyflow/react";

export type LabelNodeData = Node<
    {
        label: string;
    },
    "LabelNode"
>;

export default function LabelNode({ data }: NodeProps<LabelNodeData>) {
    return (
        <div className="aspect-square border-solid border-[thin] border-black hardware-node label-node flex flex-row items-center">
            <Handle type="source" position={Position.Top} />
            <Handle type="target" position={Position.Bottom} />
            <div className="ml-1 mr-1 text-center">{data.label}</div>
        </div>
    );
}
