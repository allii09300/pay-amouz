import styles from "./styles.module.scss";
import { Check } from "lucide-react";
import clsx from "clsx";

interface CheckBadgeProps {
  variant?: "primary" | "secondary";
  size?: "small" | "large";
}

export default function CheckBadge({
  variant = "primary",
  size = "small",
}: CheckBadgeProps) {
  const classNames = clsx(
    styles.CheckBadge,
    variant === "primary" && styles.Primary,
    variant === "secondary" && styles.Secondary,
    size === "small" && styles.Small,
    size === "large" && styles.Large
  );

  return (
    <div className={classNames}>
      <div className={styles.MarkerCore}>
        <Check className={styles.CheckIcon}/>
      </div>
    </div>
  );
}
