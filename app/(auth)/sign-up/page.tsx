import Link from 'next/link';

import CreateAccount from '@/components/onboarding/CreateAccount';
import ProviderLogins from '@/components/ProviderLogins';

const SignUp = () => {
  return (
    <div className="flex flex-col justify-center w-1/3">
      <CreateAccount />
      <section className="text-white-300">
        <Link
          className="paragraph-3-medium underline underline-offset-2  flex justify-center"
          href="/login"
        >
          Already have an account
        </Link>
        <p className="my-5 paragraph-4-regular flex justify-center">or</p>
      </section>
      <section>
        <ProviderLogins />
      </section>
    </div>
  );
};

export default SignUp;
