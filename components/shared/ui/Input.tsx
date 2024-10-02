import { forwardRef } from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  placeholder: string;
  required?: boolean;
  errors?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, placeholder, required = false, errors, ...rest }, ref) => {
    return (
      <div className=" text-white-300 flex flex-col">
        {label && (
          <label className="paragraph-3-medium mb-2">
            {label}
            {required && <span className="font-light"> (required)</span>}
          </label>
        )}
        <input
          className="paragraph-3-regular bg-black-700 rounded-md border-none p-3"
          type="text"
          id={id}
          placeholder={placeholder}
          {...rest}
          ref={ref}
        />
        {errors && <span className="error-message">{errors}</span>}
      </div>
    );
  }
);
export default Input;
