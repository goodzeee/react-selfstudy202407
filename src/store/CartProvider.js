import React, {useReducer} from 'react'
import CartContext from './cart-context'

// 장바구니 기본값 - 배열, 객체 관리하기 Good !
const defaultState = {
    //💡💡 리듀서 사용 이유 ? : 상태관리를 종합관리하기 위하여 모든 상태변수를 여기다 나열하면 된다 !

    items: [] // 장바구니 배열
};

// reducer : 여러가지 복잡한 상태관리를 단순화시키며 중앙집중화한다.
// 💡💡 리듀서 함수 정의
// state: 업데이트 이전의 상태값
// action: 어떤 업데이트를 하는지 정보와 업데이트에 필요한 값을 가진 객체
const cartReducer = (state, action) => {

    console.log('action: ', action);
    console.log('업데이트 이전 상태: ', state);
    
// 💡💡계속 추가상태가 생기면 else if로 추가해서 중앙집중화 !!
    if (action.type === 'ADD') { // 장바구니에 추가하는 액션 

        return {
            // 업데이트 이전 상태인 state에 item을 복사한 뒤 새로운 action => item인 value를 붙여줌
            items: [...state.items, action.value]
        }; // 새로운 상태 - useState같은 느낌
    } else if (action.type === 'REMOVE') { // 장바구니에 삭제하는 액션

        return null;
    }
    return defaultState; // 아무것도 안했을 때 장바구니 기본값
};

// ❕cart-context에서 만든 장바구니 상태값을 가져와 쓸 컴포넌트 따로 추출하기 !
// 🌟cart-context에 정의한 데이터들 만들어서 제공하기
const CartProvider = ({children}) => {

    //🌟리듀서를 사용하여 상태 데이터를 업데이트 - 업데이트 된 상태 사용하기 위해 useReducer 사용 !
    //param1: 리듀서 함수
    //param2: 초기 상태값
    //return1: 상태객체를 사용할 수 있는 변수
    //return2: 상태업데이트를 위한 액션을 취하는 함수
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

    const addItemHandler = item => {

        //🌟🌟 액션함수는 지금 어떤 상태를 업데이트할지에 대한 액션이름과 값을 객체로 전달
        // 이 객체는 reducer함수의 2번째 파라미터인 action에 전달됨 !
        dispatchCartAction({
            type: 'ADD',
            // 전달할 item => value
            value: item,
        })
    };

    // Provider가 실제로 관리할 상태들의 구체적인 내용들 - 제공될 완성된 item !
    const cartContext = {
        cartItems: cartState.items,  // 장바구니 상태값
        addItem: addItemHandler,  // 상태를 업데이트하는 함수
        removeItem: id => {}, // "
    };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}

export default CartProvider