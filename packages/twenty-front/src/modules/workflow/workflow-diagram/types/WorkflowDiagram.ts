import {
  WorkflowActionType,
  WorkflowRunStepStatus,
  WorkflowTriggerType,
} from '@/workflow/types/Workflow';
import { Edge, Node } from '@xyflow/react';

export type WorkflowDiagramStepNode = Node<WorkflowDiagramStepNodeData>;
export type WorkflowDiagramNode = Node<WorkflowDiagramNodeData>;
export type WorkflowDiagramEdge = Edge<EdgeData>;

export type WorkflowRunDiagramNode = Node<WorkflowRunDiagramNodeData>;
export type WorkflowRunDiagramEdge = Edge<EdgeData>;

export type WorkflowRunDiagram = {
  nodes: Array<WorkflowRunDiagramNode>;
  edges: Array<WorkflowRunDiagramEdge>;
};

export type WorkflowDiagram = {
  nodes: Array<WorkflowDiagramNode>;
  edges: Array<WorkflowDiagramEdge>;
};

export type WorkflowDiagramStepNodeData =
  | {
      nodeType: 'trigger';
      triggerType: WorkflowTriggerType;
      name: string;
      icon?: string;
      runStatus?: WorkflowRunStepStatus;
    }
  | {
      nodeType: 'action';
      actionType: WorkflowActionType;
      name: string;
      runStatus?: WorkflowRunStepStatus;
    };

export type WorkflowRunDiagramStepNodeData = Exclude<
  WorkflowDiagramStepNodeData,
  'runStatus'
> & {
  runStatus: WorkflowRunStepStatus;
};

export type WorkflowDiagramCreateStepNodeData = {
  nodeType: 'create-step';
  parentNodeId: string;
};

export type WorkflowDiagramEmptyTriggerNodeData = {
  nodeType: 'empty-trigger';
};

export type WorkflowDiagramNodeData =
  | WorkflowDiagramStepNodeData
  | WorkflowDiagramCreateStepNodeData
  | WorkflowDiagramEmptyTriggerNodeData;

export type WorkflowRunDiagramNodeData = Exclude<
  WorkflowDiagramStepNodeData,
  'runStatus'
> & { runStatus: WorkflowRunStepStatus };

export type EdgeData = {
  stepId?: string;
  filter?: Record<string, any>;
  shouldDisplayEdgeOptions?: boolean;
};

export type WorkflowDiagramNodeType =
  | 'default'
  | 'empty-trigger'
  | 'create-step';

export type WorkflowDiagramEdgeType = 'default' | 'success';
