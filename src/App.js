import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  /**
   * state 변경함수 특징
   * 기존 state == 신규 state의 경우
   * 변경 안해줌.
   * 
   * array/object -> 레퍼런스 변수라는 점을 생각해야함
   * let copy = [...원본] ;
   * [...  ]   사용해서 독립적인 카피본을 만든다.
   */

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {/* <div className='list'>
        <h4>{ 글제목[0] } <span onClick={()=> {따봉변경(따봉 + 1)}}> 👍 </span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{setModal(!modal)}}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {
        글제목.map(function(a, i){ //i 는 반복문이 돌때마다 0부터 1씩 증가하는 정수
          return (<div className='list' key={i}>
          {/* <h4>{ a }</h4> */}
          <h4 onClick={()=>{
            setModal(true);
            setTitle(i);
            }}>{ 글제목[i] }
          <span onClick={()=> {
            let copy = [...따봉];
            copy[i] = copy[i] + 1;
            따봉변경(copy);
            }}> 👍 </span> {따봉[i]} </h4>
          <p>2월 17일 발행</p>
        </div>)
        })
      }

      {
        modal == true ? <Modal title={title} color={'skyblue'} 글제목={글제목} 글제목변경={글제목변경}></Modal> : null
      }
      
    </div>
  );
}
function Modal(props){
  return (
    //의미없는 div생략
    <>  
    <div className='modal' style={{background:props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let copy = [...props.글제목];
        copy[0] = '여자코트 추천';
        props.글제목변경(copy);
      }}>글 수정</button>
    </div>
    </>
  )
}

export default App;
