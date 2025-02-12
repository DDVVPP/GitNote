import { EditProfile } from "@/components/profile";
import UserNotFound from "@/components/shared/UserNotFound";
import { getUser } from "@/lib/actions/user.actions";
import { User } from "@prisma/client";

const EditProfileWrapper = async () => {
  const user = (await getUser()) as User;

  return user ? <EditProfile user={user} /> : <UserNotFound />;
};

export default EditProfileWrapper;
