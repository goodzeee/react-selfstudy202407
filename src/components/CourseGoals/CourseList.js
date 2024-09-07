import React from 'react';
import './CourseList.css';
import CourseItem from './CourseItem';

const CourseList = ({items}) => {
  return (
    <ul className='goal-list'>
        {
            // 더미 데이터 items 가져와서 목표 텍스트 반복하여 리스트 채우기
            items.map(item => <CourseItem key={item.id} item={item}/>)
        }
    </ul>
  );
};

export default CourseList