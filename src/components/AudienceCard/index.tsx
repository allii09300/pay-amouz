import styles from "./styles.module.scss";
import ScienceIcon from "@/assets/icons/science.svg?react";
import CheckBadge from "../CheckBadge";

interface BenefitType {
  text: string;
  first?: boolean;
}

interface AudienceCardProps {
  title: string;
  summary: string;
  benefits: BenefitType[];
}

export default function AudienceCard({
  title,
  summary,
  benefits,
}: AudienceCardProps) {
  return (
    <div className={styles.AudienceCard}>
      <div className={styles.IconBadge}>
        <ScienceIcon />
      </div>

      <div className={styles.HeaderBlock}>
        <p className={styles.Title}>{title}</p>
        <p className={styles.Summary}>{summary}</p>
      </div>

      {benefits.map((item, index) => (
        <div key={index} className={styles.BenefitItem}>
          <CheckBadge/>
          
          <p className={item.first ? styles.FirstStatement : styles.Statement}>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
