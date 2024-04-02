"use client";

import { useEffect, useState } from "react";

import { CreateType } from "@prisma/client";
import { createTypeList } from "@/lib/constants/createTypeList";
import ChevronDown from "../shared/icons/ChevronDown";
import ChevronUp from "../shared/icons/ChevronUp";

type CreateTypeListItemType = {
  icon: (props: any) => JSX.Element;
  name: CreateType;
  uiName: string;
  color: string;
};

const CreateTypeSelect = ({
  setValue,
  postType,
}: {
  setValue: any;
  postType: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState<CreateTypeListItemType>();

  useEffect(() => {
    const initType = createTypeList.filter(
      (createType) => createType.name === postType
    );
    setSelection(initType[0]);
  }, []);

  const renderSelection = () => {
    if (selection) {
      const { icon: Icon, color, uiName } = selection;
      return (
        <div className={`flex cursor-pointer items-center gap-x-2 ${color}`}>
          <Icon size={20} />
          {uiName}
        </div>
      );
    }
  };

  const onSelectClick = (createType: CreateTypeListItemType) => {
    setSelection(createType);
    setIsOpen(false);
    setValue("createType", createType.name);
  };

  return (
    <div>
      <label className="paragraph-3-medium text-white-300 mb-2 flex flex-col">
        Create Type
      </label>
      <button
        type="button"
        className="bg-black-700 text-white-300 paragraph-3-medium flex w-full items-center justify-between rounded p-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        {renderSelection()}
        {isOpen ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
      </button>
      {isOpen && (
        <div className="paragraph-3-medium bg-black-700 mt-0.5 flex flex-col gap-y-2 rounded p-2">
          {createTypeList.map((createType) => {
            const { icon: Icon, uiName, color } = createType;
            return (
              <ul
                className={`flex cursor-pointer gap-x-2 ${color}`}
                onClick={() =>
                  onSelectClick(createType as CreateTypeListItemType)
                }
              >
                <Icon size={20} />
                {uiName}
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CreateTypeSelect;
