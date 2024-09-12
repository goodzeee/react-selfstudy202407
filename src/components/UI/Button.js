import React from 'react';
import styles from './Button.module.css';
// 스타일 클래스명 중복되지 않게 해주는 라이브러리
// import styled from 'styled-components'; 

// // &:focus => 상위 부모에 추가 스타일링을 하기 위한 !
// const Button = styled.button`
//     font: inherit;
//     border: 1px solid #4f005f;
//     background: #4f005f;
//     color: white;
//     padding: 0.75rem 3.5rem;
//     cursor: pointer;
//     font-size: 1.15rem;
//     border-radius: 30px; 
    
//     &:focus {
//       outline: none;
//     }
    
//     &:hover,
//     &:active {
//       background: #741188;
//       border-color: #741188;
//       box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//     }
//     `;

const Button = ({ type, onClick, children, className, disabled}) => {
  return (
    <button
      type={type || 'button'}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;