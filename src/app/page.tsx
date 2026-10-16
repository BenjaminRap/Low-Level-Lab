import Graph from "@/components/Graph";
import { StrictMode } from "react";
import { Edge } from "@xyflow/react";
import { CPUNodes } from "@/components/CPUNodes/CPUNodes";

export default function Home() {
    const initialNodes: CPUNodes[] = [
        { id: "n1", position: { x: 0, y: 100 }, data: {}, type: "PCNode" },
        { id: "n2", position: { x: 0, y: 0 }, data: {}, type: "PCNode" },
    ];
    const initialEdges: Edge[] = [
        { id: "n1-n2", source: "n1", targetHandle: "pIcode", target: "n2" },
    ];

    return (
        <StrictMode>
            <Graph
                initialEdges={initialEdges}
                initialNodes={initialNodes}
                className="w-screen h-screen"
            />
        </StrictMode>
    );
}
