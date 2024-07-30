import React, { useState } from 'react'

const Counter = () => {

    // 숫자 증감 시키는 컴포넌트 => 숫자 증감 상태를 useState로 처리하여 클릭이벤트에 넣어주면 됨 !
    const [count, setCount] = useState(0);

    const increaseHadler = e => {
        // useState의 setter는 상태값을 업데이트할 때
        // 렌더링 전까지 이전 상태값을 참조함 -> 둘 다 초기값인 0을 기준으로 + 1이 되는 문제 ! 
        // setCount(count + 1);
        // setCount(count + 1);

        // ❕❕ 해결방법 : 함수형 업데이트를 사용
        setCount((prev) => {
            console.log('변경 이전값 : ', prev);

            // 변경 이후값을 반환
            return prev + 1;
        });
        // 추가 + 2 개씩 카운팅 되는거 !
        // setCount(count => count + 1);

        // 상태값의 변경은 실시간으로 일어나지 않음.
        // ❕❕ 해결방법 : useEffect 훅으로 해결 
        console.log('변경 이후값 : ', count);
    };

  return (
    <div>
        <h1>숫자 : {count}</h1>
        <button onClick={increaseHadler}>증가</button>
        <button onClick={e => setCount(count - 1)}>감소</button>
    </div>
  );
};

export default Counter