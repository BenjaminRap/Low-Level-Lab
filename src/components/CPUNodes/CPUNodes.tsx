import PCNode, { PCNodeData } from "@/components/CPUNodes/PCNode";
import LabelNode, { LabelNodeData } from "./LabelNodes";
import ClockedRegNode, { ClockedRegNodeData } from "./ClockedRegNode";

export type CPUNodes = PCNodeData | LabelNodeData | ClockedRegNodeData;

export const nodeTypes = {
    PCNode: PCNode,
    LabelNode: LabelNode,
    ClockedRegNode: ClockedRegNode,
};
