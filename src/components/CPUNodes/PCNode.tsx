"use client";

import { Node, NodeProps } from "@xyflow/react";

export type PCNodeData = Node<Record<string, never>, "PCNode">;

export default function PCNode({}: NodeProps<PCNodeData>) {
    return <div>Custom node</div>;
}
