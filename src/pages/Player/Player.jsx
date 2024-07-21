import React, { useEffect, useState } from "react";
import './Player.css'
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useNavigate, useParams } from "react-router-dom";




function Player(){

const navigate = useNavigate();

    const {id} = useParams()
    const[apiData , setApiData] =useState({
        name: "",
        key: "",
        published_at: "",
        typeof:""
    })

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDI5NDg5YTU0Mzg3ZGFhYmMzOTc5NDlkOTZmZjRmZCIsIm5iZiI6MTcxOTYzMTE5My44MzMwOTIsInN1YiI6IjY2N2Y3YzJlNTIzOTc0ODUyNjhhOWM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iilpVw_4AF3ZwwEFYhlzvaQ23ToZZEOAmEXkmFl8PXM'
        }
      };
      
      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => setApiData(response.results[0]))
        .catch(err => console.error(err));

      },[])




    return(
           <div className="player">
            <img src={back_arrow_icon} alt="" srcset=""  onClick={()=>{navigate(-2) }}/>
            <iframe width= '90%' height='90%'
             src={`https://www.youtube.com/embed/${apiData.key}`}
             title="trailer"  frameBorder= '0' allowFullScreen></iframe>
               <div className="player-info">
                <p>{apiData.published_at.slice(0,10) }</p>
                <p>{apiData.name}</p>
                <p>{apiData.typeof}</p>
               </div>
           </div>  
    )
}
export default Player