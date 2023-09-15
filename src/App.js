/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '글제목';
  let [글제목,글제목변경] = useState(['남자 코드 추천','강남 우동맛집','파이썬독학']);//잠깐 저장하고 싶은 자료
  let [logo,setLogo] = useState('ReactBlog'); //첫번째는 state변수명 두번째는 state를 변경하는 함수
  let [따봉 , 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title,setTitle] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      {/* <div className='list'>
        <h4>{글제목[0]} <span onClick={ ()=> 따봉변경(따봉+1) }>❤️</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{setModal(!modal) }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      
      { //[].map 이랑 같은거임 글제목도 array변수이기 떄문       
        // 1. map() 함수는 왼쪽 array자료만큼 내부 코드를 실행해준다. 
        // 2. return 오른쪽에 있는걸 array로 담아줌 
        글제목.map(function(a,i){ //a는 값 , i는 1씩 증가하는 정수
          return (
            <div className='list'>
              <h4 onClick={()=>{setModal(!modal); setTitle(i) }}>{a}<span onClick={ ()=> {
                let copy = [...따봉];
                copy[i] = copy[i]+1;
                따봉변경(copy);
                }}>❤️</span> {따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목} color={'yellow'}/>:null //부모 컴포넌트 ->자식 컴포넌츠 state 전송하려면 props문법 사용하면됨. 부모 ->자식 만 가능
      }                                              

      

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

function Modal(props) { //컴포넌트를 만들대 function명은 영어 대문자로 만들것.
  return ( //컴포넌트는 항상 하나의 div를 묶어야함 하지만 프래그먼트라고 <> <> 이거로 묶어도 됨. (의미없는 div를 사용하기 싫다면)
    <div className='modal' style={{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let copy = [...props.글제목] ; //원본은 보존하기 위해.
        copy[0] = '여자 코트 추천';
        props.글제목변경(copy)
      }}>글수정</button>
    </div>
  )
}

export default App;
