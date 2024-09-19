import React from 'react'
import CartContext from './cart-context'

// 장바구니 기본값
const defaultState = {
    items: [] // 장바구니 배열
};

// reducer : 여러가지 복잡한 상태관리를 단순화시키며 중앙집중화한다.
// 리듀서 함수 정의
// state: 업데이트 이전의 상태값
// action: 어떤 업데이트를 하는지 정보와 업데이트에 필요한 값을 가진 객체
const cartReducer = (state, action) => {
// 💡💡계속 추가상태가 생기면 else if로 추가해서 중앙집중화 !!
    if (action.type === 'ADD') { // 장바구니에 추가하는 액션 

        return null; // 새로운 상태
    } else if (action.type === 'REMOVE') { // 장바구니에 삭제하는 액션

        return null; // 새로운 상태
    }
    return defaultState; // 아무것도 안했을 때 장바구니 기본값
};

// ❕cart-context에서 만든 장바구니 상태값을 가져와 쓸 컴포넌트 따로 추출하기 !
// 🌟cart-context에 정의한 데이터들 만들어서 제공하기
const CartProvider = ({children}) => {

    // Provider가 실제로 관리할 상태들의 구체적인 내용들
    const cartContext = {
        cartItems: [],  // 장바구니 상태값
        addItem: item => {},  // 상태를 업데이트하는 하무
        removeItem: id => {}, // "
    };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}

export default CartProvider