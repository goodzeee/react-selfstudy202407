// import "./App.css";
// import React, { useEffect, useRef, useState } from "react";
// import ExpenseList from "./components/Expenses/ExpenseList";
// import Greet from "./components/Greet";
// import Counter from "./components/practice/Counter";
// import NewExpense from "./components/new-expense/NewExpense";
// import CheckBoxStyle from "./components/practice/CheckBoxStyle";
// import CourseInput from "./components/CourseGoals/CourseInput";
// import CourseList from "./components/CourseGoals/CourseList";
// import AddUsers from "./components/Users/AddUsers";
// import UserList from "./components/Users/UserList";
// import ErrorModal from "./components/UI/Modal/ErrorModal";

// const App = () => {
//   // 서버에서 지출항목 JSON 쌩배열을 응답 받음
//   // const expenses = [
//   //   {
//   //     title: "수영장 등록",
//   //     price: 100000,
//   //     date: new Date(2024, 6 - 1, 3),
//   //   },
//   //   { title: "다이소", price: 8000, date: new Date(2024, 7 - 1, 14) },
//   //   {
//   //     title: "김밥",
//   //     price: 4900,
//   //     date: new Date(2024, 7 - 1, 25),
//   //   },
//   // ];

//   // 위 지출내역을 배열 상태변수로 관리 !
//   // 지출내역 배열로 받아서 add expense 할 수 있도록 추가
//   const [expenses, setExpenses] = useState([]);

//   // 로컬 스토리지에서 데이터 불러오기 - 새로고침해도 지출 내역 추가한거 유지되도록 하기 위한 !
//   useEffect(() => {
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses"));
//     if (savedExpenses) {
//       const updatedExpenses = savedExpenses.map((expense) => {
//         return {
//           ...expense,
//           date: new Date(expense.date), // 날짜 문자열을 Date 객체로 변환
//         };
//       });
//       setExpenses(updatedExpenses);
//     }
//   }, []);  // 빈 배열을 의존성으로 추가 => 무한루프 막고 처음 마운트될 때만 실행되게 !

//   // ❕❕ ExpenseForm에게 내려보낼 함수 -> 내려보낸 바구니에서 userInput 데이터 담아옴 !
//   const onAddExpense = (expense) => {
//     console.log('App.js가 내려보낸 함수 호출');
//     // 위에 expenses 객체에 추가하기 ! push   
    
//     // 🌟🌟 지출 내역 추가 시 로컬 스토리지에도 저장되도록 수정 !
//     setExpenses((prevExpenses) => {
//       const updatedExpenses = [...prevExpenses, expense];
//       localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
//       console.log(updatedExpenses);
//       return updatedExpenses;
//     });
//   };

//   {/* return <CheckBoxStyle />
//      <NewExpense onSave={onAddExpense}/>
//      <ExpenseList expenses={expenses} /> */}

// // 💦💦💦 new practice

//      // 기본 목표 더미 데이터 2개 넣고 시작
//      const DUMMY_DATA = [
//       {
//         id:'g1',
//         text: '리액트 컴포넌트 스타일링 마스터하기'
//       },
//       {
//         id: 'g2',
//         text: '백앤드 spring boot 마스터하기'
//       },
//      ];
//      // 기본 목표 더미 배열을 초기값으로 상태값 관리 !
//      const [goals, setGoals] = useState(DUMMY_DATA);

//      // CourseInput에게 추가할 목표 전달할 함수
//      const addGoalHandler = (goalOject) => {
//       // 기존 목표 더미 배열 복사하고 끝에 새로운 목표 추가 데이터 넣기 !
//       setGoals([...goals, goalOject]);
//      }; 

//      // CoureseItem에게 삭제를 위해 목표 아이디 전달할 함수
//      const deleteGoalHandler = (id) => {
//       console.log(id);

//       let index = -1;
//       //❕❕ 1. 목표 객체를 반복문 돌려서 일치한 아이디 찾기
//       // 인덱스로 0 ~ ++ 목표 순서대로 부여해주기 !
//       // for(let i = 0; i < goals.length; i++) {
//       //   if(goals[i].id === id) {
//       //     index = i;
//       //     break;
          
//       //   }
//       // }
//       // console.log('index: ', index);

//       //❕❕ 2. 위 for문 대신 findIndex() 사용하여 목표 하나씩 꺼내 id 일치하는지 반복문 돌려줌 !
//       goals.splice(goals.findIndex(g => g.id === id), 1); // 클릭된 목표 인덱스 1나 삭제해주기
      
//       // setGoals([...goals]);

//       //❕❕ 3. 위 필터링된 목표 아이디가 같지 않은 것만 필터링 되도록
//       // 그러면 같은 목표 아이디는 삭제된 목표 객체로 나옴.
//       setGoals(goals.filter(g => g.id !== id));
//      };

//     // <section id='goal-form'>
//     //   <CourseInput onAdd={addGoalHandler}/>
//     // </section>
//     // <section id="goals">
//     //   <CourseList items = {goals} onDelete={deleteGoalHandler}/>
//     // </section>

//     // 💦💦💦 User 등록하는 new practice

//     const [userList, setUserList] = useState([]);

//     // 💡💡 리렌더링될 때 변수에 기억을 유지하고 싶을 때 사용 !
//     const count = useRef(1);
//     console.log('count: ', count);
    
//     const addUserHandler = user => {
//       // console.log(user);
//       count.current++;
//       console.log('count.current: ', count.current);
      
//       setUserList(prev => [
//         ...prev,
//         {
//           ...user,
//           id: Math.random().toString()
//         }
//       ]);
      
//     };

//   return (
//     <>
//       {/* <ErrorModal title={'에러 모달 제목'} message={'에러 모달 내용'}/> */}
//       <AddUsers onAddUser={addUserHandler}/>
//       <UserList users={userList}/>
//     </> 
//   );
// };

// export default App;

import React, {useRef, useState} from 'react';
import './App.css';
import Home from './components/SideEffect/Home';
import MainHeader from './components/SideEffect/MainHeader';
import Login from './components/SideEffect/Login';

const App = () => {

  return (
    <>
    <MainHeader />
    <main>
      <Home />
      {/* <Login /> */}
    </main>
    </>
  );
};

export default App
