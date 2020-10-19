import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movies}) {
    return (
        <div >
            {movies.map((movie,i) => (
            <MovieCard{...movie} key={i}/>
        ))}
            
        </div>
    )
}

export default MovieList
