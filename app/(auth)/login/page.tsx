import BasicAuthLogin from '@/components/BasicAuthLogin';
import ProviderLogins from '@/components/ProviderLogins';

const Login = () => {
  return (
    <div className="flex flex-col justify-center w-1/3">
      <BasicAuthLogin />
      <section className="mt-5">
        <ProviderLogins />
      </section>
    </div>
  );
};

export default Login;
