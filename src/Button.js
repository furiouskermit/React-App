import PropTypes from "prop-types";
import styles from "./Button.module.css"

function Button({text}){
  return <button className={styles.btn}>{text}</button>
}
//styles.btn: style파일에서 .btn의 css를 가져온다는 뜻

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button;