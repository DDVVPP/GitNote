'use client';

import { Dispatch, SetStateAction } from 'react';
import Button from '../shared/ui/Button';

type Props = {
  setStep: Dispatch<SetStateAction<number>>;
};

const KnowledgeLevel = ({ setStep }: Props) => {
  return (
    <div className="space-y-4">
      <h1>Add your knowledge level</h1>
      <Button color="blue" onClick={() => setStep(4)}>
        Next
      </Button>
    </div>
  );
};

export default KnowledgeLevel;
