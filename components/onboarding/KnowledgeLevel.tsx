'use client';

import { useState } from 'react';
import Button from '../shared/ui/Button';
import Knowledge from '../shared/Knowledge';
import KnowledgeField from '../shared/KnowledgeField';
import Input from '../shared/ui/Input';

const placeholderKnowledgeList = [
  "Follow Clerk's installation process",
  'Setup Clerk with Nextjs + Clerk webhook',
];

const KnowledgeLevel = () => {
  const [knowledgeLevel, setKnowledgeLevel] = useState('');
  const [knowledgeLevels, setKnowledgeLevels] = useState(
    placeholderKnowledgeList
  );
  const [techStack, setTechStack] = useState('');

  // useEffect(() => {
  //   if (data) {
  //     setKnowledgeLevels(data)
  //   }
  // }, [])

  const addLevel = () => {
    //add to db THEN
    if (knowledgeLevel.length > 0) {
      setKnowledgeLevels((knowledgeLevels) => [
        ...knowledgeLevels,
        knowledgeLevel,
      ]);
    }
  };

  const removeLevel = (label: string) => {
    console.log(label);
    //remove from db THEN
    setKnowledgeLevels((knowledgeLevels) =>
      knowledgeLevels.splice(knowledgeLevels.indexOf(label), 1)
    );
  };

  return (
    <>
      <h1 className="display-2-bold pb-5">Add your knowledge level</h1>
      <form>
        <div className="mb-3">
          <p className="paragraph-3-regular text-white-300 mb-1">
            Knowledge Level
          </p>
          {knowledgeLevels.length > 0 &&
            knowledgeLevels.map((goal) => (
              <Knowledge label={goal} removeLevel={removeLevel} />
            ))}
          <KnowledgeField
            placeholder="Enter a knowledge level"
            setKnowledgeLevel={setKnowledgeLevel}
          />
        </div>
        <Button color="darkGray" icon="plus" onClick={addLevel}>
          Add knowledge checkmark
        </Button>
      </form>
      <form>
        <Input
          label="Tech Stack"
          id="techStack"
          placeholder="Enter tech"
          value={techStack}
          onChange={(event) => setTechStack(event?.target.value)}
        />
      </form>
    </>
  );
};

export default KnowledgeLevel;
