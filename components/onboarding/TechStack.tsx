"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { techStack } from "@/lib/constants/techStack";

const TechStack = ({
  register,
  watch,
  setValue,
}: {
  register: any;
  watch: any;
  setValue: any;
}) => {
  const [techSearchItems, setTechSearchItems] = useState("");
  const [techSearchResults, setTechSearchResult] = useState<string[]>();
  const techStackState = watch("techStack");

  useEffect(() => {
    if (techSearchItems.length < 1) {
      setTechSearchResult([]);
      return;
    }
    const lowerCaseTechSearchItems = techSearchItems.toLowerCase();
    const techSearchMatchedItems = techStack.filter((techStackItem) =>
      techStackItem.includes(lowerCaseTechSearchItems)
    );
    setTechSearchResult(techSearchMatchedItems);
  }, [techSearchItems]);

  const handleClick = (item: string) => {
    const techStackStateClone = techStackState ?? [];
    Array.isArray(techStackStateClone) && techStackStateClone.push(item);
    setValue("techStack", techStackStateClone);
  };

  const handleDelete = (item: string) => {
    const techStackStateClone = techStackState;
    const filteredTechStack = techStackStateClone.filter(
      (techName: string) => !techName.includes(item)
    );
    setValue("techStack", filteredTechStack);
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

        {techStackState.length > 0 && (
          <div className="bg-black-700 mb-4 mt-0.5 flex space-x-2 rounded-md p-4">
            {techStackState.map((techName: string) => {
              return (
                <div
                  className="bg-black-600 flex items-center space-x-6 rounded-md p-2"
                  key={techName}
                >
                  {techName}{" "}
                  <button>
                    <X
                      className="text-white-500"
                      size={16}
                      onClick={() => handleDelete(techName)}
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
            if (techStackState.includes(techSearchResult)) return null;
            return (
              <span
                className="paragraph-3-regular bg-black-600 m-1 cursor-pointer rounded-md p-2"
                onClick={() => handleClick(techSearchResult)}
              >
                {techSearchResult}
              </span>
            );
          })}
        </div>
      )}
    </>
  );
};

export default TechStack;
