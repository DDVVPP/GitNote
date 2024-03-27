import React, { useState } from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import Button from "../shared/ui/Button";
import SocialMediaModal from "./SocialMediaModal";
import { User, Social } from "@prisma/client";

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
      <h3 className="paragraph-2-bold border-white-500 border-b pb-4">
        Social Media Links
      </h3>

      <SocialMediaLinks user={user} />

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
