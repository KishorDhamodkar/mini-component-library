import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  helperText?: string;
};

const Input = ({ label, error, helperText, id, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        id={id}
        {...rest}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          error ? `${id}-error` : helperText ? `${id}-helper` : undefined
        }
        className={`w-full rounded-md border bg-white px-3 py-2 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:ring-2 ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-100"
            : "border-gray-300 focus:border-purple-500 focus:ring-purple-100"
        } disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500`}
      />

      {error && (
        <p id={`${id}-error`} className="text-sm text-red-600">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p id={`${id}-helper`} className="text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
