import styles from "./styles.module.scss";
import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "soft";
  size?: "small" | "large" | "full";
}

export default function Button({
  variant = "primary",
  size = "small",
  children,
  disabled = false,
  ...props
}: ButtonProps) {
  const classNames = clsx(
    styles.Button,
    variant === "primary" && styles.Primary,
    variant === "secondary" && styles.Secondary,
    variant === "soft" && styles.Soft,
    size === "small" && styles.Small,
    size === "large" && styles.Large,
    size === "full" && styles.Full,
    disabled && styles.Disabled
  );

  return (
    <button
      className={clsx(classNames, props.className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
