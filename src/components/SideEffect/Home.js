import React, { useContext } from 'react'
import Card from '../UI/Card';
import styles from './Home.module.css';
import Button from '../UI/Button';
import AuthContext from '../../store/auth-context';


const Home = () => {

  // Consumer 대신 간단히 사용할 수 있는 useContext(사용할 파일);
  const {onLogout} = useContext(AuthContext);

  return (
    <Card className={styles.home}>
      <h1>Welcome back !</h1>
      <Button onClick={onLogout}>Logout</Button>
    </Card>
  ) 

};

export default Home