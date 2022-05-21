import Button from "../Button";
import styles from "../App.module.css"
import { func } from "prop-types";
import { type } from "@testing-library/user-event/dist/type";
import { useState, useEffect } from "react"
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  //async-await은 then과 같은 역할이며 async-await이 좀 더 보기 좋은 형태이다.
  const getMovies = async() => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  //▼한 번만 실행
  useEffect(() => {
    getMovies();
  }, [])
  console.log(movies)
  return <div>
    {loading ? <h1>Loading...</h1> : 
      <div>{movies.map((movie) => (<Movie key={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genre={movie.genre} />)
      //property로 보내줘야 Movie.js가 받음
      )}</div>
    }
  </div>;

}

export default Home;