/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '글제목';
  let [글제목,글제목변경] = useState(['남자 코드 추천','강남 우동맛집','파이썬독학']);//잠깐 저장하고 싶은 자료
  let [logo,setLogo] = useState('ReactBlog');
  let [따봉 , 따봉변경] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className='list'>
        <h4>{글제목[0]} <span onClick={ ()=> 따봉변경(따봉+1) }>❤️</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <button onClick={
        ()=>{
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}>가나다순정렬</button>

      <button onClick={()=>{
        let copy = [...글제목] ; //원본은 보존하기 위해.
        copy[0] = '여자 코트 추천';
        글제목변경(copy)
      }}>변경</button>
    </div>
  );
}

export default App;
