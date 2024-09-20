import React, { forwardRef } from 'react'
import styles from './Input.module.scss';

// ❕❕ref는 평범히 props로 전달하는게 안되어서 forwardRef() 추가 후
// ❕❕props 부분에 () 소괄호를 추가하고 기존 props와 나눠서 가져온다 !
const Input = forwardRef(({label, inputAttr}, ref) => {
  return (
    <div className={styles.input}>
        <label>{label}</label>
        <input ref={ref} {...inputAttr} />
    </div>
  )
});

export default Input