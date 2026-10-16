import Graph from "@/components/Graph";
import { StrictMode } from "react";
import { Edge } from "@xyflow/react";
import { CPUNodes } from "@/components/CPUNodes/CPUNodes";

export default function Home() {
    const initialNodes: CPUNodes[] = [
        {
            id: "clock",
            position: { x: 200, y: 150 },
            data: {},
            type: "ClockNode",
        },
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
            id: "clock-pIcodeReg",
            source: "clock",
            target: "pIcodeReg",
            targetHandle: "source",
            type: "step",
        },
        {
            id: "clock-pCndReg",
            source: "clock",
            target: "pCndReg",
            targetHandle: "source",
            type: "step",
        },
        {
            id: "clock-pValMReg",
            source: "clock",
            target: "pValMReg",
            targetHandle: "source",
            type: "step",
        },
        {
            id: "clock-pValCReg",
            source: "clock",
            target: "pValCReg",
            targetHandle: "source",
            type: "step",
        },
        {
            id: "clock-pValPReg",
            source: "clock",
            target: "pValPReg",
            targetHandle: "source",
            type: "step",
        },
        {
            id: "pIcodeReg-PC",
            source: "pIcodeReg",
            target: "PC",
            targetHandle: "pIcode",
            type: "step",
        },
        {
            id: "pCndReg-PC",
            source: "pCndReg",
            target: "PC",
            targetHandle: "pCnd",
            type: "step",
        },
        {
            id: "pValMReg-PC",
            source: "pValMReg",
            target: "PC",
            targetHandle: "pValM",
            type: "step",
        },
        {
            id: "pValCReg-PC",
            source: "pValCReg",
            target: "PC",
            targetHandle: "pValC",
            type: "step",
        },
        {
            id: "pValPReg-PC",
            source: "pValPReg",
            target: "PC",
            targetHandle: "pValP",
            type: "step",
        },
        { id: "PC-PCLabel", source: "PC", target: "PCLabel", type: "step" },
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
