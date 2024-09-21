import React, { useContext } from 'react';
import styles from './MealItem.module.scss';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

// MealItemForm 자식한테 수량 정보만 끌어오면 장바구니에 보낼 수량 정보 완성됨 !!
const MealItem = ({id, price, description, name}) => {

  // Context에서 중앙관리되는 데이터들을 한 번에 소비할 수 있는 hook !
  const {addItem} = useContext(CartContext);

  const { meal, description: desc, price: priceStyle } = styles;

  const formatPrice = new Intl.NumberFormat("ko-KR").format(price);

  // ❕MealItemForm에서 선택한 수량값을 끌어올려줄 함수
  const addToCartHandler = (amount) => {
    // 장바구니에 보낼 객체
    const item = {
      id: id,
      name: name,
      // 선택한 수량값인 amount만 가져오면 됨 !
      amount: +amount,
      price: price,
    }
    console.log('action: ', item);
    addItem(item);
  };

  return (
    <li className={meal}>
      <div>
        <h3>{name}</h3>
        <div className={desc}>{description}</div>
        <div className={priceStyle}>{formatPrice}원</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;