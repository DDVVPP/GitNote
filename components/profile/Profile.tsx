"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  CheckSquare,
  Image as LandscapeIcon,
  UserCheck,
  Clock,
  Calendar,
  MapPin,
  Link as LinkIcon,
} from "lucide-react";
import Image from "next/image";
import { format as formatDate } from "date-fns";

import { User, Goals } from "@prisma/client";
import Button from "../shared/ui/Button";
import { techStackList } from "@/lib/constants/techStackList";
import { TechStackType } from "@/types";

const Profile = ({ user }: { user: User & { goals?: Goals[] } }) => {
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
      <header className="flex items-center gap-4">
        <div>
          {image ? (
            <div className="relative size-24">
              <Image
                src={image}
                blurDataURL={(blurImage as string) ?? ""}
                placeholder="blur"
                alt="profileImage"
                fill
                objectFit="contain"
                className="bg-black-800"
              />
            </div>
          ) : (
            <div className="bg-black-700 p-7">
              <LandscapeIcon stroke="rgba(173, 179, 204, 1)" size={18} />
            </div>
          )}
        </div>

        <div className="space-between flex w-full justify-between">
          <div className="flex flex-col">
            <h1 className="display-2-bold text-white-100">
              {name ?? "(oops! Missing name)"}
            </h1>
            <div className="paragraph-3-regular group flex gap-4">
              {portfolio && (
                <div className="text-primary-500 group-hover:text-white-300 flex items-center gap-1 group-hover:duration-300">
                  <LinkIcon
                    size={16}
                    className="text-black-600 group-hover:text-white-500 group-hover:duration-300"
                  />
                  <a target="_blank" href={portfolio}>
                    {portfolio}
                  </a>
                </div>
              )}

              {location && (
                <div className="text-primary-500 flex items-center gap-1">
                  <MapPin size={16} className="text-black-600" />
                  <p className="text-white-300">{location}</p>
                </div>
              )}

              {created && (
                <div className="text-primary-500 flex items-center gap-1">
                  <Calendar size={16} className="text-black-600" />
                  <p className="text-white-300">Joined {created}</p>
                </div>
              )}
            </div>
          </div>

          <div>
            <Link href="/profile/edit">
              <Button icon="plus" color="darkGrayBlueText">
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <section>
        <div className="mt-20 flex flex-col">
          <h3 className="paragraph-1-bold">Learning Goals</h3>
          {goals && goals?.length > 0 ? (
            goals.map((goal) => {
              return (
                <div key={goal.id} className="my-1 flex items-center gap-2">
                  <input
                    type="checkbox"
                    disabled
                    checked={goal.isComplete}
                    className="border-white-500 bg-white-500 size-3 appearance-none rounded-sm border text-green-400"
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

        <div className="flex flex-col">
          <h3 className="paragraph-1-bold">Technology Stack</h3>
          <div className="flex gap-3">
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

        <div className=" flex flex-col">
          <h3 className="paragraph-1-bold">Knowledge Level</h3>
          {knowledgeLevel && knowledgeLevel.length > 0 ? (
            knowledgeLevel.map((level) => {
              return (
                <div key={level} className="my-1 flex items-center gap-2">
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

        <div className="mb-20 flex flex-col">
          <h3 className="paragraph-1-bold">Schedule & Availability</h3>
          {availability ? (
            <>
              <div className="my-1 flex items-center gap-2">
                <UserCheck className="text-green-400" size={16} />
                <p className="paragraph-2-regular text-white-300">
                  Available for a new project
                </p>
              </div>
              <div className="my-1 flex items-center gap-2">
                <Clock className="text-green-400" size={16} />
                <p className="paragraph-2-regular text-white-300">
                  Available from {start ?? "(oops! Missing start date)"} to{" "}
                  {end ?? "(oops! Missing end date)"}
                </p>
              </div>
            </>
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
