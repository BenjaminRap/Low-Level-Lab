import { Handle, Node, NodeProps, Position } from "@xyflow/react";

export type ClockNodeData = Node<Record<string, never>, "ClockNode">;

export default function ClockNode({}: NodeProps<ClockNodeData>) {
    return (
        <div className="border-solid border-[thin] border-black hardware-node clocked-reg-node flex flex-row items-center">
            <Handle type="source" position={Position.Top} />
            <div className="ml-1 mr-1 text-center">Clock</div>
        </div>
    );
}
