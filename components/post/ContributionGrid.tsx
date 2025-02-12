"use client";

import { PostDate } from "@/types";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const ContributionGrid = ({ postDates }: { postDates: PostDate[] }) => {
  return (
    <>
      <div className="flex">
        <ReactCalendarHeatmap
          showOutOfRangeDays
          showWeekdayLabels
          startDate={new Date("2025-01-01")}
          endDate={new Date("2026-01-01")}
          values={postDates}
          gutterSize={2}
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
      <div className="text-white-300 paragraph-4-regular flex items-center justify-end gap-x-2">
        <p>Less</p>
        <div className="flex items-center gap-x-1">
          <div className="bg-black-700 flex rounded-sm max-lg:size-2.5 max-sm:size-1.5 lg:size-3"></div>
          <div className="flex rounded-sm border-none bg-[#0E4429] max-lg:size-2.5  max-sm:size-1.5 lg:size-3"></div>
          <div className="flex rounded-sm bg-[#006D32] max-lg:size-2.5 max-sm:size-1.5 lg:size-3"></div>
          <div className="flex rounded-sm bg-[#26A641] max-lg:size-2.5 max-sm:size-1.5 lg:size-3"></div>
          <div className="flex rounded-sm bg-[#39D353] max-lg:size-2.5 max-sm:size-1.5 lg:size-3"></div>
        </div>
        <p>More</p>
      </div>
    </>
  );
};

export default ContributionGrid;
