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

const MobileProfileHeader = ({
  headerItems,
}: {
  headerItems: ProfileHeaderItems;
}) => {
  const { image, blurImage, name, portfolio, location, created } = headerItems;

  return (
    <div className="flex flex-col gap-4">
      <section className="flex flex-row justify-start gap-x-4">
        <div>
          {image ? (
            <div className="relative size-24">
              <Image
                src={image}
                blurDataURL={(blurImage as string) ?? ""}
                placeholder="blur"
                alt="profileImage"
                fill
                style={{ objectFit: "contain" }}
                className="bg-black-800"
              />
            </div>
          ) : (
            <div className="bg-black-700 p-7">
              <LandscapeIcon stroke="rgba(173, 179, 204, 1)" size={18} />
            </div>
          )}
        </div>

        <div className="flex flex-col justify-between">
          <h1 className="display-2-bold text-white-100">
            {name ?? "(oops! Missing name)"}
          </h1>

          <div className="flex flex-col gap-1">
            {portfolio && (
              <div className="group flex items-center gap-1.5">
                <LinkIcon
                  size={16}
                  className="text-black-600 group-hover:text-white-500 group-hover:duration-300"
                />
                <a
                  target="_blank"
                  href={portfolio}
                  className="text-primary-500 paragraph-3-regular group-hover:text-sky-300 group-hover:duration-300"
                >
                  {portfolio}
                </a>
              </div>
            )}

            {location && (
              <div className="flex items-center gap-1.5">
                <MapPin size={16} className="text-black-600" />
                <p className="text-white-30 paragraph-3-regular">{location}</p>
              </div>
            )}

            {created && (
              <div className=" flex items-center gap-1.5">
                <Calendar size={16} className="text-black-600" />
                <p className="text-white-300 paragraph-3-regular">
                  Joined {created}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Link href="/profile/edit" className="w-full">
        <Button icon="plus" color="darkGrayBlueText">
          Edit Profile
        </Button>
      </Link>
    </div>
  );
};

export default MobileProfileHeader;
