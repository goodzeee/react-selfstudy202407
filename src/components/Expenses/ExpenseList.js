import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter';

const ExpenseList = ({ expenses }) => {
  // 🌟🌟선택된 연도로 필터링된 지출내역을 재렌더링하기 위해 상태값으로 관리 !!
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());

  const onFilterChange = (filteredYear) => {
    // ExpenseFilter에 있는 선택된 연도값을 여기서 출력 !
    console.log('ExpenseList:', filteredYear);
    // 재렌더링할 필터링된 상태값
    setFilteredYear(filteredYear);
  };

  // App.js에서 받은 지출내역 배열을 <ExpenseItem> 배열로 변환하는 함수
  // 1. 새로운 배열 만들어서 객체 반복문 돌려서 추가 렌더링하기
  // 2. map 사용하여 지출내역 렌더링 하기
  // 3. map 사용한걸 return문에 바로 사용하여 동적 렌더링
  const convertToComponentArray = () => {
    const mappedArray = expenses.map(ex => <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />);
    // const newArray = [];

    // for (const ex of expenses) { // ex -> 지출내역 객체 하나하나씩 꺼냄
    //   const tag = <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />
    //   newArray.push(tag);
    // }
    return mappedArray;
  };

  // 연도로 필터링한 배열
  const filteredExpenses = expenses.filter((expense) => 
    expense.date.getFullYear().toString() === filteredYear.toString());

  // 🌟🌟조건부 렌더링
  // 지출 데이터가 있을 때 보여줄 태그
  const expenseContent = filteredExpenses.map((expense) => (
    <ExpenseItem
    key={Math.random().toString()}
    title={expense.title}
    price={expense.price}
    date={expense.date}
    />
  ));

  // 지출 데이터가 없을 때 보여줄 태그
  const noExpense = <p>지출 항목이 없습니다.</p>

  return (
    <div className='expenses'>
      {/* {[<h1>하하호호</h1>]} 🌟🌟배열에 태그 담으면 알아서 추가된 렌더링을 해줌. */}

      <ExpenseFilter onChangeFilter={onFilterChange}/>
      {/* 새로운 배열로 지출내역 하나하나 가져오고 새내역 추가해주는 배열 ! */}
      {/* { convertToComponentArray }  */}

      {/* {filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
          key={Math.random().toString()}
          title={expense.title}
          price={expense.price}
          date={expense.date}
          />
        ))
      )} */}
      {filteredExpenses.length === 0 ? noExpense : expenseContent}

        {/* <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      /> */}
    </div>
  );
};

export default ExpenseList