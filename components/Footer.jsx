import styles from '../styles/footerStyles/footerStyles.module.css'
import Locpin from '../public/bytesize_location.svg'
import Phone from '../public/carbon_phone.svg'
import Mail from '../public/fluent_mail-16-regular.svg'

const Footer = () => {

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
                <section className={styles.user}>
                    <h1>User Details</h1>
                    <p>Your Acoount</p>
                    <p>Information</p>
                    <p>Trading History</p>
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

export default Footer