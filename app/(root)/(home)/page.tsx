import { auth } from '@/auth';
import { signIn, signOut } from '@/lib/actions';

// import BadgeTest from '@/components/shared/ui/BadgeTest';
import Posts from '../posts/page';

export default async function Home() {
  const session = await auth();

  return (
    <div className="paragraph-3-medium text-white-300 flex flex-col gap-2">
      <form action={signIn}>
        <button type="submit">Sign In</button>
      </form>

      <form action={signOut}>
        <button type="submit">Sign Out</button>
      </form>

      {session?.user ? <div>Signed In</div> : <div>No user...</div>}

      <h1 className="display-2-bold text-white-100">Recent Posts</h1>
      {session ? <Posts session={session} /> : <div>Eee Login Card</div>}

      {/* <BadgeTest /> */}
    </div>
  );
}
