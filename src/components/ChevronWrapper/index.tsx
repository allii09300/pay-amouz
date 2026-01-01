import styles from "./styles.module.scss";
import { ChevronLeft } from "lucide-react";
import clsx from "clsx";

interface ChevronWrapperProps {
  variant?: "primary" | "secondary"
  size?: "small" | "large";
}

export default function ChevronWrapper({
  size = "small",
  variant = "primary"
}: ChevronWrapperProps) {
  return (
    <div
      className={clsx(
        styles.ChevronWrapper,
        variant === "primary" && styles.Primary,
        variant === "secondary" && styles.Secondary,
        size === "small" && styles.Small,
        size === "large" && styles.Large
      )}
    >
      <ChevronLeft />
    </div>
  );
}
