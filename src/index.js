import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// <App /> => component의 한 종류, react는 component와 함께 동작함
// component는 HTML을 반환하는 함수
// JSX : JS를 확장한 문법, JS 안에 HTML과 JS의 모든 기능 포함 - react 개념
ReactDOM.render(<App />, document.getElementById('root'));