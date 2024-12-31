import React, { useState } from "react";
import { createPortal } from "react-dom";

import Button from "../shared/ui/Button";
import SocialMediaModal from "./SocialMediaModal";
import { User, Social } from "@prisma/client";
import SocialMediaLinks from "./SocialMediaLinks";

const SidebarSocialMedia = ({
  user,
}: {
  user: User & { socialMedia?: Social[] };
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Button
        type="button"
        icon="plus"
        color="gray"
        onClick={() => setOpen(true)}
      >
        Update social link
      </Button>
      <h3 className="paragraph-2-bold border-white-500 border-b py-4">
        Social Media Links
      </h3>

      <SocialMediaLinks socialMedia={user.socialMedia} />

      {open &&
        createPortal(
          <div
            aria-labelledby="social-media-modal"
            role="dialog"
            aria-modal="true"
            className="bg-opacity/75 fixed inset-0 z-50 flex items-center justify-center backdrop-blur transition-opacity"
          >
            <SocialMediaModal user={user} onClose={() => setOpen(false)} />
          </div>,
          document.body
        )}
    </div>
  );
};

export default SidebarSocialMedia;
