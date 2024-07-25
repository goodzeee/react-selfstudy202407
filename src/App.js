import './App.css';
import React from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';


const App = () => {

  // 서버에서 지출항목 JSON 배열을 응답 받음
  const expenses = [{
    title: '수영장 등록',
    price: 100000,
    date: new Date(2024, 6 - 1, 3)
  },
  { title: '다이소',
    price: 8000,
    date: new Date(2024, 7 - 1, 14)
  },
  {
    title: '김밥',
    price: 4900,
    date: new Date(2024, 7 - 1, 25)
  }
]

  return (
    <>
     <ExpenseItem title={expenses[0].title} price={expenses[0].price} date={expenses[0].date} />
     <ExpenseItem title={expenses[1].title} price={expenses[1].price} date={expenses[1].date} />
     <ExpenseItem title={expenses[2].title} price={expenses[2].price} date={expenses[2].date} />
    </>
  );
}

export default App;
