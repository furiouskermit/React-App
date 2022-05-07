import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react"
import { func } from "prop-types";

function Hello() {
  useEffect(() => {
    console.log("created")
    return () => console.log("destroyed")
  }, [])
  return <h1>Hello</h1>
}

function App() {
  const [counter, SetValue] = useState(0);
  const [keyword, steKeyword] = useState("");
  const onClick = () => SetValue((prev) => prev + 1);
  const onChange = (event) => steKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once");
  }, []); //한 번만 실행
  useEffect(() => {
    //처음 시작할 때도 발생하는 현상 방지 
    if(keyword !== "" && keyword.length > 5) {
      console.log("search for", keyword)
    }
    console.log("i run when 'keyword' changes")
  }, [keyword]) //keyword 변경될 때만 실행
  useEffect(() => {
    console.log("i run when 'counter' changes")
  }, [counter]) //counter 변경될 때만 실행

  //즉 useEffcet()를 사용해 원하는 코드를 원하는 상황에만 쓸 수 있게 함
  //useEffect에서 [객체]는 객체의 변화를 감지하면 코드 실행한다는 뜻

  const [showing, setShowing] = useState(false);
  const onClick2 = () => setShowing((prev) => !prev)
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search Here..." /> 
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      {showing ? <Hello /> : null}
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;