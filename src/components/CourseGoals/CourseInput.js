import React, { useState } from 'react';
import './CourseInput.css';
import Button from '../UI/Button';

const CourseInput = ({onAdd}) => {
  // input = 목표 입력할 텍스트 부분 상태값 관리
  const [enteredText, setEnteredText] = useState('');
  // ❕목표 인풋 입력값 검증 통과했는지 여부 상태관리
  const [isValid, setIsValid] = useState(true);

  const formSubmitHandler = e => {
    e.preventDefault();

    // 입력되어 엔터된 목표 공백이 0이면 검증 false !
    if (enteredText.trim().length === 0) {
      setIsValid(false);
      return;
    }

    const newGoalObject = {
      id: Math.random().toString(),
      text: enteredText
    };
    // console.log('새목표 추가: ', newGoalObject);
    //🌟🌟App 부모한테 받은 onAdd 함수를 호출하여 목표 추가하는 객체 세팅해준거 전달 !
    onAdd(newGoalObject);
    setEnteredText(''); // 새로운 목표 입력시 text 입력값 들어온 뒤 빈문자열로 상태 갱신 !
  };

  const goalChangeHandler = (e) => {
    const inputValue = e.target.value;

    // 목표 인풋 입력값 검증
    // ❕목표 인풋값이 양옆 공백(trim) 길이가 0 보다 클 때 통과 시킨다 !
    if (inputValue.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredText(e.target.value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid ? '' : 'invalid'}`}>
        <label>나의 목표</label>
        <input
          type="text"
          onChange={goalChangeHandler}
          value={enteredText}
        />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;