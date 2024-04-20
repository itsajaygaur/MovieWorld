import React from 'react'

const Moviecard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    return (
        <a href={`/${imdbID}`} >
        <div className="movie" key={imdbID}>
            <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />

            <div className='movie-details'>
                <span>{Type}</span> <br />
                <span>{Year}</span>
                <h3>{Title}</h3>
            </div>
        </div>
        </a>
    );
}
export default Moviecard