import propTypes from "prop-types";
import {Link} from'react-router-dom'

function Movie({large_cover_image, title , summary,id}){
    return (
    <div>
        <img src={large_cover_image} alt={title}/>
        <h2>
            <Link to={`movie/${id}`}>
            {title}
            </Link>
        </h2>
          <p>{summary}</p>
        <hr/>
    </div>
    )
}
export default Movie;