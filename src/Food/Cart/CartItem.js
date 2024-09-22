import React, { useContext } from 'react';
import styles from './CartItem.module.scss';
import CartContext from '../../store/cart-context';

// 장바구니 하나에 정보를 갖는 컴포넌트 !
const CartItem = ({cart}) => {

    const { addItem } = useContext(CartContext);
 
    const {id, name, price, amount} = cart;

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

    const cartAddHandler = e => {
      console.log('addItem 호출됨');
      

      // 장바구니에 보낼 객체
      const item =  {
        ...cart,
        amount: 1,
      };
      
      addItem(item);
    }

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
        <button>-</button>
        <button onClick={cartAddHandler}>+</button>
      </div>
    </li>
  )
}

export default CartItem