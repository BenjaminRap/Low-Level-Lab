import { Handle, Node, NodeProps, Position } from "@xyflow/react";

export type PCNodeData = Node<Record<string, never>, "PCNode">;

export default function PCNode({}: NodeProps<PCNodeData>) {
    return (
        <div className="w-2xs border-solid border-[thin] border-black hardware-node comb-node">
            <div className="text-center">PC</div>
            <Handle type="source" position={Position.Top} id="pc-output" />
            <Handle
                type="target"
                position={Position.Bottom}
                id="pIcode"
                className="left-1/6"
            />
            <Handle
                type="target"
                position={Position.Bottom}
                id="pCnd"
                className="left-2/6"
            />
            <Handle
                type="target"
                position={Position.Bottom}
                id="pValM"
                className="left-3/6"
            />
            <Handle
                type="target"
                position={Position.Bottom}
                id="pValC"
                className="left-4/6"
            />
            <Handle
                type="target"
                position={Position.Bottom}
                id="pValP"
                className="left-5/6"
            />
        </div>
    );
}
