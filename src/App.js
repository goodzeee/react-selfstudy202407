import "./App.css";
import React from "react";
import ExpenseList from "./components/Expenses/ExpenseList";
import Greet from "./components/Greet";
import Counter from "./components/practice/Counter";

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

  return (
    <>
     <Counter />
     <ExpenseList expenses={expenses} />
    </>
  );
};

export default App;
