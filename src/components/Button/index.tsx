import styles from "./styles.module.scss";
import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "soft" | "outlined" | "ghost" ;
  size?: "small" | "large" | "full" | "icon";
}

export default function Button({
  variant = "primary",
  size = "small",
  children,
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  const classNames = clsx(
    styles.Button,
    variant === "primary" && styles.Primary,
    variant === "secondary" && styles.Secondary,
    variant === "soft" && styles.Soft,
    variant === "outlined" && styles.Outlined,
    variant === "ghost" && styles.Ghost,
    size === "small" && styles.Small,
    size === "large" && styles.Large,
    size === "full" && styles.Full,
    size === "icon" && styles.Icon,
    disabled && styles.Disabled
  );

  return (
    <button
      className={clsx(classNames , className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
