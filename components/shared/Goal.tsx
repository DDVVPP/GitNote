import { X } from 'lucide-react';
import { forwardRef } from 'react';

interface GoalsProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  index: number;
  field: {
    name: string;
  };
  remove: (index: number) => void;
  updateCheckStatus: (index: number) => void;
}

const Goal = forwardRef<HTMLInputElement, GoalsProps>(function Goal(
  { label, value, index, field, remove, updateCheckStatus, ...rest },
  ref
) {
  return (
    index !== 0 && (
      <div
        className="bg-black-700 p-3 mb-2 flex  justify-between items-center align-middle"
        key={field.name}
      >
        <div>
          <input
            type="checkbox"
            className="appearance-none border border-white-500 h-3 w-3 bg-black-700 rounded-sm cursor-pointer text-green-400 mr-2"
            // id={`goals.${index}.isComplete`}
            // id="goals.isComplete"
            onChange={() => updateCheckStatus(index)}
            ref={ref}
          />
          <span className={'paragraph-3-regular  text-white-100'}>
            {field.name}
          </span>
        </div>
        <div className="items-center">
          <button onClick={() => remove(index)}>
            <X className="text-white-500" size={16} />
          </button>
        </div>
      </div>
    )
  );
});

export default Goal;
