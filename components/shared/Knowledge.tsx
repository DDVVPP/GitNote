import Image from 'next/image';

import { X, CheckSquare } from 'lucide-react';
import Button from './ui/Button';

interface KnowledgeProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  removeLevel: (label: string) => void;
}

const Knowledge = ({ label, removeLevel }: KnowledgeProps) => {
  return (
    <div className="bg-black-700 p-3 mb-2 flex  justify-between items-center align-middle">
      <div className="space-x-2 flex items-center">
        <CheckSquare className="text-primary-500" size={16} />
        <label className={'paragraph-3-regular  text-white-100'}>{label}</label>
      </div>
      <div className="items-center">
        <button onClick={() => removeLevel(label as string)}>
          <X className="text-white-500" size={16} />
        </button>
      </div>
    </div>
  );
};

export default Knowledge;
