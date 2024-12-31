import { EditProfile } from "@/components/profile";
import UserNotFound from "@/components/shared/UserNotFound";
import { getUser } from "@/lib/actions/user.actions";
import { User } from "@prisma/client";

const EditProfileWrapper = async () => {
  const user = (await getUser()) as User;
  if (!user) return <UserNotFound />;

  return <EditProfile user={user} />;
};

export default EditProfileWrapper;
