import React, { useRef, useState } from 'react'
import styles from './AddUsers.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/Modal/ErrorModal';

const AddUsers = ({onAddUser}) => {
    // 에러 상태 관리(제목, 내용) - 에러 모달창 나오는 조건문 부여를 위한 !
    const [error, setError] = useState(null);

    // ❕❕useRef로 DOM 조작하기 
    const usernameRef = useRef();
    const ageRef = useRef();

    // const [userValue, setUserValue] = useState({
    //     username: '',
    //     age: '',
    // });

    // const usernameChangeHandler = (e) => {
    //     setUserValue((prevUserValue) => ({
    //         ...prevUserValue,
    //         username: e.target.value,
    //     }));
    // };
    // const ageChangeHandler = (e) => {
    //     setUserValue((prevUserValue) => ({
    //         ...prevUserValue,
    //         age: e.target.value,
    //     }));
    // };

    // 유저 등록 함수
    const userSubmitHandler = (e) => {
        e.preventDefault();

        const userValue = {
            // 위에 useRef()로 만들어 놓은 현재값 사용하는 방법
            username: usernameRef.current.value,
            age: ageRef.current.value
        };

        // 입력값 검증 - 1. 공백일 때
        if (userValue.username.trim() === '' || userValue.age.trim() === '') {
          setError({
            title: '유효하지 않은 입력값 입니다.',
            message: '입력값은 공백으로 작성하면 안됩니다.'
        });
            return;
    }

    // 2. 나이가 0이거나 음수일 때 입력값 검증
    if (+userValue.age < 1) {
        setError({
            title: '유효하지 않은 나이 범위 입니다.',
            message: '나이는 0이나 음수가 될 수 없습니다.'
        });
            return;
    }

    // App.js에서 유저 추가하는 객체 가져오기
    onAddUser(userValue);
    // 추가되면 공백으로 세팅 마무리
    // setUserValue({
    //     username: '',
    //     age: '',
    // });
}

// 하위 컴포넌트 ErrorModal에게 모달을 닫는 조건을 수행하는 함수 전달
const modalCloseHandler = () => {
    // 위 입력값 검증에서 true가 된 상태를 다시 돌려줘서 닫기 !
    setError(null);
};

  return (
    <>
    {/* 에러가 널이 아니면 에러 모달창 보여지게 해라 - 모달창 닫는 조건 함수 보내기 */}
    {error ? <ErrorModal onClose={modalCloseHandler} title={error.title} message={error.message}/> : ''}
    <Card className={styles.input}>
        <form onSubmit={userSubmitHandler}>
            <label htmlFor='username'>이름</label>
            <input
            id='username'
            type='text'
            ref={usernameRef}
            //onChange={usernameChangeHandler}
            //value={userValue.username}
            />
            <label htmlFor='age'>나이</label>
            <input
            id='age'
            type='number'
            ref={ageRef}
            //onChange={ageChangeHandler}
            //value={userValue.age}
            />
            <Button type='submit'>가입하기</Button>
        </form>
    </Card>
    </>
  )
}

export default AddUsers