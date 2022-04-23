import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react"

function App() {
  const [value, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i can do this all day");
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  }
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1 className={styles.title}>Welcome Back!!!!!</h1>
      <Button text={"즐겁다"} />
      <div>{value}</div>
      <button onClick={onClick}>adsasddas</button>
    </div>
  );
}

export default App;