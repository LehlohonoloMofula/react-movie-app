import { useEffect, useState } from 'react';
import MovieCard  from './MovieCard'
import './App.css';

function App() {

  const API_URI = "https:api.themoviedb.org/3/movie/550?api_key=94661eb5d325db1b5489a64355d8e563"
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(API_URI)
    .then(res =>  res.json())
    .then(data => setMovies(data))
  },[])

  console.log(movies)
  return (
    <div className="App">
      <div className="search_nav">
        <div>
          <h1>Movies</h1>

          <div className="">
            <form>
              <input label="" />
              <button>Search</button>
            </form>
          </div>
        </div>
      </div>

    
    </div>
  );
}

export default App;
