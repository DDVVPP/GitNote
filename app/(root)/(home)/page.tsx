import Posts from '../posts/page';
import TempBadgeTest from '@/components/shared/TempBadgeTest';

export default function Home() {
  return (
    <div className="paragraph-3-medium text-white-300 flex flex-col gap-2">
      <h1 className="display-2-bold text-white-100">Recent Posts</h1>
      <TempBadgeTest />

      {/* <Posts /> */}
    </div>
  );
}
