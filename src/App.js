import React from 'react';

function Food({fav}) {
  return (<h3>I like {fav}</h3>);
}

function App() {
  return (
    <div className="App">
      <h1>Hello World!!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="pizza" />
      <Food fav="hamburger" />
    </div>
  );
}

export default App;
