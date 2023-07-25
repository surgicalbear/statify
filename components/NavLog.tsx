import {FaMusic} from 'react-icons/fa';
import Link from 'next/link';
import styles from '@/app/_styles/Navbar.module.css';
import {Button} from './ui/button'
const NavLogged = () => {
  return (
    <div className={styles.changebg}>
      <div className={styles.navbar}>
        <div className={styles.logo}>Statify<Logo /></div>
          <div className={styles.ButtonDiv}>
            <Link className = 'home-link' href ="/">
                <Button variant="outline">Home</Button>
            </Link>  
          </div>
      </div>
    </div>
  );
}

const Logo = () =>(
    <span className={styles.logoicon}>
        <FaMusic/>
    </span>
)
export default NavLogged;