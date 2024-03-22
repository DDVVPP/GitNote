import React from 'react';
import StatusComplete from '../shared/icons/StatusComplete';
import StatusCurrent from '../shared/icons/StatusCurrent';
import StatusIncomplete from '../shared/icons/StatusIncomplete';

const RenderStepPosition = ({ step }: { step: number }) => {
  const totalSteps = 4;

  const renderStep = (index: number) => {
    const isCurrentStep = index === step;
    const isPreviousStep = index < step;

    const statusComponent = isCurrentStep ? (
      <StatusCurrent />
    ) : isPreviousStep ? (
      <StatusComplete />
    ) : (
      <StatusIncomplete />
    );

    const borderColor =
      isPreviousStep || isCurrentStep
        ? 'border-primary-500'
        : 'border-black-600';

    return (
      <React.Fragment key={index}>
        {statusComponent}
        {index < totalSteps && (
          <div className={`border ${borderColor} w-28`}></div>
        )}
      </React.Fragment>
    );
  };

  return (
    <section className="flex items-center w-full">
      {[...Array(totalSteps)].map((_, index) => renderStep(index + 1))}
    </section>
  );
};

const OnboardingVisualStepper = ({ step }: { step: number }) => {
  return (
    <div className="flex justify-center mb-5">
      {<RenderStepPosition step={step} />}
    </div>
  );
};

export default OnboardingVisualStepper;
