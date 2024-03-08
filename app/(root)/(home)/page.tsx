import { auth } from '@/auth';
import { getUser } from '@/lib/actions/user.actions';

import Posts from '../posts/page';

export default async function Home() {
  const session = await auth();
  const userEmail = session && (await session.user?.email);
  const user = userEmail && (await getUser(userEmail));

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
      <div className="text-white-300 flex flex-col mt-4 gap-4">
        <h3 className="display-2-bold text-white-100">Recent Posts</h3>
        {session && <Posts user={user} />}
      </div>
    </>
  );
}
