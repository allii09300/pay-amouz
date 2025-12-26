import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header";


export default function Layout() {
  return (
    <div className={styles.Layout}>
      <Header />
      <main className={styles.PageContent}>
        <Outlet />
      </main>
    </div>
  );
}
