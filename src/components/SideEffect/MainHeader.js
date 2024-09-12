import React from 'react'
import styles from './MainHeader.module.css';
import Navigaion from './Navigaion';

const MainHeader = () => {
  return (
    <header className={styles['main-header']}>
        <h1>
            나의 리액트 페이지
        </h1>
        <Navigaion />
    </header>
  )
}

export default MainHeader