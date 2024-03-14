// import { Path, useForm, UseFormRegister, SubmitHandler } from 'react-hook-form';
// import { IFormValues } from '@/components/onboarding/CreateAccount';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
}

const Input = ({
  label,
  id,
  placeholder,
  required = true,
  ...rest
}: InputProps) => {
  return (
    <div className=" text-white-300 mb-5 flex flex-col">
      <label className="paragraph-3-medium mb-2">{label}</label>
      <input
        className="paragraph-3-regular p-3 bg-black-700"
        type="text"
        id={id}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default Input;
