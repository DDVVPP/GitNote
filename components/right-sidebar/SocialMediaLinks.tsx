import { Social } from "@prisma/client";
import { socialMediaIconList } from "@/lib/constants/socialMediaList";

const SocialMediaLinks = ({ socialMedia }: { socialMedia?: Social[] }) => {
  return (
    <div className="mr-1 flex flex-col gap-1">
      {socialMedia ? (
        socialMedia.map((social: Social) => {
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
                className="group flex flex-wrap items-center justify-start gap-x-1"
              >
                <Icon
                  size={30}
                  className="group-hover:fill-white-300 group-hover:duration-300"
                />
                <p className="paragraph-2-regular text-white-300 group-hover:text-white-100  group-hover:duration-300">
                  @{social.username}
                </p>
              </a>
            )
          );
        })
      ) : (
        <p className="paragraph-2-regular text-white-300">Oops! No socials!</p>
      )}
    </div>
  );
};

export default SocialMediaLinks;
