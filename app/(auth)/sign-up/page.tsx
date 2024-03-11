import Link from 'next/link';

import CreateAccount from '@/components/onboarding/CreateAccount';
import ProviderLogins from '@/components/ProviderLogins';

const SignUp = () => {
  return (
    <div>
      Sign up
      <CreateAccount />
      <Link href="/login">Already have an account</Link>
      <ProviderLogins />
    </div>
  );
};

export default SignUp;
