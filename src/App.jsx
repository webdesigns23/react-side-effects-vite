import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

// Joke API
const API_URL = "https://v2.jokeapi.dev/joke/Programming?type=single";

function App() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJoke();
  }, []);

  async function fetchJoke() {
    try{
      const response = await fetch(API_URL);
      const data = await response.json();
      if(data.joke) {
        setJoke(data.joke);
        setLoading(false);
      } else {
        setJoke('No joke found.');
      }
    } catch (error) {
      setError('Failed to fetch joke');
      setJoke('');
      setLoading(false);
    }
  };
   
   return (
    <div className="app">
      <h1>Programming Jokes</h1>
      <JokeDisplay joke={joke} loading={loading} error ={error} />
      <FetchButton fetchJoke={fetchJoke}/>
    </div>
  )
}

export default App