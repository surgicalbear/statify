import {FaMusic} from 'react-icons/fa';
import Login from './Login'
import styles from '@/app/_styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Statify<Logo /></div>
      <div className={styles.logincontainer}>
        <Login />
      </div>
    </div>
  );
}

const Logo = () =>(
    <span className={styles.logoicon}>
        <FaMusic />
    </span>
)
export default Navbar;