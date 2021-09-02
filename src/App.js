import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// Function component : function, 어떤 것을 return하고 screen에 표시
// Class component : react componet로부터 확장되고 screen에 표시, react는 class componenet의 render method를 자동으로 실행
class App extends React.Component {  // class react component
  state = { // state : object -> 변하는 data
    isLoading: true,
    movies: []
  };

  getMovies = async () => {  // 사간이 필요하다는 것을 말해주기 위해서
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  };

  componentDidMount() {
    this.getMovies();
  }

  render () {
    const {isLoading, movies} = this.state;
    return (
      <section class="container">
        {isLoading 
          ? (<div class="loader">
            <span class="loader__text">Loading...</span>
            </div> 
          ) : (
            <div class="movies">
              {movies.map(movie => (
                <Movie 
                  key={movie.id} 
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image} 
                />
              ))}
            </div>  
          )}
      </section>
    );
  }
}

export default App;
