import { forwardRef } from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  placeholder: string;
  required?: boolean;
  errors?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, placeholder, required = true, errors, ...rest }, ref) => {
    return (
      <div className=" text-white-300 flex flex-col">
        {label && <label className="paragraph-3-medium mb-2">{label}</label>}
        <input
          className="paragraph-3-regular bg-black-700 rounded-md border-none p-3"
          type="text"
          id={id}
          placeholder={placeholder}
          {...rest}
          ref={ref}
        />
        {errors && (
          <span className="text-error-500 paragraph-3-regular mt-2">
            {errors}
          </span>
        )}
      </div>
    );
  }
);
export default Input;
