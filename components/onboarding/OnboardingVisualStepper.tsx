import React from "react";
import StatusComplete from "../shared/icons/StatusComplete";
import StatusCurrent from "../shared/icons/StatusCurrent";
import StatusIncomplete from "../shared/icons/StatusIncomplete";

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
        ? "dark:bg-primary-500"
        : "dark:bg-black-600";

    return (
      <React.Fragment key={index}>
        {statusComponent}
        {index < totalSteps && (
          <hr
            className={`max-xs-b:w-12 max-xs-a:w-8 h-px w-28 border-0 duration-500 ${borderColor}`}
          />
        )}
      </React.Fragment>
    );
  };

  return (
    <section className="flex items-center">
      {[...Array(totalSteps)].map((_, index) => renderStep(index + 1))}
    </section>
  );
};

const OnboardingVisualStepper = ({ step }: { step: number }) => {
  return (
    <div className="mb-5 flex justify-center">
      {<RenderStepPosition step={step} />}
    </div>
  );
};

export default OnboardingVisualStepper;
