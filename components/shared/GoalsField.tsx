import { X } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

interface GoalsField extends React.InputHTMLAttributes<HTMLInputElement> {
  learningGoalText?: string;
  setLearningGoalText: Dispatch<SetStateAction<string>>;
}

const GoalsField = ({
  learningGoalText,
  setLearningGoalText,
  ...rest
}: GoalsField) => {
  return (
    <div className="bg-black-700 py-1 px-3 mb-2 flex  justify-between items-center">
      <input
        type="checkbox"
        disabled
        className="appearance-none border border-white-500 h-3 w-3 bg-white-500 rounded-sm text-green-400"
      />
      <input
        className="paragraph-3-regular text-white-100 placeholder:paragraph-3-regular placeholder:text-white-300 bg-black-700 w-full rounded-md focus:outline-none border-none pl-0 ml-2"
        placeholder="Enter a learning goal"
        // id={`goals.${index}.name`}
        // id="goals.name"
        type="text"
        onChange={(e) => {
          setLearningGoalText(e.target.value);
        }}
        value={learningGoalText}
      />
      <button
        onClick={() => {
          setLearningGoalText('');
        }}
      >
        <X className="text-white-500" size={16} />
      </button>
    </div>
  );
};

export default GoalsField;
