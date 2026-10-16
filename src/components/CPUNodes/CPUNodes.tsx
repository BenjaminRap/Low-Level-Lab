import PCNode, { PCNodeData } from "@/components/CPUNodes/PCNode";
import LabelNode, { LabelNodeData } from "./LabelNodes";
import ClockedRegNode, { ClockedRegNodeData } from "./ClockedRegNode";
import ClockNode, { ClockNodeData } from "./ClockNode";

export type CPUNodes =
    PCNodeData | LabelNodeData | ClockedRegNodeData | ClockNodeData;

export const nodeTypes = {
    PCNode: PCNode,
    LabelNode: LabelNode,
    ClockedRegNode: ClockedRegNode,
    ClockNode: ClockNode,
};
