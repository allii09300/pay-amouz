import styles from "./styles.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import UserIcon from "@/assets/icons/user.svg?react";
import { X } from "lucide-react";
import Button from "../Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const navLinks = [
    { label: "صفحه اصلی", path: "/" },
    { label: "درباره ما", path: "/about-us" },
    { label: "تماس با ما", path: "/contact-us" },
  ];

  return (
    <div
      className={clsx(styles.MobileMenu, `${open ? styles.Open : ""}`)}
      onClick={(e) => e.stopPropagation()}
    >
      <nav className={styles.Navigation}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            className={styles.RouteItem}
            to={link.path}
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}

        <Link to="/login" className={styles.AccessGate} onClick={onClose}>
          <UserIcon />
          <span className={styles.Label}>ورود والدین</span>
        </Link>
      </nav>
      <Button
        size="icon"
        variant="ghost"
        aria-label="بستن منو"
        className={styles.CloseButton}
        onClick={onClose}
      >
        <X size={32} color="#4d4d4d" />
      </Button>
    </div>
  );
}
