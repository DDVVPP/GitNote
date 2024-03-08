import { signIn, signOut } from '@/lib/actions';

const Login = () => {
  const signUp = async () => {
    'use server';
    await signIn('github');
  };
  return (
    <div>
      <form action={signUp}>
        <button type="submit">Sign In To Github</button>
      </form>
    </div>
  );
};

export default Login;
