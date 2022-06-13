import styles from "../App.module.css"
import {useState} from "react"

function Header() {
  const homePath = document.location.pathname === "/React-App";
  const [reverse, setReverse] = useState(true);
  const onClick = () => setReverse((current) => !current);
  return <header className={styles.header}>
    <h1 className={styles.headerTitle}>{homePath ? "Kermit the Furious" : "NEWS" }</h1>
    <button onClick={onClick} className={reverse ? `${styles.trigger}` : `${styles.dNone}`}><span></span><span></span><span></span></button>
    <div className={reverse ? `${styles.headerMenu}` : `${styles.headerMenuActive}`} id="headerMenu">
      <button type="button" onClick={onClick} className={styles.btnClose}><i className="xi-close"></i></button>
      <h3 className={styles.welcomeText}>Welcome!</h3>
      <ul className={styles.headerUl}>
        <li><a href="#none">Home</a></li>
        <li><a href="#none">Movie</a></li>
        <li><a href="#none">News</a></li>
        <li><a href="#none">To Do List</a></li>
      </ul>
    </div>
  </header>
}

export default Header