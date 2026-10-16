import Graph from "@/components/Graph";
import { StrictMode } from "react";
import { Node, Edge } from "@xyflow/react";

export default function Home() {
    const initialNodes: Node[] = [
        { id: "n1", position: { x: 0, y: 0 }, data: { label: "Node 1" } },
        { id: "n2", position: { x: 0, y: 100 }, data: { label: "Node 2" } },
    ];
    const initialEdges: Edge[] = [{ id: "n1-n2", source: "n1", target: "n2" }];

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
