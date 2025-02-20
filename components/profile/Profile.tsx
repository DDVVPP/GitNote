"use client";

import React, { useEffect, useState } from "react";

import { CheckSquare, UserCheck, Clock } from "lucide-react";
import { format as formatDate } from "date-fns";

import { User, Goals } from "@prisma/client";
import { techStackList } from "@/lib/constants/techStackList";
import { PostDate, ProfileHeaderItems, TechStackType } from "@/types";
import MobileProfileHeader from "./MobileProfileHeader";
import ProfileHeader from "./ProfileHeader";
import ContributionGrid from "../post/ContributionGrid";

const Profile = ({
  user,
  postDates,
}: {
  user: User & { goals?: Goals[] };
  postDates: PostDate[];
}) => {
  const {
    name,
    image,
    blurImage,
    portfolio,
    goals,
    techStack: techStackFromUser,
    knowledgeLevel,
    availability,
    createdAt,
    startDate,
    endDate,
    location,
  } = user;

  const [techStackStateUI, setTechStackStateUI] = useState<TechStackType[]>();

  const created = createdAt && formatDate(new Date(createdAt), "MMMM dd, yyyy");
  const start =
    startDate && formatDate(new Date(startDate), "MMMM dd, yyyy - p");
  const end = endDate && formatDate(new Date(endDate), "MMMM dd, yyyy - p");
  const headerItems: ProfileHeaderItems = {
    image,
    blurImage,
    name,
    portfolio,
    location,
    created,
  };

  useEffect(() => {
    const matchedItemsForUI = () => {
      const techStackStateClone = techStackFromUser ?? [];

      const matchedTech = techStackList.map((item) => ({
        ...item,
        is: techStackStateClone.includes(item.name),
      }));
      const newTechStackState = matchedTech.filter((item) => item.is);
      setTechStackStateUI(newTechStackState);
    };
    matchedItemsForUI();
  }, [techStackFromUser]);

  return (
    <>
      <header className="max-md:hidden lg:block">
        <ProfileHeader headerItems={headerItems} />
      </header>
      <header className="max-md:block md:hidden">
        <MobileProfileHeader headerItems={headerItems} />
      </header>

      <section>
        <div className="mt-20 flex flex-col gap-y-2">
          <h3 className="paragraph-1-bold">Contribution Grid</h3>
          <ContributionGrid postDates={postDates as PostDate[]} />
          <hr className="dark:bg-black-700 my-8 h-px w-full border-0" />
        </div>

        <div className="flex flex-col gap-y-2">
          <h3 className="paragraph-1-bold">Learning Goals</h3>
          {goals && goals?.length > 0 ? (
            goals.map((goal) => {
              return (
                <div key={goal.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    disabled
                    checked={goal.isComplete}
                    className="border-white-500 bg-white-500 text-green-lighter size-3 appearance-none rounded-sm border"
                  />
                  <p className="paragraph-2-regular text-white-300">
                    {goal.name}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="paragraph-2-regular text-white-300">No goals added</p>
          )}
          <hr className="dark:bg-black-700 my-8 mt-20 h-px w-full border-0" />
        </div>

        <div className="flex flex-col gap-y-2">
          <h3 className="paragraph-1-bold">Technology Stack</h3>
          <div className="flex gap-x-3">
            {techStackStateUI && techStackStateUI.length > 0 ? (
              techStackStateUI.map((tech) => {
                const { icon: TechStackIcon, name, link } = tech;
                return (
                  <a
                    href={link}
                    target="_blank"
                    key={name}
                    className="mt-2 hover:scale-125 hover:duration-300"
                  >
                    <TechStackIcon size={28} />
                  </a>
                );
              })
            ) : (
              <p className="paragraph-2-regular text-white-300">
                No tech added
              </p>
            )}
          </div>
          <hr className="dark:bg-black-700 my-8 mt-20 h-px w-full border-0" />
        </div>

        <div className="flex flex-col gap-y-2">
          <h3 className="paragraph-1-bold">Knowledge Level</h3>
          {knowledgeLevel && knowledgeLevel.length > 0 ? (
            knowledgeLevel.map((level) => {
              return (
                <div key={level} className="flex items-center gap-2">
                  {" "}
                  <CheckSquare className="text-primary-500" size={16} />
                  <p className="paragraph-2-regular text-white-300">{level}</p>
                </div>
              );
            })
          ) : (
            <p className="paragraph-2-regular text-white-300">
              No knowledge levels added
            </p>
          )}
          <hr className="dark:bg-black-700 my-8 mt-20 h-px w-full border-0" />
        </div>

        <div className="mb-20 flex flex-col gap-y-2">
          <h3 className="paragraph-1-bold">Schedule & Availability</h3>
          {availability ? (
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center gap-2">
                <UserCheck className="text-green-lighter shrink-0" size={16} />
                <p className="paragraph-2-regular text-white-300">
                  Available for a new project
                </p>
              </div>
              <div className="flex items-center gap-2 max-md:items-start">
                <Clock className="text-green-lighter mt-1 shrink-0" size={16} />
                <p className="paragraph-2-regular text-white-300 ">
                  Available from {start ?? "(oops! Missing start date)"} to{" "}
                  {end ?? "(oops! Missing end date)"}
                </p>
              </div>
            </div>
          ) : (
            <p className="paragraph-2-regular text-white-300">
              Availability not added
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Profile;
