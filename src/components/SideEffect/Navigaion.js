import React, { useContext } from 'react'
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

    // 복잡한 Consumer 사용 대신 useContext(); 로 사용하기
    const {isLoggedIn, onLogout} = useContext(AuthContext);

    return (
        <nav className={styles.nav}>
            <ul>
                {isLoggedIn ? loginPage(onLogout) : anonymousPage}
            </ul>
        </nav>
      );
};

export default Navigaion