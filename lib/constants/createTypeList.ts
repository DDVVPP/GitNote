import { CreateType } from "@prisma/client";
import WorkflowIcon from "@/components/shared/icons/WorkflowIcon";
import KnowledgeIcon from "@/components/shared/icons/KnowledgeIcon";
import ComponentIcon from "@/components/shared/icons/ComponentIcon";
import { CreateTypeListItemType } from "@/types";

export const createTypeList: CreateTypeListItemType[] = [
  {
    icon: WorkflowIcon,
    name: CreateType.WORKFLOW,
    uiName: "Workflow",
    badgeColor: "blue",
    color: "text-primary-500",
  },
  {
    icon: KnowledgeIcon,
    name: CreateType.KNOWLEDGE,
    uiName: "Knowledge",
    badgeColor: "green",
    color: "text-green-lime",
  },
  {
    icon: ComponentIcon,
    name: CreateType.COMPONENT,
    uiName: "Component",
    badgeColor: "purple",
    color: "text-purple-500",
  },
];
