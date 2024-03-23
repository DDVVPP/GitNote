import React from "react";
import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";
import Button from "../shared/ui/Button";

const SidebarSocialMedia = () => {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/profile/edit/update-socials">
        <Button icon="plus" color="gray">
          Add a new link
        </Button>
      </Link>

      <h3 className="paragraph-2-bold border-white-500 border-b pb-4">
        Social Media Links
      </h3>
      <SocialMediaLinks />
    </div>
  );
};

export default SidebarSocialMedia;
