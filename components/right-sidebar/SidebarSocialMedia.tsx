import React from "react";
import { createPortal } from "react-dom";

import Button from "../shared/ui/Button";
import SocialMediaModal from "./SocialMediaModal";
import { User, Social } from "@prisma/client";
import SocialMediaLinks from "./SocialMediaLinks";
import { useSocialMediaModalStateContext } from "@/lib/context/SocialMediaModalState";

const SidebarSocialMedia = ({
  user,
}: {
  user: User & { socialMedia?: Social[] };
}) => {
  const { isOpen, setIsOpen } = useSocialMediaModalStateContext();

  return (
    <div className="flex flex-col gap-4">
      <Button
        type="button"
        icon="plus"
        color="gray"
        onClick={() => setIsOpen(true)}
      >
        Update social link
      </Button>
      <h3 className="paragraph-2-bold border-white-500 border-b py-4">
        Social Media Links
      </h3>

      <SocialMediaLinks socialMedia={user.socialMedia} />

      {isOpen &&
        createPortal(
          <div
            aria-labelledby="social-media-modal"
            role="dialog"
            aria-modal="true"
            className="bg-opacity/75 fixed inset-0 z-50 flex items-center justify-center backdrop-blur transition-opacity"
          >
            <SocialMediaModal user={user} />
          </div>,
          document.body
        )}
    </div>
  );
};

export default SidebarSocialMedia;
