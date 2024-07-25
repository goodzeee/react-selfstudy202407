import './App.css';
import React from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';


const App = () => {

  return (
    <>
     <ExpenseItem title="하하호호" price={4900}/>
     <ExpenseItem title="낄낄깔깔" price={8000}/>
     <ExpenseItem title="꾸꾸까까" price={6800}/>
    </>
  );
}

export default App;
