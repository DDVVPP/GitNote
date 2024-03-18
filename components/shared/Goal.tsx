import { X } from 'lucide-react';
import { forwardRef } from 'react';

interface GoalsProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  removeGoal: (label: string) => void;
}

const Goal = forwardRef<HTMLInputElement, GoalsProps>(function Goal(
  { label, value, removeGoal, ...rest },
  ref
) {
  return (
    <div className="bg-black-700 p-3 mb-2 flex  justify-between items-center align-middle">
      <label className={'paragraph-3-regular  text-white-100'} htmlFor="goals">
        <input
          type="checkbox"
          className="appearance-none border border-white-500 h-3 w-3 bg-black-700 rounded-sm cursor-pointer text-green-400 mr-2"
          id="goals"
          value={value}
          ref={ref}
          {...rest}
        />
        <span>{label}</span>
      </label>

      <div className="items-center">
        <button onClick={() => removeGoal(label as string)}>
          <X className="text-white-500" size={16} />
        </button>
      </div>
    </div>
  );
});

export default Goal;
