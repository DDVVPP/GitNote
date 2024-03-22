import StatusComplete from '../shared/icons/StatusComplete';
import StatusCurrent from '../shared/icons/StatusCurrent';
import StatusIncomplete from '../shared/icons/StatusIncomplete';

const OnboardingVisualStepper = ({ step }: { step: number }) => {
  const renderSteps = () => {
    const RepeatedPatternIncomplete = (number: number) =>
      Array(number).fill(
        <>
          <div className="border border-black-600 w-28"></div>
          <StatusIncomplete />
        </>
      );

    const RepeatedPatternComplete = (number: number) =>
      Array(number).fill(
        <>
          <StatusComplete />
          <div className="border border-primary-500 w-28"></div>
        </>
      );

    switch (step) {
      case 1:
        return (
          <section className="flex items-center">
            <StatusCurrent />
            <div className="border border-primary-500 w-28"></div>
            <StatusIncomplete />
            {RepeatedPatternIncomplete(2)}
          </section>
        );
      case 2:
        return (
          <section className="flex items-center">
            <StatusComplete />
            <div className="border border-primary-500 w-28"></div>
            <StatusCurrent />
            {RepeatedPatternIncomplete(2)}
          </section>
        );
      case 3:
        return (
          <section className="flex items-center">
            {RepeatedPatternComplete(2)}
            <StatusCurrent />
            <div className="border border-black-600 w-28"></div>
            <StatusIncomplete />
          </section>
        );
      case 4:
        return (
          <section className="flex items-center">
            {RepeatedPatternComplete(3)}
            <StatusCurrent />
          </section>
        );
    }
  };

  return <div className=" flex justify-center mb-5">{renderSteps()}</div>;
};

export default OnboardingVisualStepper;
