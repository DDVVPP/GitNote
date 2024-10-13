"use client";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";
import { Controller } from "react-hook-form";

const Availability = ({
  useFormHelpers,
  isEditProfile = false,
}: {
  useFormHelpers: any;
  isEditProfile?: boolean;
}) => {
  const { register, control, watch } = useFormHelpers;
  const availabilityValue = watch("availability");
  const textColor = availabilityValue ? "text-white-300" : "text-white-500";

  return (
    <div>
      {isEditProfile ? (
        <h3 className="paragraph-3-medium mb-5 text-white-500">
          SCHEDULE & AVAILABILITY
        </h3>
      ) : (
        <h1 className="display-2-bold mb-5">Schedule & Availability</h1>
      )}

      <section className="space-x-2 pb-2">
        <input
          type="checkbox"
          className="size-3 cursor-pointer appearance-none rounded-sm border border-white-500 bg-black-700 text-green-400"
          {...register("availability")}
        />
        <label className="paragraph-3-regular  text-white-300">
          Are you available for a new project?
        </label>
      </section>

      {
        <section className="display-none mb-4 mt-2 flex  w-full flex-wrap justify-between gap-4">
          <div className="mb-2 flex min-w-fit flex-1 flex-col space-y-2 ">
            <span className={`paragraph-3-regular  ${textColor}`}>
              Start Date & Time
            </span>
            <Controller
              control={control}
              name="startDate"
              render={({ field }) => (
                <ReactDatePicker
                  className={`${textColor} paragraph-3-regular h-11 w-full border-none bg-transparent !px-0`}
                  onChange={(e) => field.onChange(e)}
                  selected={field.value}
                  showTimeSelect
                  timeFormat="h:mm aa"
                  timeIntervals={15}
                  timeCaption="time"
                  dateFormat="MM/dd/yyyy h:mm aa"
                  disabled={!availabilityValue}
                  showIcon
                  icon={
                    <Calendar className="!relative stroke-white-500 !pl-4" />
                  }
                />
              )}
            />
            <span className="paragraph-4-regular text-white-500">
              The time is in your local timezone
            </span>
          </div>

          <div className="flex min-w-fit flex-1 flex-col space-y-2">
            <span className={`paragraph-3-regular ${textColor}`}>
              End Date & Time
            </span>
            <Controller
              control={control}
              name="endDate"
              render={({ field }) => (
                <ReactDatePicker
                  className={`${textColor} paragraph-3-regular h-11 w-full border-none bg-transparent !px-0`}
                  onChange={(e) => field.onChange(e)}
                  selected={field.value}
                  showTimeSelect
                  timeFormat="h:mm aa"
                  timeIntervals={15}
                  timeCaption="time"
                  dateFormat="MM/dd/yyyy h:mm aa"
                  disabled={!availabilityValue}
                  showIcon
                  icon={
                    <Calendar className="!relative stroke-white-500 !pl-4" />
                  }
                />
              )}
            />
            <span className="paragraph-4-regular text-white-500">
              The time is in your local timezone
            </span>
          </div>
        </section>
      }
    </div>
  );
};

export default Availability;
