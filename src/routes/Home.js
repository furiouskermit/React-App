import {useState, useEffect} from "react"
import News from "../components/News"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../App.module.css"

function Home() {
  const [homeLoading, setHomeLoading] = useState(true);
  const [news, setNews] = useState([]);
  const getNews = async() => {
    const response = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json");
    const json = await response.json();
    console.log(json.articles)
    setNews(json.articles);
    setHomeLoading(false);
  }
  useEffect(() => {
    getNews();
  }, [])
  return <div>
    {homeLoading ? <h1>Loading...</h1> : 
      <div>
        <Header />
        <div className={styles.Contents}>
          {news.map((n, index) => (<News
            key={index}
            title={n.title}
            description={n.description}
            content={n.content}
            time={n.publishedAt}
            url={n.url}
            image={n.urlToImage}
          />))}
        </div>
        <Footer />
      </div>
    }
  </div>
}

export default Home