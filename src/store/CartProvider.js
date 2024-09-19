import React from 'react'
import CartContext from './cart-context'

// ❕cart-context에서 만든 장바구니 상태값을 가져와 쓸 컴포넌트 따로 추출하기 !
const CartProvider = ({children}) => {

    // 🌟cart-context에 정의한 데이터들 만들어서 제공하기
  return (
    <CartContext.Provider>{children}</CartContext.Provider>
  )
}

export default CartProvider