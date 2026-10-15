"use client";
import { CSSProperties, useState } from "react";
import {
    Edge,
    ReactFlow,
    Node,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
    OnNodesChange,
    OnEdgesChange,
    OnConnect,
    Background,
    BackgroundVariant,
} from "@xyflow/react";

export type GraphProps = {
    className?: string;
    style?: CSSProperties;
    initialNodes: Node[];
    initialEdges: Edge[];
};

export default function Graph({
    className,
    style,
    initialNodes,
    initialEdges,
}: GraphProps) {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const onNodesChange: OnNodesChange = (changes) => {
        setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot));
    };
    const onEdgesChange: OnEdgesChange = (changes) => {
        setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot));
    };
    const onConnect: OnConnect = (params) => {
        setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot));
    };

    return (
        <div className={className} style={style}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            >
                <Background color="#ccc" variant={BackgroundVariant.Cross} />
            </ReactFlow>
        </div>
    );
}
