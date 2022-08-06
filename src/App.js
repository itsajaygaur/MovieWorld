import React from 'react'
import Moviecard from './Moviecard.js'
import './App.css'

const App = () => {
    const [movies, setMovies] = React.useState([])
    const [searchTerm, setSearchTerm] = React.useState('')
    const API_URL = 'http://www.omdbapi.com/?apikey=56aad638'

    const getMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`)
        const data = await res.json()
        setMovies(data.Search)
        // console.log(data)
    }

    React.useEffect(() => {
        getMovies('batman')
    }, [])
    return (
        <div className='app'>
            <div>
                <h1>MovieWorld</h1>
            </div>
            <div>
                <input type='text' placeholder='search movies' onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
                <button onClick={() => getMovies(searchTerm)}>search</button>
            </div>
            {
                movies?.length > 0 ? (
                    <div className='card-container'>
                        {movies.map(movie => (
                            <Moviecard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <h3 className='empty'>No movies found</h3>
                )
            }

        </div>
    )
}

export default App