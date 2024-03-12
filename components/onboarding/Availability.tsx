'use client';

import { Dispatch, SetStateAction } from 'react';
import Button from '../shared/ui/Button';

type Props = {
  setStep: Dispatch<SetStateAction<number>>;
};

const Availability = ({ setStep }: Props) => {
  return (
    <div className="space-y-4">
      <h1>Schedule & Availability</h1>
      <Button color="blue" onClick={() => setStep(5)}>
        Submit
      </Button>
    </div>
  );
};

export default Availability;
