import type { InputHTMLAttributes } from "react";

type SwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Switch = ({ label, ...rest }: SwitchProps) => {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer">
      <span className="relative inline-block w-10 h-6">
        <input
          type="checkbox"
          className="sr-only peer"
          {...rest}
        />

        {/* Switch track */}
        <span
          className="
            absolute inset-0
            rounded-full
            bg-gray-300
            transition-colors
            peer-checked:bg-purple-600
            peer-disabled:opacity-50
          "
        />

        {/* Switch knob */}
        <span
          className="
            absolute left-1 top-1
            h-4 w-4
            rounded-full
            bg-white
            transition-transform
            peer-checked:translate-x-4
          "
        />
      </span>

      {label && (
        <span className="text-sm text-gray-700">
          {label}
        </span>
      )}
    </label>
  );
};

export default Switch;