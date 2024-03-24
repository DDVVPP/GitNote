"use client";

import React from "react";
import Link from "next/link";
import {
  CheckSquare,
  Image as LandscapeIcon,
  UserCheck,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { format as formatDate } from "date-fns";

import { User, Goals } from "@prisma/client";
import QuickLink from "../left-navbar/QuickLink";
import linkIcon from "@/public/linkIcon.svg";
import Button from "../shared/ui/Button";

const Profile = ({ user }: { user: User & { goals?: Goals[] } }) => {
  const {
    name,
    image,
    portfolio,
    goals,
    techStack,
    knowledgeLevel,
    availability,
    startDate,
    endDate,
  } = user;

  const start =
    startDate && formatDate(new Date(startDate), "MMMM dd, yyyy - p");
  const end = endDate && formatDate(new Date(endDate), "MMMM dd, yyyy - p");

  return (
    <>
      <header className="flex items-center gap-4">
        <div>
          {image ? (
            <Image src={image} alt="profileImage" width={120} height={120} />
          ) : (
            <div className="bg-black-700 p-7">
              <LandscapeIcon stroke="rgba(173, 179, 204, 1)" size={18} />
            </div>
          )}
        </div>

        <div className="space-between flex w-full justify-between">
          <div className="flex flex-col">
            <h1 className="display-2-bold text-white-100">{name ?? ""}</h1>
            <div className="paragraph-3-regular flex gap-2">
              {portfolio && (
                <QuickLink
                  icon={linkIcon}
                  href={portfolio}
                  name="JSM Courses"
                />
              )}
              <p className="text-white-300">Zagreb, Croatia</p>
              <p className="text-white-300">Joined some date</p>
            </div>
          </div>

          <div>
            <Link href="/profile/edit">
              <Button icon="plus" color="gray">
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <section>
        <div className="my-20 flex flex-col">
          <h3 className="paragraph-1-bold">Learning Goals</h3>
          {goals ? (
            goals.map((goal) => {
              console.log(goals);
              return (
                <div key={goal.id} className="my-1 flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={goal.isComplete}
                    className="border-white-500 bg-white-500 h-3 w-3 appearance-none rounded-sm border text-green-400"
                  />
                  <p className="text-white-300 paragraph-2-regular">
                    {goal.name}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-white-300 paragraph-2-regular">No goals added</p>
          )}
        </div>
        <div className="my-20 flex flex-col">
          <h3 className="paragraph-1-bold">Technology Stack</h3>
          <div className="flex gap-2">
            {techStack ? (
              techStack.map((tech) => {
                return (
                  <p className="text-white-300 paragraph-2-regular">{tech}</p>
                );
              })
            ) : (
              <p className="text-white-300 paragraph-2-regular">
                No tech added
              </p>
            )}
          </div>
        </div>
        <div className="my-20 flex flex-col">
          <h3 className="paragraph-1-bold">Knowledge Level</h3>
          {knowledgeLevel ? (
            knowledgeLevel.map((level) => {
              return (
                <div key={level} className="my-1 flex items-center gap-2">
                  {" "}
                  <CheckSquare className="text-primary-500" size={16} />
                  <p className="text-white-300 paragraph-2-regular">{level}</p>
                </div>
              );
            })
          ) : (
            <p className="text-white-300 paragraph-2-regular">
              No knowledge levels added
            </p>
          )}
        </div>
        <div className="my-20 flex flex-col">
          <h3 className="paragraph-1-bold">Schedule & Availability</h3>
          {availability ? (
            <>
              <div className="my-1 flex items-center gap-2">
                <UserCheck className="text-green-400" size={16} />
                <p className="text-white-300 paragraph-2-regular">
                  Available for a new project
                </p>
              </div>
              <div className="my-1 flex items-center gap-2">
                <Clock className="text-green-400" size={16} />
                <p className="text-white-300 paragraph-2-regular">
                  Available from {start} to {end}
                </p>
              </div>
            </>
          ) : (
            <p className="text-white-300 paragraph-2-regular">
              Availability not added
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Profile;
