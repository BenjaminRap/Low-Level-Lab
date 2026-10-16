import PCNode, { PCNodeData } from "@/components/CPUNodes/PCNode";
import LabelNode, { LabelNodeData } from "./LabelNodes";

export type CPUNodes = PCNodeData | LabelNodeData;

export const nodeTypes = {
    PCNode: PCNode,
    LabelNode: LabelNode,
};
