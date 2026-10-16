import { Handle, Node, NodeProps, Position } from "@xyflow/react";

export type ClockedRegNodeData = Node<
    {
        name: string;
    },
    "ClockedRegNode"
>;

export default function ClockedRegNode({
    data,
}: NodeProps<ClockedRegNodeData>) {
    return (
        <div className="border-solid border-[thin] border-black hardware-node clocked-reg-node flex flex-row items-center">
            <Handle type="source" position={Position.Top} />
            <Handle type="target" position={Position.Bottom} />
            <div className="ml-1 mr-1 text-center">{data.name}</div>
        </div>
    );
}
