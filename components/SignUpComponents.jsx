import styles from '../styles/signUpStyles/signUpStyles.module.css'

import Logo from '../public/logo.svg'
import { useState } from 'react'

export const Banner = () =>{
    return(
        <div className={styles.banner}>
            <Logo className={styles.logo}/>
        </div>
    )
}

export const UserInfo = () => {

    const [userType, setUserType] = useState("Seller")

    return(
        <div className={styles.formContainer}>
            <div className={styles.getUserType}>
                <span className={styles.getUserIn}>
                    <p>Join as ...</p>
                    <select name={userType} onChange={e=>setUserType(e.target.value)} id="userType">
                        <option value="Seller">Seller</option>
                        <option value="Buyer">Buyer</option>
                    </select>
                </span>
                <hr />
            </div>
            {userType == "Seller" ? <SellerForm/> : <BuyerForm/>}
        </div>
    )
}

const SellerForm =() => {
    return(
        <form action="" className={styles.seller}>
            <label htmlFor="firstName">
                First name
                <input type="text" name='firstName' />
            </label>
            <label htmlFor="lastName">
                Last name
                <input type="text" name='lastName' />
            </label>
            <label htmlFor="userName">
                User name
                <input type="text" name='userName' />
            </label>
            <label htmlFor="password">
                Password
                <input type="password" name='password' />
            </label>
            <label htmlFor="retypePassword">
                Retype the Password
                <input type="password" name='retypePassword' />
            </label>
            <label htmlFor="contact" className={styles.contact}>
                Contact
                <span>
                    <input type="email" name='email' placeholder='E-mail' />
                    <input type="text" name='phone' placeholder='Phone Number' />
                </span>
            </label>
            <label htmlFor="Location" className={styles.location}>
                Location
                <span>
                    <input type="text" name='address' placeholder='Address'/>
                    <input type="text" name='nearestTown' placeholder='Nesarest Town'/>
                    <input type="text" name='district' placeholder='District' />
                    <input type="text" name='province' placeholder='Province' />
                </span>
            </label>
            <label htmlFor="description" className={styles.description}>
                Description
                <textarea name="description" id="" cols="30" rows="10"></textarea>
            </label>
            <span className={styles.btnsec}>
                <button className={styles.clear}>Clear</button>
                <button type='submit' className={styles.submit}>Submit</button>
            </span>
        </form>
    )
}

const BuyerForm =() => {
    return(
        <form action="" className={styles.buyer}>
                <label htmlFor="firstName">
                First name
                <input type="text" name='firstName' />
            </label>
            <label htmlFor="lastName">
                Last name
                <input type="text" name='lastName' />
            </label>
            <label htmlFor="userName">
                User name
                <input type="text" name='userName' />
            </label>
            <label htmlFor="password">
                Password
                <input type="password" name='password' />
            </label>
            <label htmlFor="retypePassword">
                Retype the Password
                <input type="password" name='retypePassword' />
            </label>
            <label htmlFor="contact" className={styles.contact}>
                Contact
                <span>
                    <input type="email" name='email' placeholder='E-mail' />
                    <input type="text" name='phone' placeholder='Phone Number' />
                </span>
            </label>
            <span className={styles.btnsec}>
                <button className={styles.clear}>Clear</button>
                <button type='submit' className={styles.submit}>Submit</button>
            </span>
        </form>
    )
}