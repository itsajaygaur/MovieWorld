import React from 'react'
import Moviecard from './Moviecard'
import { API_URL } from '../constant'

const Movies = () => {

    const [movies, setMovies] = React.useState([])
    const [searchTerm, setSearchTerm] = React.useState('')
    

    const getMovies = async (title) => {

        try {
            
            if(!title.trim()) return
            const res = await fetch(`${API_URL}&s=${title}`)
            const data = await res.json()
            setMovies(data.Search)
            console.log(data)
        } catch (error) {
            console.log('Something went wrong!')
        }
    }

    React.useEffect(() => {
        getMovies('batman')
    }, [])


  return (
    <>
            <a href='/' ><h1 >MovieWorld</h1></a>
            <form className='input-container' onSubmit={e => e.preventDefault()} >
                <input type='text' placeholder='search movies' onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
                <button onClick={() => getMovies(searchTerm)}>search</button>
            </form>
            {
                movies?.length > 0 ? (
                    <div className='card-container'>
                        {movies.map(movie => (
                            <Moviecard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <p className='empty'>Movie not found!</p>
                )
            }

    </>
  )
}

export default Movies