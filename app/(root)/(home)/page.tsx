import Link from "next/link";
import Posts from "../posts/page";


export default function Home() {
  return (
    <div>
      <h1 className='display-1-bold text-primary-800'>Home Test!</h1>

      <Link href='/posts'>
        <Posts/>
      </Link>

    </div>
  );
}
