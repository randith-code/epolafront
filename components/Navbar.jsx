import Home from '../public/Home.svg'
import Ctgry from '../public/carbon_collapse-categories.svg'
import Trnsport from '../public/Transport.svg'
import Logo from '../public/logo.svg'

import styles from '../styles/navbarStyles/navbarStyles.module.css'

const NavBar = () => {
    return(
        <div className={styles.nav}>
            <div className={styles.container} >
                <Logo className={styles.logo}/>
                <input className={styles.search} type="search" placeholder='Search...'/>
                <Home className={styles.home}/>
                <Ctgry className={styles.catagory} />
                <Trnsport className={styles.transport}/>
            </div>
            <div className={styles.profile}></div>
        </div>
    )
}

export default NavBar