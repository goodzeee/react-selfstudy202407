import React from 'react';
// portal을 사용하기 위한 불러오기
import ReactDOM from 'react-dom';

import Card from '../Card';
import Button from '../Button';
import styles from './ErrorModal.module.css';
// import Portal from '../Portal/Portal';

// return문에 있는 백드롭 태그 추출하기
const BackDrop = ({ onClose }) => {
  return (
    <div className={styles.backdrop} onClick={onClose}></div>
  );
};

// return문에 백드롭 밑에 오버레이 부분 태그 추출하기
const ModalOverlay = ({ title, message, onClose }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onClose}>Okay</Button>
      </footer>
    </Card>
  );
};

// 에러 모달창 - 제목, 내용, 닫는 이벤트
const ErrorModal = ({ title, message, onClose }) => {
  return (
    <>
       {
        ReactDOM.createPortal(
          <BackDrop onClose={onClose} />,
          // 백드롭을 index.html에 만든 'backdrop-root' 아이디에 태워 보낸다 (포탈)
          document.getElementById('backdrop-root')
        )
      }
      {
        ReactDOM.createPortal(
          <ModalOverlay title={title} message={message} onClose={onClose}/>,
          document.getElementById('overlay-root')
        )
      }

    {/* ❕ 리팩토링 : 한 파일에서 만든 태그 가져와서 특정 위치에 return 할 수 있음 */}
    {/* <BackDrop onClose={onClose} />
    <ModalOverlay title={title} message={message} onClose={onClose}/> */}
    
    {/* <div className={styles.backdrop} onClick={onClose}></div> */}
        {/* <Card className={styles.modal}>
            <header className={styles.header}> 
                <h2> {title}
                </h2>
                </header>
                    <div className={styles.content}>
                        <p> {message} </p>
                    </div>
                    <footer className={styles.actions}>
                        <Button onClick={onClose}>Okay</Button>
                    </footer>
        </Card> */}
    </>
  );
};

export default ErrorModal;