import styles from "./styles.module.scss";
import { ChevronLeft } from "lucide-react";
import clsx from "clsx";

interface ChevronWrapperProps {
  size?: "small" | "large";
}

export default function ChevronWrapper({
  size = "small",
}: ChevronWrapperProps) {
  return (
    <div
      className={clsx(
        styles.ChevronWrapper,
        size === "small" && styles.Small,
        size === "large" && styles.Large
      )}
    >
      <ChevronLeft />
    </div>
  );
}
