import { getUser } from "@/lib/actions/user.actions";

import { User } from "@prisma/client";
// import Posts from "../posts/page";

export default async function Home() {
  const user = (await getUser()) as User;

  return (
    <>
      <div className="text-white-300 flex flex-col gap-4">
        <h1 className="display-2-bold text-white-100">
          Hi {user && user.name}!
        </h1>
        <p className="paragraph-3-medium">
          You have the role of {user && user.role}
        </p>
      </div>
      <div className="text-white-300 mt-4 flex flex-col gap-4">
        <h3 className="display-2-bold text-white-100">Recent Posts</h3>
        {/* {session && <Posts user={user} />} */}
      </div>
    </>
  );
}
