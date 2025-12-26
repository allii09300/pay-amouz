import styles from "./styles.module.scss";
import AvatarIcon from "@/assets/icons/avatar.svg?react";

interface CommentProps {
  name: string;
  role: string;
  text: string;
}

export default function Comment({name , role , text}: CommentProps) {
  return (
    <div className={styles.CommentCard}>
      <AvatarIcon className={styles.UserAvatar} />
      <div className={styles.ContentBlock}>
        <div className={styles.HeaderRow}>
          <p className={styles.UserName}>{name}</p>
          <p className={styles.UserRole}>{role}</p>
        </div>
        <p className={styles.CommentText}>{text}</p>
      </div>
    </div>
  );
}
