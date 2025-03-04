import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

test('displays a loading message before joke is loaded', async () => {
  render(<App />)
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
})

test('fetches and displays a joke on load', async () => {
  render(<App />)
  const jokeElement = await screen.findByText(/.*/i)
  expect(jokeElement).toBeInTheDocument()
})

test('fetches a new joke when button is clicked', async () => {
  render(<App />)
  const button = screen.getByRole('button', { name: /Get a New Joke/i })

  fireEvent.click(button)
  const newJokeElement = await screen.findByText(/.*/i)
  expect(newJokeElement).toBeInTheDocument()
})
