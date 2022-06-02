import {useState} from "react";
import {useParams} from "react-router-dom";
import { useEffect } from "react";
import styles from "../App.module.css"
import '../App.scoped.scss'

function Detail() {
  const [loading2, setLoading2] = useState(true);
  const {id} = useParams();
  const [detail, setDetail] = useState([]);
  console.log(id);
  const getMovie = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();
    setDetail(json.data.movie);
    setLoading2(false);
  }
  useEffect(() => {
    //await는 sync 안에 있어야 사용 가능함
    getMovie();
  }, [])
  console.log(detail)
  return <div>
    {loading2 ? <div>Loading...</div> : 
      <div className={styles.btnWrap}>
        <div><img src={detail.large_cover_image} /></div>
        <h1 className={styles.title}>{detail.title}</h1>
        <ul>
          <li>Rating: <strong>{detail.rating}</strong></li>
          <li>Runtime: <strong>{detail.runtime}min</strong></li>
          <li>Released: <strong>{detail.year}</strong></li>
          <li>Genre: 
            <strong>{detail.genres && detail.genres.map(detailG => <span key={detailG}>{detailG}. </span>)}</strong>
          </li>
          <li>Likes: <strong>{detail.like_count}</strong></li>
        </ul>
      </div>
    }
  </div>
}
export default Detail;