import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

// Function component : function, 어떤 것을 return하고 screen에 표시
// Class component : react componet로부터 확장되고 screen에 표시, react는 class componenet의 render method를 자동으로 실행
class Home extends React.Component {  // class react component
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
      <section className="container">
        {isLoading 
          ? (<div className="loader">
            <span className="loader__text">Loading...</span>
            </div> 
          ) : (
            <div className="movies">
              {movies.map(movie => (
                <Movie 
                  key={movie.id} 
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image} 
                  genres={movie.genres}
                />
              ))}
            </div>  
          )}
      </section>
    );
  }
}

export default Home;
