import React, { useContext, useEffect, useState } from 'react'
import CartIcon from './CartIcon'
import styles from './HeaderCartButton.module.scss';
import CartContext from '../../store/cart-context';

const HeaderCartButton = ({onShow}) => {

   // bump 애니메이션을 제어하는 상태변수 - 장바구니에 상품이 담길 때 효과 주기 !
    const [isBump, setIsBump] = useState(false);

    // 장바구니 배열
    const {cartItems} = useContext(CartContext);

    const numberOfCart = cartItems.reduce((accum, current) => accum + current.amount, 0);
    
    const {button, icon, badge, bump} = styles;

    useEffect(() => {
      // 맨처음 화면에서는 애니메이션 효과 안주게
      if (cartItems.length === 0) return;

      setIsBump(true);

      // 애니메이션 실행 후 클래스 제거 - 그래야 false -> true -> f ... 반복해서 추가될 때마다 애니메이션 효과 !
      const timer = setTimeout(() => {
        setIsBump(false);
      }, 300);  

      // 연속으로 눌렀을 때 애니메이션 버벅이는거 없애는 최적화 작업 !
      return() => clearTimeout(timer);

    }, [cartItems]);
    
  return (
    <button className={`${button} ${isBump ? bump : undefined}`} onClick={onShow}>
        <span className={icon}>
            <CartIcon/>
        </span>
        <span>My Cart</span>
        <span className={badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton