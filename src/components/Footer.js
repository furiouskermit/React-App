import styles from "../App.module.css"

function Footer() {
  return <footer className={styles.footer}>
    <ul className={styles.footerSns}>
      <li><a href="#none"><i className="xi-mail"></i></a></li>
      <li><a href="#none"><i className="xi-twitter"></i></a></li>
    </ul>
  </footer>
}

export default Footer