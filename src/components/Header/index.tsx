import styles from "./styles.module.scss";
import PayAmouzIcon from "@/assets/icons/payAmouz.svg?react"

export default function Header() {
  return (
    <div className={styles.Header}>
      <PayAmouzIcon/>
    </div>
  );
}
