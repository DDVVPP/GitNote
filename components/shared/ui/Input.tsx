import { Path, useForm, UseFormRegister, SubmitHandler } from 'react-hook-form';
import { IFormValues } from '@/components/onboarding/CreateAccount';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  // register: UseFormRegister<IFormValues>;
}

const Input = ({
  label,
  name,
  placeholder,
  required = true,
  // register,
}: InputProps) => {
  return (
    <div className="paragraph-3-medium text-white-300 mb-5 flex flex-col">
      <label className="pb-2">{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={(event) => {
          console.log(event.target.value);
          // setData({
          //   ...data,
          //   email: event.target.value,
          // });
        }}
        className="paragraph-3-regular p-3 bg-black-700"
      />
    </div>
  );
};

export default Input;
