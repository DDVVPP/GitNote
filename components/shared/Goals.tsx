// import { Path, useForm, UseFormRegister, SubmitHandler } from 'react-hook-form';
import { X } from 'lucide-react';
import Button from './ui/Button';

interface GoalsProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  removeGoal: (label: string) => void;
}

const Goals = ({ label, removeGoal, ...rest }: GoalsProps) => {
  return (
    <div className="bg-black-700 p-3 mb-2 flex  justify-between items-center align-middle">
      <div className="space-x-2">
        <input
          type="checkbox"
          className="appearance-none border border-white-500 h-3 w-3 bg-black-700 rounded-sm cursor-pointer text-green-400"
          {...rest}
        />
        <label className={'paragraph-3-regular  text-white-100'}>{label}</label>
      </div>
      <div className="items-center">
        <button onClick={() => removeGoal(label as string)}>
          <X className="text-white-500" size={16} />
        </button>
      </div>
    </div>
  );
};

export default Goals;
