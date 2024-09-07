import React from 'react'
import './CourseItem.css';

const CourseItem = ({ item }) => {
  return (
    <li className='goal-item'>
        {/* item으로 목표 더미 데이터 불러와서 여기에 담기 ! */}
        {item.text}
    </li>
  )
}

export default CourseItem