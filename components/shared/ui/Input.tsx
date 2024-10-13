import React, { forwardRef } from "react";
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
      <div className=" flex flex-col text-white-300">
        {label && (
          <label className="paragraph-3-medium mb-2">
            {label}
            {required && <span className="font-light"> (required)</span>}
          </label>
        )}
        <input
          className="paragraph-3-regular rounded-md border-none bg-black-700 p-3"
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

Input.displayName = "Input";
export default Input;
