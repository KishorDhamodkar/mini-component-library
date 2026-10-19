import type { ComponentPropsWithoutRef, ElementType } from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonOwnProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
};

type ButtonProps<C extends ElementType> = ButtonOwnProps & {
  as?: C;
  disabled?: boolean;
} & Omit<ComponentPropsWithoutRef<C>, keyof ButtonOwnProps | "as" | "disabled">;

const variantStyles = {
  primary:
    "bg-purple-600 text-white hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600",

  secondary:
    "bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500",

  danger:
    "bg-red-600 text-white hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",

  ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

const baseStyle =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-2 disabled:cursor-not-allowed disabled:opacity-50";

const Button = <C extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  children,
  ...rest
}: ButtonProps<C>) => {
  const Component = as || "button";
  const isDisabled = disabled || loading;

  const handleClick = (event: React.MouseEvent) => {
    if (isDisabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    rest.onClick?.(event as never);
  };
  const btnStyle = variantStyles[variant];
  const btnSize = sizeStyles[size];

  const componentProps = {
    ...rest,
    className: `${btnStyle} ${btnSize} ${baseStyle}`,
    onClick: handleClick,
    ...(Component === "button"
      ? { disabled: isDisabled }
      : {
          "aria-disabled": isDisabled || undefined,
          tabIndex: isDisabled ? -1 : undefined,
        }),
    "aria-busy": loading || undefined,
  };

  return (
    <Component {...(componentProps as ComponentPropsWithoutRef<C>)}>
      {loading ? "Loading..." : children}
    </Component>
  );
};

export default Button;
