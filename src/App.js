import "./App.css";
import React, { useEffect, useState } from "react";
import ExpenseList from "./components/Expenses/ExpenseList";
import Greet from "./components/Greet";
import Counter from "./components/practice/Counter";
import NewExpense from "./components/new-expense/NewExpense";
import CheckBoxStyle from "./components/practice/CheckBoxStyle";
import CourseInput from "./components/CourseGoals/CourseInput";
import CourseList from "./components/CourseGoals/CourseList";

const App = () => {
  // 서버에서 지출항목 JSON 쌩배열을 응답 받음
  // const expenses = [
  //   {
  //     title: "수영장 등록",
  //     price: 100000,
  //     date: new Date(2024, 6 - 1, 3),
  //   },
  //   { title: "다이소", price: 8000, date: new Date(2024, 7 - 1, 14) },
  //   {
  //     title: "김밥",
  //     price: 4900,
  //     date: new Date(2024, 7 - 1, 25),
  //   },
  // ];

  // 위 지출내역을 배열 상태변수로 관리 !
  // 지출내역 배열로 받아서 add expense 할 수 있도록 추가
  const [expenses, setExpenses] = useState([]);

  // 로컬 스토리지에서 데이터 불러오기 - 새로고침해도 지출 내역 추가한거 유지되도록 하기 위한 !
  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (savedExpenses) {
      const updatedExpenses = savedExpenses.map((expense) => {
        return {
          ...expense,
          date: new Date(expense.date), // 날짜 문자열을 Date 객체로 변환
        };
      });
      setExpenses(updatedExpenses);
    }
  }, []);  // 빈 배열을 의존성으로 추가 => 무한루프 막고 처음 마운트될 때만 실행되게 !

  // ❕❕ ExpenseForm에게 내려보낼 함수 -> 내려보낸 바구니에서 userInput 데이터 담아옴 !
  const onAddExpense = (expense) => {
    console.log('App.js가 내려보낸 함수 호출');
    // 위에 expenses 객체에 추가하기 ! push   
    
    // 🌟🌟 지출 내역 추가 시 로컬 스토리지에도 저장되도록 수정 !
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, expense];
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
      console.log(updatedExpenses);
      return updatedExpenses;
    });
  };

  {/* <CheckBoxStyle />
     <NewExpense onSave={onAddExpense}/>
     <ExpenseList expenses={expenses} /> */}

// 💦💦💦 new practice

     // 기본 목표 더미 데이터 2개 넣고 시작
     const DUMMY_DATA = [
      {
        id:'g1',
        text: '리액트 컴포넌트 스타일링 마스터하기'
      },
      {
        id: 'g2',
        text: '백앤드 spring boot 마스터하기'
      },
     ];
     // 기본 목표 더미 데이터를 초기값으로 상태값 관리 !
     const [goals, setGoals] = useState(DUMMY_DATA);

  return (
     <div>
      <section id='goal-form'>
        <CourseInput />
      </section>
      <section id="goals">
        <CourseList items = {goals}/>
      </section>
    </div> 
  );
};

export default App;
