import Login from './Login'
import styles from '@/app/_styles/Welcome.module.css';
import '@/app/./global.css'

const Welcome = () =>{
    return(
        <>
            <div className={styles.filler}></div>
            <div className={styles.confined}>
                <div>
                    <h2>Welcome to Statify</h2>
                </div>
                <div className='middle'>
                    <h4>Discover your spotify statistics</h4>
                    <Login />
                </div>
            </div>
        </>
    )
}

export default Welcome