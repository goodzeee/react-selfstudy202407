import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

export const ExpenseItem = ({date, title, price: exPrice}) => {  // 디스턱처링하여 앞에 붙이지 않고 꺼내서 단순하게 사용 !
    // console.log('props: ', aaa);

    // 함수 선언

    // 💡💡useState는 컴포넌트의 상태값을 관리하며 이 상태값은 렌더링에 영향을 미침
    /*
      - useState 훅의 리턴값은 배열이며
      - 첫번째 요소는 관리할 상태값의 초기값
      - 두번째 요소는 해당 상태값을 변경할 때 사용하는 setter 함수
    */
    const [itemTitle, setItemTitle] = useState(title);
    // console.log('abc: ', abc);

    // 원화 표기법으로 변환
    const formattedPrice = new Intl.NumberFormat('ko-KR').format(exPrice);

    // 이벤트 핸들러 선언
    const clickHandler = e => {
        /*
          - useState가 관리하는 상태값은 반드시 setter로만 변경해야 한다 !
        */
      if(itemTitle === '짜장면') {
        setItemTitle(title);
      } else {
        setItemTitle('짜장면');
      }
        console.log('버튼 클릭함 !');
    };

  return (
    <Card className='expense-item'>
        {/* 날짜처리하는 컴포넌트 별도로 처리 ! */}
        <ExpenseDate exDate={date}/>
        <div className='expense-item__description'>
            <h2>{itemTitle}</h2>
            <div className='expense-item__price'>{formattedPrice}원</div>
        </div>

        <button id='btn' onClick={clickHandler}>제목 수정</button>
    </Card>
  )
}

export default ExpenseItem;
