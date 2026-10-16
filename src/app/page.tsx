import Graph from "@/components/Graph";
import { StrictMode } from "react";
import { Edge } from "@xyflow/react";
import { CPUNodes } from "@/components/CPUNodes/CPUNodes";

export default function Home() {
    const initialNodes: CPUNodes[] = [
        {
            id: "pIcodeReg",
            position: { x: 0, y: 100 },
            data: { name: "pIcode" },
            type: "ClockedRegNode",
        },
        {
            id: "pCndReg",
            position: { x: 60, y: 100 },
            data: { name: "pCnd" },
            type: "ClockedRegNode",
        },
        {
            id: "pValMReg",
            position: { x: 120, y: 100 },
            data: { name: "pValM" },
            type: "ClockedRegNode",
        },
        {
            id: "pValCReg",
            position: { x: 180, y: 100 },
            data: { name: "pValC" },
            type: "ClockedRegNode",
        },
        {
            id: "pValPReg",
            position: { x: 240, y: 100 },
            data: { name: "pValP" },
            type: "ClockedRegNode",
        },
        { id: "PC", position: { x: 0, y: 0 }, data: {}, type: "PCNode" },
        {
            id: "PCLabel",
            position: { x: 0, y: -100 },
            data: { label: "PC" },
            type: "LabelNode",
        },
    ];
    const initialEdges: Edge[] = [
        {
            id: "piCodeReg-PC",
            source: "pIcodeReg",
            target: "PC",
            targetHandle: "pIcode",
        },
        {
            id: "pCndReg-PC",
            source: "pCndReg",
            target: "PC",
            targetHandle: "pCnd",
        },
        {
            id: "pValMReg-PC",
            source: "pValMReg",
            target: "PC",
            targetHandle: "pValM",
        },
        {
            id: "pValCReg-PC",
            source: "pValCReg",
            target: "PC",
            targetHandle: "pValC",
        },
        {
            id: "pValPReg-PC",
            source: "pValPReg",
            target: "PC",
            targetHandle: "pValP",
        },
        { id: "PC-PCLabel", source: "PC", target: "PCLabel" },
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
