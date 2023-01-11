import styles from '../styles/signUpStyles/signUpPage.module.css'
import { Banner, UserInfo } from '../components/SignUpComponents'
import { Frontfooter } from '../components/landing'

const SignUp = () => {
    return (
        <div className={styles.container}>
            <Banner/>
            <h1>Welcome to e-Pola ...</h1>
            <UserInfo/>
            <Frontfooter/>
        </div>
    )
}

export default SignUp

SignUp.getLayout = function pageLayout(page){
    return(
       <>
        {page}
       </>
    )
}