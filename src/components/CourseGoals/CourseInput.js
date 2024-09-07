import React, { useState } from 'react';
import './CourseInput.css';
import Button from '../UI/Button';

const CourseInput = () => {

  return (
    <form>
      <div className='form-control'>
        <label>나의 목표</label>
        <input
          type="text"
        //   onChange={goalChangeHandler}
        //   value={enteredText}
        />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;