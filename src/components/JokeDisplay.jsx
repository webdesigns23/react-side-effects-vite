function JokeDisplay({ joke, loading, error }) {
  return(
    <div> 
      {loading && (<p className="joke-container" style={{color: 'green'}}>Loading...</p>)}
      {error && (<p className="joke-container" style={{ color: 'red' }}> {error}</p>)}
      {joke && (<p className="joke-container" style={{color: 'blue'}}>{joke}</p>)}
    </div>
  )
}

export default JokeDisplay;
