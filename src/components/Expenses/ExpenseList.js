import React from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter';

const ExpenseList = ({ expenses }) => {

  const onFilterChange = (filteredYear) => {
    // ExpenseFilter에 있는 선택된 연도값을 여기서 출력 !
    console.log('ExpenseList:', filteredYear);
  };

  return (
    <div className='expenses'>

      <ExpenseFilter onChangeFilter={onFilterChange}> </ExpenseFilter>

      {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        expenses.map((expense, index) => (
          <ExpenseItem
          key={index}
          title={expense.title}
          price={expense.price}
          date={expense.date}
          />
        ))
      )}

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