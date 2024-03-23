import BasicAuthLogin from "@/components/BasicAuthLogin";
import ProviderLogins from "@/components/ProviderLogins";

const Login = () => {
  return (
    <div className="flex w-1/3 flex-col justify-center">
      <BasicAuthLogin />
      <section>
        <ProviderLogins />
      </section>
    </div>
  );
};

export default Login;
