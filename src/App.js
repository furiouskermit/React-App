import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react"
import { func } from "prop-types";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  const onChange = (event) => {
    setValue(event.target.value)
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) => response.json()).then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, [])
  return <div>
    <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
    {loading ? <strong>Loading...</strong> : 
      <div>
        <select>
          {coins.map((coin) => <option key={coin.id}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>)}
        </select>
        <div>
          <h1>입력한 금액을 BTC로 환전해드립니다. ^^</h1>
          <input id="cost" type="text" placeholder="금액을 입력해주세요." value={value} onChange={onChange} />
        </div>
        <p>
          환전 금액: <strong>{value / Number(coins[0].quotes.USD.price)} BTC</strong>
        </p> 
      </div>
    }
    
    
  </div>;
}

export default App;