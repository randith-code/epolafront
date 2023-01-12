import Home from '../public/Home.svg'
import Ctgry from '../public/carbon_collapse-categories.svg'
import Trnsport from '../public/Transport.svg'
import Logo from '../public/logo.svg'

import styles from '../styles/navbarStyles/navbarStyles.module.css'

const NavBar = () => {
    return(
        <div className={styles.nav}>
            <div className={styles.container} >
                <a href="/homeFeed"><Logo className={styles.logo}/></a>
                <input className={styles.search} type="search" placeholder='Search...'/>
                <a href="/homeFeed"><Home className={styles.home}/></a>
                <Ctgry className={styles.catagory} />
                <Trnsport className={styles.transport}/>
            </div>
            <a href="/profile"><div className={styles.profile}></div></a>
        </div>
    )
}

export default NavBar