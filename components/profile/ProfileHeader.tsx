import Image from "next/image";
import Link from "next/link";
import {
  Image as LandscapeIcon,
  Calendar,
  MapPin,
  Link as LinkIcon,
} from "lucide-react";

import { ProfileHeaderItems } from "@/types";
import Button from "../shared/ui/Button";

const ProfileHeader = ({
  headerItems,
}: {
  headerItems: ProfileHeaderItems;
}) => {
  const { image, blurImage, name, portfolio, location, created } = headerItems;
  return (
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
  );
};

export default ProfileHeader;
