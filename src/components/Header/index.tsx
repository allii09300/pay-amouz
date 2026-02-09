import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import PayAmouzIcon from "@/assets/icons/payAmouz.svg?react";
import UserIcon from "@/assets/icons/user.svg?react";
import MobileMenu from "../MobileMenu";
import Button from "../Button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "صفحه اصلی", path: "/" },
  { label: "درباره ما", path: "/about-us" },
  { label: "تماس با ما", path: "/contact-us" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!target.closest(`.${styles.Header}`) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMenuOpen]);

  return (
    <div className={styles.Header}>
      <PayAmouzIcon className={styles.MarkIcon} />

      <Button
        size="icon"
        variant="ghost"
        aria-label="باز کردن منو"
        className={styles.HamburgerMenu}
        onClick={(e) => {
          e.stopPropagation();
          setIsMenuOpen((prev) => !prev);
        }}
      >
        <Menu size={32} color="#4d4d4d" />
      </Button>

      <nav className={styles.Navigation}>
        {navLinks.map((link) => (
          <Link key={link.path} className={styles.RouteItem} to={link.path}>
            {link.label}
          </Link>
        ))}

        <Link to="/login" className={styles.AccessGate}>
          <UserIcon />
          <span className={styles.Label}>ورود والدین</span>
        </Link>
      </nav>

      <MobileMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
