import React from 'react'
import styles from './Navigation.module.css';

const Navigaion = ({onLogout}) => {
  return (
    <nav className={styles.nav}>
        <ul>
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
        </ul>
    </nav>
  )
}

export default Navigaion