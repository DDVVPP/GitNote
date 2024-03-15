import React from 'react';

const Datepicker = ({ label }: { label: string }) => {
  return (
    <section className="flex flex-col space-y-2">
      <span className="paragraph-3-regular  text-white-300">{label}</span>
      <div className="bg-black-700 px-4 py-4 paragraph-3-regular text-white-300">
        Select date & time
      </div>
      <span className="paragraph-4-regular text-white-500">
        The time is in your local timezone
      </span>
    </section>
  );
};

export default Datepicker;
