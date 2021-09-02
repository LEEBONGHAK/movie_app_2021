import React from 'react';
import axios from "axios";

// Function component : function, 어떤 것을 return하고 screen에 표시
// Class component : react componet로부터 확장되고 screen에 표시, react는 class componenet의 render method를 자동으로 실행
class App extends React.Component {  // class react component
  state = { // state : object -> 변하는 data
    isLoading: true,
    movies: []
  };
  getMovies = async () => {  // 사간이 필요하다는 것을 말해주기 위해서
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  componentDidMount() {
    setTimeout(() => {  // delay function
      this.setState({isLoading: false});
    }, 6000);
    this.getMovies();
  }
  render () {
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    )
  }
}

export default App;
