'use client';

import Button from '../shared/ui/Button';
import Input from '../shared/ui/Input';
import { CheckSquare, X } from 'lucide-react';

const KnowledgeLevel = ({
  register,
  fieldsArray,
  append,
  remove,
}: {
  register: any;
  fieldsArray: any;
  append: any;
  remove: any;
}) => {
  return (
    <>
      <h1 className="display-2-bold pb-5">Add your knowledge level</h1>
      <section>
        <div className="mb-3">
          <p className="paragraph-3-regular text-white-300 mb-1">
            Knowledge Level
          </p>

          {fieldsArray.map((field: { name: string }, index: number) => {
            return (
              <div className="bg-black-700 py-1 px-3 mb-2 flex  justify-between items-center">
                <div className="space-x-2 flex items-center">
                  <CheckSquare className="text-primary-500" size={16} />
                  <label className={'paragraph-3-regular  text-white-100'}>
                    {field.name}
                  </label>
                </div>
                <input
                  className="paragraph-3-regular text-white-100 placeholder:paragraph-3-regular placeholder:text-white-300 bg-black-700 w-full rounded-md focus:outline-none border-none pl-0 ml-2"
                  placeholder="Enter a knowledge level"
                  {...register(`knowledgeLevel.${index}`)}
                />
                <button>
                  <X
                    className="text-white-500"
                    size={16}
                    onClick={() => remove(index)}
                  />
                </button>
              </div>
            );
          })}
        </div>
        <div className="mb-4">
          <Button color="darkGray" icon="plus" onClick={() => append('')}>
            Add knowledge checkmark
          </Button>
        </div>
      </section>
      <section>
        <Input
          label="Tech Stack"
          id="techStack"
          placeholder="Enter tech"
          {...register('techStack')}
        />
      </section>
    </>
  );
};

export default KnowledgeLevel;
