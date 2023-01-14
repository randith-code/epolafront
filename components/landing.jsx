import styles from '../styles/landingStyles/landingStyles.module.css'
import Logo from '../public/logo.svg'
import Google from '../public/google.svg'
import Locpin from '../public/bytesize_location.svg'
import Phone from '../public/carbon_phone.svg'
import Mail from '../public/fluent_mail-16-regular.svg'

export const Hero = () =>{
    return(
        <div className={styles.Hero}>
            <Logo className={styles.logo}/>
            <h2>FRESH FOOD</h2>
            <h1>DIRECTLY FROM THE FARM</h1>
            <h4>We Connect Buyers And Sellers</h4>
            <a href="/login"><button className={styles.btn}>Log In</button></a>
            <section className={styles.signin}>
                <a href="/signUp"><p>Sign Up</p></a>
                <span>|</span>
                <Google className={styles.google}/>
            </section>
        </div>
    )
}

export const Catogories = () => {
    return(
        <div className={styles.catagories}>
            <div className={styles.fruits}>
                <div>
                    <p>Fruits</p>
                </div>
            </div>
            <div className={styles.coconuts}>
                <div>
                    <p>Coconuts and Products</p>
                </div>
            </div>
            <div className={styles.plants}>
                <div>
                    <p>Plants</p>
                </div>
            </div>
            <div className={styles.vegitables}>
                <div>
                    <p>Vegitables</p>
                </div>
            </div>
            <div className={styles.spices}>
                <div>
                    <p>Spices</p>
                </div>
            </div>
        </div>
    )
}

export const Bestseller = ({seller1, seller2, seller3}) => {
    return(
        <div className={styles.Bestseller}>
            <h3>Best Sellers</h3>
            <h5>So you get to know me better</h5>
            <div className={styles.sellers}>
                <span>
                    <img src="Mark's Farm.png" alt="seller_1" />
                    <p>{seller1}</p>
                </span>
                <span>
                    <img src="Jerry's Fresh Veggies.png" alt="seller2" />
                    <p>{seller2}</p>
                </span>
                <span>
                    <img src="Marry's Dairy.png" alt="seller_3" />
                    <p>{seller3}</p>
                </span>
            </div>
        </div>
    )
}

export const Frontfooter =() => {
    return(
        <div className={styles.foot}>
           <div className={styles.partcontainer}>
            <section className={styles.trade}>
                    <h1>Trading Guide</h1>
                    <p>Security</p>
                    <p>FAQ</p>
                    <p>How to Trade</p>
                    <p>Policy</p>
                </section>
                <section className={styles.contact}>
                    <h1>Contact Us</h1>
                    <p><Locpin className={styles.pin} />2nd floor. high tower,<br/>kandy.</p>
                    <p><Phone className={styles.phone} />+94 777423483</p>
                    <p><Mail className={styles.mail} />exapmle@gmail.com</p>
                </section>
           </div>
           <p>© 2022.All Right Reserved</p>
        </div>
    )
}