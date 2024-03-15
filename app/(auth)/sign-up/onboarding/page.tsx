import React from 'react';

const Onboarding = ({ searchParams }: { searchParams: { step: string } }) => {
  const startingStep = searchParams.step ?? 0;
  return <section>Onboarding {startingStep}</section>;
  //send searchparam value to form and form starts at step
};

export default Onboarding;
