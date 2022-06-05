import {useState, useEffect} from "react"


function Home() {
  const [homeLoading, setHomeLoading] = useState(true);
  const [news, setNews] = useState([]);
  const getNews = async() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'bbc-news-mundo.p.rapidapi.com',
        'X-RapidAPI-Key': '9af7881081msh604f31bae7bd0a3p1f44aajsn1847b34e4aaa'
      }
    };
    const response = await fetch("https://bbc-news-mundo.p.rapidapi.com/news", options);
    const json = await response.json();
    console.log(json)
    setHomeLoading(false);
  }
  useEffect(() => {
    getNews();
  }, [])
  return <div>
    {homeLoading ? <h1>Loading...</h1> : 
      <div>
        
      </div>
    }
  </div>
}

export default Home