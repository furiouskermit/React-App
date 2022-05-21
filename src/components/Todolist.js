import styles from "../App.module.css"
import { useState, useEffect } from "react"

function Todolist() {
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([])
  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault()
    if(toDo === "") {
      return
    }
    setToDo("")
    setToDos((currentArray) => [toDo, ...currentArray])
    console.log(toDos)
    console.log(toDo)
  }
  return <div>
    <h2 className={styles.todoTitle}>투두리스트</h2>
    <form onSubmit={onSubmit}>
      <input
      value={toDo}
      onChange={onChange}
      className={styles.formInput}
      type="text"
      placeholder="불꽃가능"
      />
      <button className={styles.formBtn}>얼레벌레</button>
    </form>
    <hr className={styles.hr} />
    <ul>
      {toDos.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>
}

export default Todolist;