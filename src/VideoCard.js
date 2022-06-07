import React, { forwardRef } from 'react'
import './VideoCard.css'

const base_url = "https://image.tmdb.org/t/p/original/"

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className='videoCard'>
      <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="poster" />
      <p>{movie.overview}</p>
      <h2>{movie.title || movie.original_name}</h2>
      <p className='videoCard__stats'>
        {movie.media_type && `${movie.media_type} *`}
        {movie.release_date || movie.first_air_date} *
        <p>{movie.vote_count}</p>
      </p>
    </div>
  )
})

export default VideoCard