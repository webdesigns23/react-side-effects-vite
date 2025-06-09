function FetchButton({ fetchJoke }) {
  return (
    <button className="fetch-button" onClick={fetchJoke}>
      Get A New Joke
    </button>
  );
}

export default FetchButton;
