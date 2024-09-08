import React from 'react'
import './CourseItem.css';

const CourseItem = ({ item, onDelete }) => {

  // 삭제 = 상향식 데이터 전달 => App.js에게 삭제 대상 id를 전달
  const deleteHandler = e => {
    console.log('목표 리스트에 추가된 각 목표글 클릭시 삭제해줘 !');
    
    onDelete(item.id); // App.js > CourseList > CourseItem 으로 전달받은 목표 아이디 삭제 !
  }

  return (
    // 하나에 목표 텍스트 담는 li태그
    <li className='goal-item' onClick={deleteHandler}>
        {/* item으로 목표 더미 데이터 불러와서 여기에 담기 ! */}
        {item.text}
    </li>
  )
}

export default CourseItem