import React from 'react'
import './Card.css';

// 카드 모양으로 만들기 위한 UI 컴포넌트
// 모달 형태는 똑같으니 -> 모달 같은거 만들 때 좋겠다 !
const Card = ( { children, className } ) => {

    // 카드 테두리 색상 각각 다르게 주는 처리 
    const cn = 'card ' + className;

  return (
    <div className={cn}>{children}</div>
  )
}

export default Card