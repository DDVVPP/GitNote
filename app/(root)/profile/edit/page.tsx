import { auth } from "@/auth";
import EditProfile from "@/components/profile/EditProfile";
import { getUser } from "@/lib/actions/user.actions";
import { User } from "@prisma/client";

const EditProfileWrapper = async () => {
  const session = await auth();
  const userEmail = session && (await session.user?.email);
  const user = userEmail && (await getUser(userEmail));

  return <EditProfile user={user as User} />;
};

export default EditProfileWrapper;
