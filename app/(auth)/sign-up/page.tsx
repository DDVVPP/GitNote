import Link from "next/link";

import CreateAccount from "@/components/onboarding/CreateAccount";
import ProviderLogins from "@/components/ProviderLogins";

const SignUp = () => {
  return (
    <div className="flex w-1/3 flex-col justify-center">
      <CreateAccount />
      <section className="text-white-300">
        <Link
          className="paragraph-3-medium flex justify-center  underline underline-offset-2"
          href="/login"
        >
          Already have an account
        </Link>
        <div className="inline-flex w-full items-center justify-center">
          <hr className="my-8 h-px w-full border-0 dark:bg-black-700" />
          <span className="paragraph-4-regular absolute left-1/2 -translate-x-1/2 px-3 dark:bg-black-900">
            or
          </span>
        </div>
      </section>
      <section>
        <ProviderLogins />
      </section>
    </div>
  );
};

export default SignUp;
