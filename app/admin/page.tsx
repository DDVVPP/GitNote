// import { auth } from '@/auth';

export default async function Home() {
  // const session = await auth();
  // if (!session?.user) return null;
  // if (session.user.role !== 'ADMIN') return <div>Access Denied</div>;
  console.log('admin');
  return <div>Admin Page</div>;
}
