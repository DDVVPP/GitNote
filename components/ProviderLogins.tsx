import { signIn } from '@/lib/actions';
import Button from './shared/ui/Button';

const submit = async (formData: FormData) => {
  'use server';
  const provider = formData.get('provider') as 'google' | 'github';
  await signIn(provider);
};

const ProviderLogins = () => {
  return (
    <>
      <form action={submit} className="mb-4">
        <input type="hidden" name="provider" value="github" />
        <Button icon="github" color="darkGray">
          Sign In To Github
        </Button>
      </form>
      <form action={submit}>
        <input type="hidden" name="provider" value="google" />
        <Button icon="google" color="darkGray">
          Sign In To Google
        </Button>
      </form>
    </>
  );
};

export default ProviderLogins;
