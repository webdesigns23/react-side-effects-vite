function JokeDisplay({ joke, loading, error }) {
  return(
    <div> 
      {loading && (<p className="joke-container">Loading...</p>)}
      {error && (<p className="joke-container" style={{ color: 'red' }}> {error}</p>)}
      {joke && (<p className="joke-container">{joke}</p>)}
    </div>
  )
}

export default JokeDisplay;