import { EditProfile } from "@/components/profile";
import { getUser } from "@/lib/actions/user.actions";
import { User } from "@prisma/client";

const EditProfileWrapper = async () => {
  const user = (await getUser()) as User;

  return <EditProfile user={user} />;
};

export default EditProfileWrapper;
