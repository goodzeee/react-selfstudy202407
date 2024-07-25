import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

export const ExpenseItem = ({date, title, price: exPrice}) => {  // 디스턱처링하여 앞에 붙이지 않고 꺼내서 단순하게 사용 !
    // console.log('props: ', aaa);

    //변수 선언
    const expenseDate = date;
    const expenseTitle = title;  // props 파라미터 객체값을 가져와서 사용 !
    const expensePrice = exPrice;

    // 함수 선언

    // 1자리 숫자를 2자리수로 변환하는 함수
    // const make2digit = (text) => {
    //     return text.toString().padStart(2, '0');
    // };

    // const makeFormattedDate = () => {
    //     const year = date.getFullYear();
    //     const month = date.getMonth();
    //     const day = date.getDate();

    //     return `${year}년 ${month}월 ${make2digit(day)}일`;
    // };

    // 원화 표기법으로 변환
    const formattedPrice = new Intl.NumberFormat('ko-KR').format(expensePrice);

    // 이벤트 핸들러 선언
    const clickHandler = e => {
        console.log('버튼 클릭함 !');

        // const $price = document.querySelectorAll('.expense-item__price');
        // console.log($price);
    }

  return (
    <Card className='expense-item'>
        {/* 날짜처리하는 컴포넌트 별도로 처리 ! */}
        <ExpenseDate exDate={date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>{formattedPrice}원</div>
        </div>

        <button id='btn' onClick={clickHandler}>버튼1</button>
        <button id='btn2' onMouseOver={e => { alert('허허 !'); }}>버튼2</button>
    </Card>
  )
}

export default ExpenseItem;
