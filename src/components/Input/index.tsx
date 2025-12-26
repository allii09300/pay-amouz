import styles from "./styles.module.scss";
import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className={clsx(styles.InputWrapper, className)}>
        {label && <span className={styles.Label}>{label}</span>}
        <input ref={ref} {...props} className={styles.Input} />
      </label>
    );
  }
);

Input.displayName = "Input";
export default Input;
