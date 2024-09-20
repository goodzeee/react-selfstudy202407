import React, { useRef, useState } from 'react';
import styles from './MealItemForm.module.scss';
import Input from '../../../components/UI/Input/Input';

const MealItemForm = ( props ) => {

  // 선택한 수량 값
  const [amount, setAmount] = useState(0);

  // 선택한 수량 값 가져오기
  const inputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    const selectedValue = inputRef.current.value;
    console.log('select: ', selectedValue);
    
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {/* <input ref={inputRef} type='number' /> */}
      {/* ref는 props로 전달이 안된다 !! */}
      <Input
        ref={inputRef}
        label='수량'
        inputAttr={{
          id: 'amount_' + props.id,
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