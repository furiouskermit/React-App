//App은 이제 router 역할
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail"

function App() {
  //Switch : Route를 찾고 찾으면 그것을 component로 만드는 역할
  return <Router>
    <Routes>
      <Route path={process.env.PUBLIC_URL + "/movie/:id"} element={<Detail />}></Route>
      <Route path={process.env.PUBLIC_URL + "/"} element={<Home />}></Route>
    </Routes>
  </Router>;
}

export default App;