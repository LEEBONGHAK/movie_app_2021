import React from 'react';
import PropTypes from "prop-types" // 전달 받은 props가 원하는 props인지 확인해줌

// Function component : function, 어떤 것을 return하고 screen에 표시
// Class component : react componet로부터 확장되고 screen에 표시, react는 class componenet의 render method를 자동으로 실행
class App extends React.Component {  // class react component
  state = { // state : object -> 변하는 data
    count: 0
  };
  // setState를 호출할 때마다 react는 새로운 state와 함께 render function을 호출
  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };
  render () {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
