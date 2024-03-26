"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { techStackList } from "@/lib/constants/techStackList";
import { TechStackType } from "@/types";

const TechStack = ({ watch, setValue }: { watch: any; setValue: any }) => {
  const [techSearchItems, setTechSearchItems] = useState("");
  const [techSearchResults, setTechSearchResult] = useState<TechStackType[]>();
  const techStackState = watch("techStack");
  const [techStackStateUI, setTechStackStateUI] = useState<TechStackType[]>();

  //return techStack items ([{icon:..., name:..., uiName:...}, {icon:..., name:..., uiName:...}]) that match with techStackState items (['', '']) to have access to uiName and icon props.
  useEffect(() => {
    const matchedItemsForUI = () => {
      const techStackStateClone = techStackState ?? [];

      const matchedTech = techStackList.map((item) => ({
        ...item,
        is: techStackStateClone.includes(item.name),
      }));
      const newTechStackState = matchedTech.filter((item) => item.is);
      setTechStackStateUI(newTechStackState);
    };
    matchedItemsForUI();
  }, []);

  //compare techSearchItems with techStack and return matched items
  useEffect(() => {
    if (techSearchItems.length < 1) {
      setTechSearchResult([]);
      return;
    }
    const lowerCaseTechSearchItems = techSearchItems.toLowerCase();
    const techSearchMatchedItems = techStackList.filter((techStackItem) => {
      return techStackItem.name.includes(lowerCaseTechSearchItems);
    });
    setTechSearchResult(techSearchMatchedItems);
  }, [techSearchItems, techStackStateUI]);

  const handleClick = (tech: TechStackType) => {
    //add to techStackStateUI
    techStackStateUI?.push(tech);
    //remove added item from techSearchResults
    const filteredSearchResults = techSearchResults?.filter(
      (item) => !item.name.includes(tech.name)
    );
    setTechSearchResult(filteredSearchResults);
    //update values to submit - array of strings instead of array of objects
    const techStackNames = techStackStateUI?.map((item) => item.name);
    setValue("techStack", techStackNames);
  };

  const handleDelete = (tech: TechStackType) => {
    //remove from techStackStateUI
    const filteredTechStack = techStackStateUI?.filter(
      (item) => !item.name.includes(tech.name)
    );
    setTechStackStateUI(filteredTechStack);
    //update values to submit - array of strings instead of array of objects
    const techStackNames = filteredTechStack?.map((item) => item.name);
    setValue("techStack", techStackNames);
  };

  return (
    <>
      <div className=" text-white-300 mb-5 mt-5 flex flex-col">
        <label className="paragraph-3-medium mb-2">Tech Stack</label>
        <input
          className="paragraph-3-regular bg-black-700 rounded-md border-none p-3"
          type="text"
          placeholder="Enter tech"
          onChange={(e) => setTechSearchItems(e.target.value)}
          value={techSearchItems}
        />

        {techStackStateUI && techStackStateUI.length > 0 && (
          <div className="bg-black-700 mb-4 mt-0.5 flex flex-wrap gap-2 rounded-md p-4">
            {techStackStateUI.map((tech) => {
              const { icon: TechStackIcon, name, uiName } = tech;
              return (
                <div
                  className="bg-black-600 flex items-center gap-2 rounded-md p-1"
                  key={name}
                >
                  <TechStackIcon size={24} />
                  <p className="paragraph-3-regular">{uiName} </p>
                  <button>
                    <X
                      className="text-white-500"
                      size={16}
                      onClick={() => handleDelete(tech)}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {techSearchResults && techSearchResults.length > 0 && (
        <div className="bg-black-700 text-white-300 -mt-6 mb-5 flex flex-col rounded-md p-2">
          {techSearchResults?.map((techSearchResult) => {
            if (techStackState.includes(techSearchResult.name)) return null;
            const { icon: ItemIcon, uiName } = techSearchResult;
            return (
              <div
                className="paragraph-3-regular bg-black-600 m-1 flex cursor-pointer items-center gap-2 rounded-md p-1"
                onClick={() => handleClick(techSearchResult)}
              >
                {<ItemIcon size={24} />}
                <p>{uiName}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default TechStack;
