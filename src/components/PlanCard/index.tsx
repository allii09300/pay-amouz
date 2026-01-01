import styles from "./styles.module.scss";
import Button from "@/components/Button";
import CheckBadge from "@/components/CheckBadge";
import ChevronWrapper from "../ChevronWrapper";
import clsx from "clsx";

interface Feature {
  text: string;
  variant?: "primary" | "secondary";
}

interface PlanCardProps {
  variant?: "recommended" | "normal";
  icon: React.ReactNode;
  title: string;
  features: Feature[];
  badgeLabel?: string;
}

export default function PlanCard({
  icon,
  title,
  features,
  variant = "normal",
  badgeLabel,
}: PlanCardProps) {
  return (
    <div
      className={clsx(
        variant === "recommended" && styles.RecommendedPlanCard,
        variant === "normal" && styles.PlanCard
      )}
    >
      {variant === "recommended" && badgeLabel && (
        <div className={styles.BadgeBanner}>
          <p className={styles.Label}>{badgeLabel}</p>
        </div>
      )}

      <div className={styles.PlanEmblem}>{icon}</div>

      <p className={styles.Title}>{title}</p>

      <div className={styles.FeatureList}>
        {features.map((item, index) => (
          <div
            key={index}
            className={clsx(
              styles.Item,
              variant === "recommended" && index === 0 && styles.FirstItem
            )}
          >
            <CheckBadge size="large" variant={item.variant ?? "primary"} />
            <p className={styles.Text}>{item.text}</p>
          </div>
        ))}
      </div>
      <Button style={{margin: "auto 0 0 0"}} size="full">شروع همکاری مدارس <ChevronWrapper size="large"/></Button>
    </div>
  );
}
