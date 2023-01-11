import Logo from '../public/logo.svg'
import styles from '../styles/loginStyles/loginStyles.module.css'

import {Frontfooter} from '../components/landing'

const Login = () => {
    return(
        <div className={styles.container}>
            <div className={styles.headBanner}>
                <Logo className={styles.logo} />
            </div>
            <h1>Login to e-Pola ...</h1>
            <div className={styles.fields}>
                <form action="">
                    <label htmlFor="email">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;
                        <input type="email" />
                    </label><br/>
                    <label htmlFor="password">Password &nbsp; | &nbsp;
                        <input type="password" />
                    </label><br/>
                    <span className={styles.btn}>
                        <button className={styles.loginbtn}>Log in</button>
                        <button className={styles.clearbtn}>Clear</button>
                    </span>
                </form>
            </div>
            <Frontfooter/>
        </div>
    )
}

export default Login

Login.getLayout = function pageLayout(page){
    return(
        <>
            {page}
        </>
    )
}