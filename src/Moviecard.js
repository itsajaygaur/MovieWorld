import React from 'react'

const Moviecard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    return (
        <div className="movie" key={imdbID}>
            <div>
                <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
            </div>

            <div className='movie-details'>
                <span>{Type}</span> <br />
                <span>{Year}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    );
}
export default Moviecard