import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onAdd, onCancel }) => {

  // 입력칸에 있는 3개의 값을 각각의 상태값으로 관리 - 단일값 상태
  // const [title, setTitle] = useState('');
  // const [price, setPrice] = useState(0);
  // const [date, setDate] = useState(null);

  // ❕❕ 입력칸에 있는 3개의 값을 하나의 상태값으로 관리 - 객체 상태
  // 초기값에 업데이트할 상태를 객체형태로 넣어준다 !
  const [userInput, setUserInput] = useState({
    title: '',
    price: '',
    date: ''
  });

  // 오늘 날짜를 YYYY-MM-DD 형식으로 가져오는 함수
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // 1. 제목이 입력되었을 때 발생하는 이벤트 핸들러
  const titleChangeHandler = e => {
    // userInput.title = e.target.value; (X)

    // 💥💥 객체나 배열상태로 관리되는 useState 상태값은 
    // 상태변경시 새로운 객체나 배열을 setter에 전달해야 함
    // ✔ 비동기가 순서가 보장되어 있지 않아 업데이트되기 전 값을 가져올 수 있기 때문에
    // prevUserInput에 업데이트된 최신 상태를 가져와서 문제를 해결할 수 있다 !
    setUserInput(prevUserInput => ({
      ...prevUserInput,
      title: e.target.value
    }));
  };

  // 2. 가격이 입력되었을 때 발생하는 이벤트 핸들러
  const priceChangeHandler = e => {
    setUserInput({
      ...userInput,
      price: +e.target.value
    });
  };

  // 3. 날짜가 입력되었을 때 발생하는 이벤트 핸들러
  const dateChangeHandler = e => {
    setUserInput({
      ...userInput,
      date: e.target.value
    });
  };

  // 폼 전송 이벤트 핸들러
  const submitHandler = e => {
    e.preventDefault(); // 폼 전송 방지
    // console.log('폼이 전송됨!');

    // 지출 내역 객체를 생성 - 객체상태로 관리시 필요 없음 !
    // const newExpense = {
    //   title,
    //   price,
    //   date
    // };

    console.log(userInput);

    // App.js에게 받은 함수를 호출 - 하향식으로 데이터 담을 바구니 내려보낸 것 !
    //❕❕ - 내려보낸 onAdd() 바구니에 userInput 데이터를 담는다 ! -> 해당 데이터가 필요한 상향 App.js에 userInput 데이터 보내주기 !
    onAdd({
      ...userInput,
      date: new Date(userInput.date)
    });

    // form input 비우기 - 등록 후 빈문자열로 입력창에 값 비워주기
    setUserInput({
      title: '',
      price: '',
      date: ''
    });

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            onChange={titleChangeHandler} 
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="100"
            step="100"
            onChange={priceChangeHandler}
            value={userInput.price}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max={getTodayDate()}
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit" onClick={submitHandler}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;