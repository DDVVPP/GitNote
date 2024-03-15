import { X } from 'lucide-react';
import Button from './ui/Button';
import { Dispatch, SetStateAction } from 'react';

interface GoalsField extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  setGoal: Dispatch<SetStateAction<string>>;
}

const GoalsField = ({ label, placeholder, setGoal, ...rest }: GoalsField) => {
  return (
    <div className="bg-black-700 py-1 px-3 mb-2 flex  justify-between items-center">
      <input
        type="checkbox"
        className="appearance-none border border-white-500 h-3 w-3 bg-black-700 rounded-sm cursor-pointer text-green-400"
        {...rest}
      />
      <input
        className="paragraph-3-regular text-white-100 placeholder:paragraph-3-regular placeholder:text-white-300 bg-black-700 w-full rounded-md focus:outline-none border-none pl-0 ml-2"
        placeholder={placeholder}
        onChange={(e) => {
          setGoal(e.target.value);
        }}
      />
      <button onClick={() => setGoal('')}>
        <X className="text-white-500" size={16} />
      </button>
    </div>
  );
};

export default GoalsField;
