import React, { useContext } from 'react'
import styles from './Cart.module.scss';
import CartModal from './CartModal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

// const DUMMY_CART = [
//       {
//         id: 'c1',
//         name: '스시',
//         amount: 2,
//         price: 46000,
//       },
//       {
//         id: 'c2',
//         name: '띠드버거',
//         amount: 1,
//         price: 12000,
//       },
//     ];

    const Cart = ({ onClose }) => {

      // CartProvider에서 CartContext에 제공할 provider 3개를 갖고 있는 것 ! 
      // CartContext에 장바구니 배열만 필요해 !
      const {cartItems} = useContext(CartContext);

      const {
          'cart-items': cartItemStyle,
          total,
          actions,
          'button--alt': btnAlt,
          button,
        } = styles;

        return(
            <CartModal onClose={onClose}>
              {/* 주문 내역 */}
              <ul className={cartItemStyle}>
                {cartItems.map((cartItem) => (
                  // {/*  <li key={cartItem.id}>
                  //    {cartItem.name}
                  //  </li> */}
                  <CartItem 
                  key={cartItem.id}
                  cart={cartItem}
                  />
                ))}
              </ul>
              <div className={total}>
                <span>주문 총액</span>
                <span>58,000원</span>
              </div>
              <div className={actions}>
                <button
                  className={btnAlt}
                  onClick={onClose}
                  >
                  닫기
                </button>
                <button className={button}>주문</button>
              </div>
            </CartModal>
          );
        };

export default Cart