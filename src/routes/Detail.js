import {useParams} from'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
function Detail(){
    const[lo,setLoad]=useState(true);
    const { id }=useParams();
    const [Mee, setMee]=useState();
    const getMov=async()=>{
        const json=await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMee(json);
        setLoad(false);
    }
    useEffect(()=>{
        getMov()
    },[])
    return (
        <div>
            {lo ? <strong>Loading</strong> : 
            <div>
                <img src={Mee.data.movie.background_image}alt=''/>
                <div>
                <span>
                <img src={Mee.data.movie.small_cover_image}alt=''/>
                <span>{Mee.data.movie.title}</span>
                </span>
                </div>
            </div>
            }
        </div>
    )
};
export default Detail;