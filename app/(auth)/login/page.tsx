import BasicAuthLogin from '@/components/BasicAuthLogin';
import ProviderLogins from '@/components/ProviderLogins';

const Login = () => {
  return (
    <div className="flex flex-col justify-center w-1/3">
      <BasicAuthLogin />
      <div className="mt-5">
        <ProviderLogins />
      </div>
    </div>
  );
};

export default Login;
