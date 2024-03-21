import { fields } from '@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js';
import StatusComplete from '../icons/StatusComplete';
import StatusCurrent from '../icons/StatusCurrent';
import StatusIncomplete from '../icons/StatusIncomplete';

const OnboardingStepDots = ({ step }: { step: number }) => {
  const renderSteps = () => {
    console.log('step', step);
    switch (step) {
      case 1:
        return (
          <section className="flex items-center">
            <StatusCurrent />
            <div className="border border-primary-500 w-28"></div>
            <StatusIncomplete />
            <div className="border border-black-600 w-28"></div>
            <StatusIncomplete />
            <div className="border border-black-600 w-28"></div>
            <StatusIncomplete />
          </section>
        );
      case 2:
        return (
          <section className="flex items-center">
            <StatusComplete />
            <div className="border border-primary-500 w-28"></div>
            <StatusCurrent />
            <div className="border border-black-600 w-28"></div>
            <StatusIncomplete />
            <div className="border border-black-600 w-28"></div>
            <StatusIncomplete />
          </section>
        );
      case 3:
        return (
          <section className="flex items-center">
            <StatusComplete />
            <div className="border border-primary-500 w-28"></div>
            <StatusComplete />
            <div className="border border-primary-500 w-28"></div>
            <StatusCurrent />
            <div className="border border-black-600 w-28"></div>
            <StatusIncomplete />
          </section>
        );
      case 4:
        return (
          <section className="flex items-center">
            <StatusComplete />
            <div className="border border-primary-500 w-28"></div>
            <StatusComplete />
            <div className="border border-primary-500 w-28"></div>
            <StatusComplete />
            <div className="border border-primary-500 w-28"></div>
            <StatusCurrent />
          </section>
        );
    }
  };
  return <div className=" flex justify-center mb-5">{renderSteps()}</div>;
};

export default OnboardingStepDots;
