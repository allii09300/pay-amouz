import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import PayAmouzIcon from "@/assets/icons/payamouz.svg?react";
import PhoneIcon from "@/assets/icons/phone.svg?react";
import MessageIcon from "@/assets/icons/message.svg?react";
import InstaIcon from "@/assets/icons/insta.svg?react";
import TelegramIcon from "@/assets/icons/telegram.svg?react";

const guideLinks = [
  { label: "چگونه کار می‌کند", path: "/how-it-works" },
  { label: "راهنمای مدارس", path: "/schools-guide" },
  { label: "راهنمای والدین", path: "/parents-guide" },
  { label: "سوالات متداول", path: "/faq" },
];

const policyLinks = [
  { label: "حریم خصوصی", path: "/privacy-policy" },
  { label: "شرایط استفاده", path: "/terms" },
  { label: "مقررات همکاری با مدارس", path: "/school-rules" },
];

const socialLinks = [
  { icon: PhoneIcon, href: "tel:02100000000" },
  { icon: MessageIcon, href: "/support" },
  { icon: InstaIcon, href: "https://instagram.com" },
  { icon: TelegramIcon, href: "https://t.me" },
];

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.BrandBlock}>
        <PayAmouzIcon />

        <div className={styles.BrandText}>
          <p className={styles.Paragraph}>
            توضیح یک پاراگراف کوتاه (۲–۳ خط) درباره مأموریت و حوزه فعالیت
          </p>
          <p className={styles.Paragraph}>
            توضیح یک پاراگراف کوتاه (۲–۳ خط) درباره مأموریت و حوزه فعالیت
          </p>
        </div>
      </div>
      <nav className={styles.LinkColumn}>
        <p className={styles.ColumnHeading}>راهنما</p>

        <ul className={styles.LinkList}>
          {guideLinks.map((item) => (
            <li key={item.path}>
              <Link className={styles.NavLink} to={item.path}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className={styles.LinkColumn}>
        <p className={styles.ColumnHeading}>قوانین و سیاست‌ها</p>

        <ul className={styles.LinkList}>
          {policyLinks.map((item) => (
            <li key={item.path}>
              <Link className={styles.NavLink} to={item.path}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.ContactColumn}>
        <p className={styles.ColumnHeading}>پشتیبانی و شبکه‌های اجتماعی</p>

        <div className={styles.SocialRow}>
          {socialLinks.map(({ icon: Icon, href }, index) => (
            <a
              key={index}
              href={href}
              className={styles.Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
      <p className={styles.Copyright}>© ۱۴۰۴ پی‌آموز — تمامی حقوق محفوظ است</p>
    </footer>
  );
}
