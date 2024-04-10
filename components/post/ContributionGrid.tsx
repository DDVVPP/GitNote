"use client";

import ReactCalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const ContributionGrid = ({
  postDates,
}: {
  postDates: { date: string; count: number }[];
}) => {
  const weekdayLabels = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  return (
    <>
      <div className="flex gap-x-2">
        <div className="text-white-500 paragraph-4-regular mt-4 text-right">
          {weekdayLabels.map((day) => (
            <p className="-m-0.5 align-bottom">{day}</p>
          ))}
        </div>
        <ReactCalendarHeatmap
          showOutOfRangeDays
          startDate={new Date("2024-03-01")}
          endDate={new Date("2025-01-01")}
          values={postDates}
          classForValue={(value) => {
            if (value) {
              if (value.count === 1) return "color-scale-1";
              if (value.count >= 2 && value.count <= 3) return "color-scale-2";
              if (value.count >= 4 && value.count <= 7) return "color-scale-3";
              if (value.count >= 8) return "color-scale-4";
            }
            return "color-empty";
          }}
        />
      </div>
      <div className="text-white-300 paragraph-4-regular mt-3 flex items-center justify-end gap-x-2">
        <p>Less</p>
        <div className="flex items-center gap-x-1">
          <div className="bg-black-700 flex h-3 w-3"></div>
          <div className="flex h-3 w-3 bg-[#0E4429]"></div>
          <div className="flex h-3 w-3 bg-[#006D32]"></div>
          <div className="flex h-3 w-3 bg-[#26A641]"></div>
          <div className="flex h-3 w-3 bg-[#39D353]"></div>
        </div>
        <p>More</p>
      </div>
    </>
  );
};

export default ContributionGrid;
