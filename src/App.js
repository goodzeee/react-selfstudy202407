import "./App.css";
import React from "react";
import ExpenseList from "./components/Expenses/ExpenseList";
import Greet from "./components/Greet";
import Counter from "./components/practice/Counter";
import NewExpense from "./components/new-expense/NewExpense";
import CheckBoxStyle from "./components/practice/CheckBoxStyle";

const App = () => {
  // 서버에서 지출항목 JSON 배열을 응답 받음
  const expenses = [
    {
      title: "수영장 등록",
      price: 100000,
      date: new Date(2024, 6 - 1, 3),
    },
    { title: "다이소", price: 8000, date: new Date(2024, 7 - 1, 14) },
    {
      title: "김밥",
      price: 4900,
      date: new Date(2024, 7 - 1, 25),
    },
  ];

  // ❕❕ ExpenseForm에게 내려보낼 함수 -> 내려보낸 바구니에서 userInput 데이터 담아옴 !
  const onAddExpense = (userInput) => {
    console.log('App.js가 내려보낸 함수 호출');
    console.log(userInput);
    // 위에 expenses 객체에 추가하기 ! push   
    expenses.push(userInput);
  }

  return (
    <>
     <CheckBoxStyle />
     <NewExpense onSave={onAddExpense}/>
     <ExpenseList expenses={expenses} />
    </>
  );
};

export default App;
