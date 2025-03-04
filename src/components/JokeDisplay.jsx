import React from 'react'

// ❌ Joke is not displayed properly
const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">
      {/* ❌ Joke is missing → students need to fix this */}
      {loading ? <p>Loading...</p> : <p>Joke not available</p>}
    </div>
  )
}

export default JokeDisplay
