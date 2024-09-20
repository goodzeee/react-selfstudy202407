import React from 'react'
// import Header from './components/Food/Layout/Header';
import styles from './Header.module.scss'
// 정적 이미지 로딩
import mealsImg from '../../assets/img/meals.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = ({onShowCart}) => {
    // scss 모듈로 스타일링 리팩토링 !
    const {header, 'main-image': mainImage} = styles;

  return (
    <>
    <header className={header}>
        <h1>React Meals</h1>
        <HeaderCartButton onShow={onShowCart}/>
    </header>
    <div className={mainImage}>
        <img src={mealsImg} alt='meals image'/>
    </div>
    </>
  )
}

export default Header