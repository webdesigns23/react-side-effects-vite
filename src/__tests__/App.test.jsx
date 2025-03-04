import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

// Before each test, mock fetch to return a test joke
beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({ joke: 'Why do programmers prefer dark mode?' }),
    })
  )
})

test('displays a loading message before joke is loaded', async () => {
  render(<App />)
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
})

test('fetches and displays a joke on load', async () => {
  render(<App />)
  // Find and check the joke that should be displayed
  const jokeElement = await screen.findByText(
    /Why do programmers prefer dark mode?/i
  )
  expect(jokeElement).toBeInTheDocument()
})

test('fetches a new joke when button is clicked', async () => {
  render(<App />)
  const button = screen.getByRole('button', { name: /Get a New Joke/i })

  // Mock a new joke response when fetch is called again
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({ joke: 'Another programming joke!' }),
    })
  )

  fireEvent.click(button)

  // Check if the new joke appears
  const newJokeElement = await screen.findByText(/Another programming joke!/i)
  expect(newJokeElement).toBeInTheDocument()
})
