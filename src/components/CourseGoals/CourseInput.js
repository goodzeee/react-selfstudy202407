import React, { useState } from 'react';
import './CourseInput.css';
import Button from '../UI/Button';

const CourseInput = ({onAdd}) => {
  // input = 목표 입력할 텍스트 부분 상태값 관리
  const [enteredText, setEnteredText] = useState('');

  const formSubmitHandler = e => {
    e.preventDefault();

    const newGoalObject = {
      id: Math.random().toString(),
      text: enteredText
    };
    // console.log('새목표 추가: ', newGoalObject);
    //🌟🌟App 부모한테 받은 onAdd 함수를 호출하여 목표 추가하는 객체 세팅해준거 전달 !
    onAdd(newGoalObject);
    setEnteredText(''); // 새로운 목표 입력시 text 입력값 들어온 뒤 빈문자열로 상태 갱신 !
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label>나의 목표</label>
        <input
          type="text"
          onChange={e=>setEnteredText(e.target.value)}
          value={enteredText}
        />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;