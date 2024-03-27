import Image from "next/image";
import { Social, User } from "@prisma/client";

const SocialMediaLinks = ({
  user,
}: {
  user: User & { socialMedia?: Social[] };
}) => {
  console.log("user.social", user.socialMedia);
  return user && user.socialMedia && user.socialMedia.length > 0 ? (
    <>
      <div className="flex gap-2">
        <div>placholder</div>
        <p className="text-white-300 paragraph-2-regular inline-block">
          @nikkyeva
        </p>
      </div>
      <div className="flex gap-2">
        <div>placholder</div>
        <p className="text-white-300 paragraph-2-regular inline-block">
          @nikkyeva
        </p>
      </div>
      <div className="flex gap-2">
        <div>placholder</div>
        <p className="text-white-300 paragraph-2-regular inline-block">
          @nikkyyy
        </p>
      </div>
      <div className="flex gap-2">
        <div>placholder</div>
        <p className="text-white-300 paragraph-2-regular inline-block">
          @nikkydeveloper
        </p>
      </div>
      <div className="flex gap-2">
        <div>placholder</div>
        <p className="text-white-300 paragraph-2-regular inline-block">
          @nikkyevva
        </p>
      </div>
      <div className="flex gap-2">
        <div>placholder</div>
        <p className="text-white-300 paragraph-2-regular inline-block">
          @nikkydev
        </p>
      </div>
    </>
  ) : (
    <div>Oops! No social media links</div>
  );
};

export default SocialMediaLinks;
