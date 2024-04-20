import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../constant';
import './Movie.css'

const Movie = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    async function getMovie(){

        try {
            const response = await fetch(`${API_URL}&i=${id}`);
            const data = await response.json();
            setMovie(data);
            console.log('i ram')
            
        } catch (error) {
            console.log('Something went wrong!')
        }
    }

    useEffect(() => {
        getMovie()
    }, [id])

    console.log(movie)

if(!movie) return <h3 className='loading-text' >Loading...</h3>
  return (
    <div className='movie-container' >
        <div className='image-wrapper' >
            <img src={movie?.Poster || "https://via.placeholder.com/400" }  />
        </div>
        <div className='movie-details-container' >
            <h2>{movie?.Title}</h2>
            <h3>{movie?.Plot}</h3>
            <p>Released: <span> {movie?.Released} </span> </p>
            <p>Genre: <span> {movie?.Genre} </span> </p>
            <p>Director: <span> {movie?.Director} </span> </p>
            <p>Actors: <span> {movie?.Actors} </span> </p>
            <p>Rated: <span> {movie?.Rated} </span> </p>
            <p>IMDB Rating: <span> {movie?.imdbRating} </span> </p>
            <p>Runtime: <span> {movie?.Runtime} </span> </p>
            <p>Language: <span> {movie?.Language} </span> </p>
            <p>Country: <span> {movie?.Country} </span> </p>
            <p>Awards: <span> {movie?.Awards} </span> </p>

        </div>
    </div>
  )
}

export default Movie