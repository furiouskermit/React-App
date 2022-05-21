import PropTypes from "prop-types";
import {Link} from "react-router-dom";
function Movie({coverImg, title, summary, genres}) { //App.js의 <Movie />의 속성(property)을 가져옴
  return  (
    <div>
    <img src={coverImg} alt={title} />
    <h2>
      <Link to="/movie">{title}</Link>
    </h2>
    <p>{summary}</p>
    <ul>
      {genres && genres.map(g => <li key={g}>{g}</li>)}
    </ul>
  </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired
}

export default Movie;