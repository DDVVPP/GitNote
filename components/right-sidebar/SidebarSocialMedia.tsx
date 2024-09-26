import React, { useState } from "react";
import { createPortal } from "react-dom";

import Button from "../shared/ui/Button";
import SocialMediaModal from "./SocialMediaModal";
import { User, Social } from "@prisma/client";
import { socialMediaIconList } from "@/lib/constants/socialMediaList";

const SidebarSocialMedia = ({
  user,
}: {
  user: User & { socialMedia?: Social[] };
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 px-2">
      <Button
        type="button"
        icon="plus"
        color="gray"
        onClick={() => setOpen(true)}
      >
        Update social link
      </Button>
      <h3 className="paragraph-2-bold border-white-500 border-b pb-4 pt-4">
        Social Media Links
      </h3>

      <div className="mr-1 flex flex-col">
        {user.socialMedia ? (
          user.socialMedia.map((social) => {
            const filtered = socialMediaIconList.filter(
              (icon) => social.type === icon.type
            );
            const { icon: Icon } = filtered[0];

            return (
              social.username && (
                <a
                  key={social.id}
                  target="_blank"
                  href={social.link ?? "No link found"}
                  className="group flex flex-wrap items-center justify-start "
                >
                  <Icon
                    size={30}
                    className="group-hover:fill-white-300 group-hover:duration-300"
                  />
                  <p className="text-white-300 group-hover:text-white-100 paragraph-2-regular  group-hover:duration-300">
                    @{social.username}
                  </p>
                </a>
              )
            );
          })
        ) : (
          <p className="text-white-300 paragraph-2-regular">
            Oops! No socials!
          </p>
        )}
      </div>

      {open &&
        createPortal(
          <div
            aria-labelledby="social-media-modal"
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-75 backdrop-blur transition-opacity"
          >
            <SocialMediaModal user={user} onClose={() => setOpen(false)} />
          </div>,
          document.body
        )}
    </div>
  );
};

export default SidebarSocialMedia;
