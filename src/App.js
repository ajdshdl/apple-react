//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  
  let [글제목1, a] = useState('남자코트 추천');
  let [글제목2, b] = useState('강남 우동맛집');
  let [글제목3, c] = useState('파이썬독학');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
        <div className='list'>
        <h4>{ 글제목1 }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목2 }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목3 }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
