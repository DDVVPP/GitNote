import { Path, useForm, UseFormRegister, SubmitHandler } from 'react-hook-form';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
}

const Checkbox = ({ label, placeholder }: CheckboxProps) => {
  return (
    <div className="bg-black-700 p-3 mb-2 flex items-center space-x-2">
      <input
        type="checkbox"
        className="appearance-none border border-white-500 h-3 w-3 bg-none rounded-sm cursor-pointer checked:bg-green-400 checked:border-0"
      />
      <label
        className={`paragraph-3-regular ${label ? ' text-white-100' : 'text-white-300'}`}
      >
        {label || placeholder}
      </label>
    </div>
  );
};

export default Checkbox;
