import { ItemComponent } from "./HomeComponents"
import styles from "../styles/profileStyles/profileComponentStyles.module.css"
import { SellerTradingCard } from "./TradingComponents"

export const Details = ({name, userId, address, nearestTown, district, province, email, phone, description}) => {

    return(
        <div className={styles.details}>
            <span className={styles.name}>
                <p>Name</p>
                <p className={styles.nameSec}>{name}</p>
            </span>
            <span className={styles.userId}>
                <p>User Id</p>
                <p className={styles.idSec}>{userId}</p>
            </span>
            <span className={styles.location}>
                <p>Location</p>
                <section className={styles.locSec}>
                    <p>{address}</p>
                    <p>{nearestTown}</p>
                    <p>{district}</p>
                    <p>{province}</p>
                </section>
            </span>
            <span className={styles.contact}>
                <p>Contact</p>
                <section className={styles.contactSec}>
                    <p>{email}</p>
                    <p>{phone}</p>
                </section>
            </span>
            <span className={styles.description}>
                <p>Description</p>
                <p className={styles.desText}>{description}</p>
            </span>
        </div>
    )
}

export const Items = () => {

    const apple = {
        iname:"Apple",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        priceRate:1400
      }

    return(
        <div>
            <ItemComponent iname={apple.iname} description={apple.description} priceRate={apple.priceRate} />
            <ItemComponent iname={apple.iname} description={apple.description} priceRate={apple.priceRate} />
            <ItemComponent iname={apple.iname} description={apple.description} priceRate={apple.priceRate} />
        </div>
    )
}

export const Tradings = () => {
    return(
        <div>
            <SellerTradingCard/> 
            <SellerTradingCard/>
            <SellerTradingCard/>
        </div>
    )
}