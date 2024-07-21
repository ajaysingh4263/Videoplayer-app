import React, { useEffect, useRef, useState } from "react";
import './Titlecards.css'
import Cards_data from "../../assets/cards/Cards_data"
import { Link, useNavigate } from "react-router-dom";



function Titlecards( {title ,category}){
    
    const [apidata , setApidata] = useState([]);
    
    const cardsref =useRef()
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDI5NDg5YTU0Mzg3ZGFhYmMzOTc5NDlkOTZmZjRmZCIsIm5iZiI6MTcxOTYzMTE5My44MzMwOTIsInN1YiI6IjY2N2Y3YzJlNTIzOTc0ODUyNjhhOWM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iilpVw_4AF3ZwwEFYhlzvaQ23ToZZEOAmEXkmFl8PXM'
        }
      };
      

    const handleWheel = (event)=> {
      event.preventDefault();
      cardsref.current.scrollLeft += event.deltaY;
    }

useEffect(()=>{
    
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApidata(response.results))
    .catch(err => console.error(err));
    cardsref.current.addEventListener('wheel' , handleWheel);
},[])

    return(  
        <div className="Title-cards">
            <h2>{title?title: "Popular on Netflix"}</h2>
            
               <div className="card-list"  ref={cardsref}>
                {apidata.map((card , index ) =>{
            return <Link to={`/player/${card.id}`}className="card" key={index}>
                <img src={'https://image.tmdb.org/t/p/w500'+ card.backdrop_path} />
                <p>{card.original_title}</p>
            </Link>
                })}
               </div>

            </div>
        
    )
}

export default Titlecards