import { X } from 'lucide-react';
import Button from './ui/Button';
import { Dispatch, SetStateAction } from 'react';

interface KnowledgeField extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  setKnowledgeLevel: Dispatch<SetStateAction<string>>;
}

const KnowledgeField = ({
  label,
  placeholder,
  setKnowledgeLevel,
  ...rest
}: KnowledgeField) => {
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
          setKnowledgeLevel(e.target.value);
        }}
      />
      <button onClick={() => setKnowledgeLevel('')}>
        <X className="text-white-500" size={16} />
      </button>
    </div>
  );
};

export default KnowledgeField;
