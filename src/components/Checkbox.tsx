import type { InputHTMLAttributes } from "react";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Checkbox = ({ label, className, ...rest }: CheckboxProps) => {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className={`h-4 w-4 rounded border-gray-300 accent-purple-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 disabled:cursor-not-allowed disabled:opacity-50 ${className ?? ""}`}
        {...rest}
      />
      {label && <span className="text-sm text-gray-700">{label}</span>}
    </label>
  );
};

export default Checkbox;
