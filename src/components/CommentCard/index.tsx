import styles from "./styles.module.scss";
import clsx from "clsx";
import AvatarIcon from "@/assets/icons/avatar.svg?react";

interface CommentProps {
  name: string;
  role: string;
  text: string;
  variant:"active" | "side"
}

export default function Comment({name , role , text , variant}: CommentProps) {

  return (
    <div className={clsx(styles.CommentCard,
      variant === "active" && styles.ActiveCommentCard
    )}>
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
