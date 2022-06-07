import React, { useEffect, useState } from 'react'
import './Results.css'
import VideoCard from './VideoCard'
import axios from './axios'
import FlipMove from 'react-flip-move'

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(selectedOption)
      setMovies(req.data.results)
      return req
    }

    fetchData()
  }, [selectedOption])

  return (
    <div className='results'>
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard movie={movie} key={movie.id} />
        ))}
      </FlipMove>
    </div>
  )
}

export default Results