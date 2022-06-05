import { useMediaQuery } from "react-responsive"
import styles from "../App.module.css"


function News({title, description, content, time, url, image}){
  return <div className={styles.boardContainer}>
    <div className={[styles.dFlexCenter, styles.boardWrap].join(" ")}>
      <div className={styles.boardThumb}><img src={image} className={styles.posCenter} /></div>
      <div className={styles.boardDesc}>
        <h6 className={styles.boardDate}>{time}</h6>
        <h2 className={styles.boardTitle}>{title}</h2>
        <h4 className={styles.boardSubTitle}>{description}</h4>
        <p className={styles.boardContent}>{content}</p>
        <a className={styles.btnView} href={url}>Read More</a>
      </div>
    </div>
  </div>
}

export default News;