import { CreateType } from "@prisma/client";
import WorkflowIcon from "@/components/shared/icons/WorkflowIcon";
import KnowledgeIcon from "@/components/shared/icons/KnowledgeIcon";
import ComponentIcon from "@/components/shared/icons/ComponentIcon";

export const createTypeList = [
  {
    icon: WorkflowIcon,
    name: CreateType.WORKFLOW,
    uiName: "Workflow",
    color: "text-primary-500",
  },
  {
    icon: KnowledgeIcon,
    name: CreateType.KNOWLEDGE,
    uiName: "Knowledge",
    color: "text-green-500",
  },
  {
    icon: ComponentIcon,
    name: CreateType.COMPONENT,
    uiName: "Component",
    color: "text-purple-500",
  },
];
