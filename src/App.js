import React from 'react';

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function Food({fav, img}) {
  return (
  <div>
    <h3>I like {fav}</h3>
    <img src={img} alt={fav} />
  </div>
  );
}

// react의 모든 element들은 unique해야 되며, list로 element들이 들어갈 경우 uniqueness를 잃어버림
// 따라서 list item에 다른 id를 설정해야하고, key prop를 주어야 한다. key prop는 사용되지 않지만 react에서 내부적으로 사용된다.
function renderFood(dish) {
  return <Food key={dish.id}  fav={dish.name} img={dish.image} />
}

function App() {
  return (
    <div className="App">
      <h1>Hello World!!</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
