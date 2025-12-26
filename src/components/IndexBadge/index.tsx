import styles from "./styles.module.scss";

interface IndexBadgeProps {
  children: React.ReactNode
}

export default function IndexBadge({ children }: IndexBadgeProps) {
  return <div className={styles.IndexBadge}>{children}</div>;
}
