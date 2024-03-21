'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

import { techStack } from '@/lib/constants/techStack';

const TechStack = ({
  register,
  watch,
  setValue,
}: {
  register: any;
  watch: any;
  setValue: any;
}) => {
  const [techSearchItems, setTechSearchItems] = useState('');
  const [techSearchResults, setTechSearchResult] = useState<string[]>();
  const techStackState = watch('techStack');
  console.log('techSearchItems', techSearchItems);
  console.log('techStackState', techStackState);

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
    setValue('techStack', techStackStateClone);
  };

  const handleDelete = (item: string) => {
    const techStackStateClone = techStackState;
    const filteredTechStack = techStackStateClone.filter(
      (techName: string) => !techName.includes(item)
    );
    setValue('techStack', filteredTechStack);
  };

  return (
    <section>
      <div className=" text-white-300 mb-5 flex flex-col">
        <label className="paragraph-3-medium mb-2">Tech Stack</label>
        <input
          className="paragraph-3-regular p-3 bg-black-700 border-none rounded-md"
          type="text"
          placeholder="Enter tech"
          {...register('techStack')}
          onChange={(e) => setTechSearchItems(e.target.value)}
          value={techSearchItems}
        />

        {techStackState.length > 0 && (
          <div className="flex bg-black-700 space-x-2 mt-0.5 mb-4 rounded-md p-4">
            {techStackState.map((techName: string) => {
              return (
                <div
                  className="flex bg-black-600 items-center rounded-md p-2 space-x-6"
                  key={techName}
                >
                  {techName}{' '}
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
      {techSearchResults && (
        <div className="bg-black-700 flex flex-col -mt-6 p-2 rounded-md mb-5 text-white-300 inline">
          {techSearchResults?.map((techSearchResult) => {
            if (techStackState.includes(techSearchResult)) return null;
            return (
              <span
                className="paragraph-3-regular cursor-pointer bg-black-600 rounded-md p-2 m-1"
                onClick={() => handleClick(techSearchResult)}
              >
                {techSearchResult}
              </span>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default TechStack;
