import styles from "./styles.module.scss"

type MetricCardProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

export default function MetricCard({
  icon,
  value,
  label,
}: MetricCardProps) {
  return (
    <div className={styles.MetricCard}>
      <div className={styles.VisualGlyph}>{icon}</div>
      <p className={styles.ValueFigure}>{value}</p>
      <p className={styles.ContextLabel}>{label}</p>
    </div>
  );
}