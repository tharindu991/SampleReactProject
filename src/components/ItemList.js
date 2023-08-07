import "../App.css";

function ItemList() {
  return <div className="App">{MovieList()}</div>;
}

function MovieList() {
  const movies = ["Avengers", "Batman", "Superman"];
  return (
    <>
      <h2>My favourite movies</h2>
      <ul>
        {movies.map((movie) => (
          <p>{movie}</p>
        ))}
      </ul>
    </>
  );
}

export default ItemList;
