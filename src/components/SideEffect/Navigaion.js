import React from 'react'
import styles from './Navigation.module.css';
import AuthContext from '../../store/auth-context';

const Navigaion = () => {

    const loginPage = (onLogout) => (
        <>
        <li>
                <a href='/'>
                MyPage
                </a>
        </li>
        <li>
                <a href='/'>
                Admin
                </a>
        </li>
        <li>
                <button onClick={onLogout}>
                Logout
                </button>
        </li>
        </>
    );

    // if (!isLoggedIn) {
    //     renderPage = <li><button>SignUp</button></li>
    // }
    const anonymousPage = <li><button>SignUp</button></li>

  return (
    // 로그인 상태 데이터 제공해주는 App.js에서 가져와 소비하는 페이지 !
    <AuthContext.Consumer>
        {({isLoggedIn, onLogout}) => {
            return (
    <nav className={styles.nav}>
        <ul>
            {isLoggedIn ? loginPage(onLogout) : anonymousPage}
        </ul>
    </nav>
  );
}}
    </AuthContext.Consumer>
);
};

export default Navigaion