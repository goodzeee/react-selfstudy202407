import React from 'react';
import styles from './CartItem.module.scss';

// 장바구니 하나에 정보를 갖는 컴포넌트 !
const CartItem = ({cart}) => {

    const {name, price, amount} = cart;

    // scss 리팩토링
    const {
        'cart-item': cartItem,
        summary,
        price: priceStyle,
        amount: amountStyle,
        actions,
        button
    } = styles;

    const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

  return (
    <li className={cartItem}>
      <div>
        <h2>{name}</h2>
        <div className={summary}>
            <span className={priceStyle}>{formatPrice}</span>
            <span className={amountStyle}>x {amount}</span>
        </div>
      </div>
      <div className={actions}>
        <button className={button}>-</button>
        <button>+</button>
      </div>

    </li>
  )
}

export default CartItem