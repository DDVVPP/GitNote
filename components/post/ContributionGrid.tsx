"use client";

import { useEffect } from "react";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-calendar-heatmap/dist/styles.css";
import "react-tooltip/dist/react-tooltip.css";
import { format as formatDate } from "date-fns";
import { PostDate } from "@/types";

const ContributionGrid = ({ postDates }: { postDates: PostDate[] }) => {
  useEffect(() => {
    const heatmap = document.querySelector(".react-calendar-heatmap");
    if (heatmap) {
      heatmap.setAttribute("viewBox", "0 0 664 105");
    }
  }, []);

  const getTooltipDataAttrs = (value: PostDate) => {
    if (!value || !value.date)
      return {
        "data-tooltip-id": "heatmap-tooltip",
        "data-tooltip-content": `No posts on this date`,
        "data-tooltip-place": "top",
      };

    if (value.date && value.count) {
      const formattedDate = formatDate(new Date(value.date), "MMMM do");
      return {
        "data-tooltip-id": "heatmap-tooltip",
        "data-tooltip-content": `${value.count} ${
          value.count > 1 ? "posts" : "post"
        } on ${formattedDate}`,
        "data-tooltip-place": "top",
      };
    }
  };

  return (
    <div className="border-black-700 flex rounded-md border p-6">
      <div className="flex w-full flex-col overflow-x-auto overflow-y-hidden">
        <div className="min-w-[700px]">
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
                if (value.count >= 2 && value.count <= 3)
                  return "color-scale-2";
                if (value.count >= 4 && value.count <= 7)
                  return "color-scale-3";
                if (value.count >= 8) return "color-scale-4";
              }
              return "color-empty";
            }}
            tooltipDataAttrs={getTooltipDataAttrs}
          />

          <ReactTooltip id="heatmap-tooltip" />

          <div className="text-white-300 paragraph-4-regular flex h-fit items-center justify-end gap-x-1">
            <p className="">Less</p>
            <div className="bg-black-700 less-more-rectangles"></div>
            <div className="less-more-rectangles bg-[#0E4429]"></div>
            <div className="less-more-rectangles bg-[#006D32]"></div>
            <div className="less-more-rectangles bg-[#26A641]"></div>
            <div className="less-more-rectangles bg-[#39D353]"></div>
            <p className="">More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionGrid;
