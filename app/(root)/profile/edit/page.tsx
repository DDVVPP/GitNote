import { EditProfile } from "@/components/profile";
import UserNotFound from "@/components/shared/UserNotFound";
import { getUser } from "@/lib/actions/user.actions";
import { User } from "@prisma/client";
import { headers } from "next/headers";
const EditProfileWrapper = async () => {
  const reqHeaders = headers();
  const headersObject = Object.fromEntries(reqHeaders.entries());
  console.log("Headers in ProfileWrapper as Object:", headersObject);

  const user = (await getUser(reqHeaders)) as User;
  if (!user) return <UserNotFound />;

  return <EditProfile user={user} />;
};

export default EditProfileWrapper;
