import React, { useState } from "react";
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
    <div className="flex flex-col gap-4">
      <Button icon="plus" color="gray" onClick={() => setOpen(true)}>
        Update social link
      </Button>
      <h3 className="paragraph-2-bold border-white-500 border-b pb-4 pt-4">
        Social Media Links
      </h3>

      <div className="flex gap-2">
        {user.socialMedia ? (
          user.socialMedia.map((social) => {
            const filtered = socialMediaIconList.filter(
              (icon) => social.type === icon.type
            );
            const { icon: Icon } = filtered[0];

            return (
              <div key={social.id} className="flex items-center justify-center">
                <Icon size={30} />
                <a
                  target="_blank"
                  href={social.link}
                  className="text-white-300 paragraph-2-regular"
                >
                  @{social.username}
                </a>
              </div>
            );
          })
        ) : (
          <p className="text-white-300 paragraph-2-regular">
            Oops! No socials!
          </p>
        )}
      </div>

      {open && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 backdrop-blur transition-opacity">
            <SocialMediaModal user={user} onClose={() => setOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarSocialMedia;
