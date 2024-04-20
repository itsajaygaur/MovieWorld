import React from 'react'
import './App.css'
import Movies from './components/Movies'
import Movie from './components/Movie'
import { Routes, Route } from 'react-router-dom'

const App = () => {

    return (
        <div className='app'>
            

            <Routes>
            <Route path="/" element={<Movies />} />
            <Route path='/:id' element={<Movie />} />
        </Routes>
        </div>
    )
}

export default App
