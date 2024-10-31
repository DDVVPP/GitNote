import BasicAuthLogin from "@/components/BasicAuthLogin";
import ProviderLogins from "@/components/ProviderLogins";

const Login = () => {
  return (
    <div className="mt-0 flex w-[400px] flex-col justify-center max-md:mx-6">
      <BasicAuthLogin />
      <section>
        <ProviderLogins />
      </section>
    </div>
  );
};

export default Login;
