import React, { useEffect, useState } from "react";
import Movie from '../components/Movie'


function Home(){
    const[loading,setloading]=useState(true)
    const[Movies,setMovies]=useState([])
    const getMovies=async()=>{
      const response=await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
      const json=await response.json()
      setMovies(json.data.movies);
      setloading(false)
    }
    useEffect(()=>{
      getMovies()
    },[])
    console.log(Movies)
    return(
      <div>
        {loading ? <strong>Loading...</strong> : 
        Movies.map((value)=>
          <Movie
          key={value.id} id={value.id}large_cover_image={value.large_cover_image} title={value.title} summary={value.summary}/>
          )
      }
      </div>
      );
    }


export default Home;