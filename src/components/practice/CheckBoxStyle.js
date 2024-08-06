import React, { useState } from 'react';
import './CheckBoxStyle.css'; 

// 체크박스, 라디오박스 등 기본 디자인이 별로이니 이렇게 숨겨놓고 스타일 처리할 수 있다 !
function CheckBoxStyle() {

    // 체크상태를 관리
    const [isChecked, setIsChecked] = useState(false);

    // 업데이트된 체크상태를 반대로 !
    const checkChangeHandler = e => {
        setIsChecked(!isChecked);
    }

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id="styled-checkbox"
        checked={isChecked}
        onChange={checkChangeHandler}
      />
      <label
        htmlFor="styled-checkbox"
        className={isChecked ? 'checked' : 'unchecked'}
      >
        Check me!
      </label>
    </div>
  );
}

export default CheckBoxStyle;