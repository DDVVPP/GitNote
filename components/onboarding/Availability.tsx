'use client';

import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';

const Availability = ({ useFormHelpers }: { useFormHelpers: any }) => {
  const { register, control, watch } = useFormHelpers;
  const availabilityValue = watch('availability');

  return (
    <>
      <h1 className="display-2-bold mb-4">Schedule & Availability</h1>

      <section className="space-x-2 pb-2">
        <input
          type="checkbox"
          className="appearance-none border border-white-500 h-3 w-3 bg-black-700 rounded-sm cursor-pointer text-green-400"
          {...register('availability')}
        />
        <label className="paragraph-3-regular  text-white-300">
          Are you available for a new project?
        </label>
      </section>

      {availabilityValue && (
        <section className="flex mt-2 justify-between display-none mb-4">
          <div className="flex flex-col space-y-2">
            <span className="paragraph-3-regular  text-white-300">
              Start Date & Time
            </span>
            <Controller
              control={control}
              name="startDate"
              render={({ field }) => (
                <ReactDatePicker
                  className="bg-black-700 text-white-300 border-none paragraph-3-regular px-4 py-4"
                  onChange={(e) => field.onChange(e)}
                  selected={field.value}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                  dateFormat="MM/dd/yyyy h:mm aa"
                />
              )}
            />
            <span className="paragraph-4-regular text-white-500">
              The time is in your local timezone
            </span>
          </div>

          <div className="flex flex-col space-y-2">
            <span className="paragraph-3-regular  text-white-300">
              End Date & Time
            </span>
            <Controller
              control={control}
              name="endDate"
              render={({ field }) => (
                <ReactDatePicker
                  className="bg-black-700 text-white-300 border-none paragraph-3-regular px-4 py-4 cursor-pointer"
                  onChange={(e) => field.onChange(e)}
                  selected={field.value}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                  dateFormat="MM/dd/yyyy h:mm aa"
                />
              )}
            />
            <span className="paragraph-4-regular text-white-500">
              The time is in your local timezone
            </span>
          </div>
        </section>
      )}
    </>
  );
};

export default Availability;
