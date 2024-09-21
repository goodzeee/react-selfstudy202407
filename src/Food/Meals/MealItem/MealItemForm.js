import React, { useRef, useState } from 'react';
import styles from './MealItemForm.module.scss';
import Input from '../../../components/UI/Input/Input';

// 선택한 상품 수량 정보만 갖고 있음.
const MealItemForm = ( {id, onAddToCart} ) => {

  // 선택한 수량 값
  // const [amount, setAmount] = useState(0);

  // 선택한 수량 값 가져오기
  const inputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    // 현재 선택된 상품에 수량 값 ! - MealItem에 보낼거 !
    const amount = inputRef.current.value;
    console.log('amount: ', amount);
    
    onAddToCart(amount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {/* <input ref={inputRef} type='number' /> */}
      {/* ref는 props로 전달이 안된다 !! */}
      <Input
        ref={inputRef}
        label='수량'
        inputAttr={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      /> 
      <button>담기</button>
    </form>
  );
};

export default MealItemForm;