import React, { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

const API_URL = 'https://v2.jokeapi.dev/joke/Programming?type=single'

function App() {
  const [joke, setJoke] = useState('') // State for joke
  const [loading, setLoading] = useState(false) // ❌ Incorrect initial state (ensures test fails)

  // ❌ `useEffect` is missing → Initial API request is not made
  // ❌ `fetchJoke` is missing → Implement fetching logic here

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      {/* ❌ JokeDisplay component will not display anything initially */}
      <JokeDisplay joke={joke} loading={loading} />
      {/* ❌ FetchButton exists but does nothing */}
      <FetchButton />
    </div>
  )
}

export default App
