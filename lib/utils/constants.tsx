import { CreateType } from "@prisma/client";
import WorkflowIcon from "../../components/shared/icons/WorkflowIcon";
import ComponentIcon from "../../components/shared/icons/ComponentIcon";
import KnowledgeIcon from "../../components/shared/icons/KnowledgeIcon";

export const urlMatch =
  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

export const iconMatch = (title: string, createType: CreateType) => {
  switch (createType) {
    case CreateType.COMPONENT:
      return (
        <>
          <ComponentIcon className="text-purple-500" size={18} />
          <span>{title}</span>
        </>
      );
    case CreateType.WORKFLOW:
      return (
        <>
          <WorkflowIcon className="text-primary-500" size={18} />
          <span>{title}</span>
        </>
      );
    case CreateType.KNOWLEDGE:
      return (
        <>
          <KnowledgeIcon className="text-green-lime" size={18} />
          <span>{title}</span>
        </>
      );
  }
};
