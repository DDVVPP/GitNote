"use client";

import { PostDate } from "@/types";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const ContributionGrid = ({ postDates }: { postDates: PostDate[] }) => {
  const getTooltipDataAttrs = (value: { date: any; count: any }) => {
    if (!value || !value.date) return null;
    console.log("date", value.date);
    return {
      "data-tip": ` has count: ${value.count}`,
    };
  };

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
          tooltipDataAttrs={getTooltipDataAttrs}
        />
      </div>
      {/* <div className=" flex items-center justify-end gap-x-2"> */}
      <div className="text-white-300 paragraph-4-regular flex h-fit items-center justify-end gap-x-1">
        <p className="">Less</p>
        <div className="bg-black-700 less-more-rectangles"></div>
        <div className="less-more-rectangles bg-[#0E4429]"></div>
        <div className="less-more-rectangles bg-[#006D32]"></div>
        <div className="less-more-rectangles bg-[#26A641]"></div>
        <div className="less-more-rectangles bg-[#39D353]"></div>
        <p className="">More</p>
      </div>
      {/* </div> */}
    </>
  );
};

export default ContributionGrid;
