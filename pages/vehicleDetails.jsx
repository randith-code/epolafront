import styles from '../styles/vehicleDetailsStyles/vehicleDetailsStyles.module.css'
import { AddReview } from '../components/ItemDetailComponent'
import Star from '../public/star.svg'
import Locpin from '../public/bytesize_location.svg'
import { CreateTrade } from '../components/TradingComponents'
import { useState } from 'react'



const VehicleDetails = () => {
    return(
        <div className={styles.container}>
            <VehicleDetailComponent/>
            <AddReview/>
        </div>
    )
}

export default VehicleDetails

const VehicleDetailComponent = ({vname, vid, tid, reviewCount, priceRate, nearestTown, description, vehlicleModel, regNo, capacity}) => {

    const [openTrade, setOpentrade] = useState(false)

    return(
        <div className={styles.itemDetails}>
            <section className={styles.imageSection}>
                <img src="" alt="item-image" />
            </section>
            <section className={styles.detailsSection}>
                <h1>{vname}</h1>
                <span className={styles.reviewSection}>
                    <span className={styles.starSet}>
                        <Star className={styles.star}/>
                        <Star className={styles.star}/>
                        <Star className={styles.star}/>
                        <Star className={styles.star}/>
                        <Star className={styles.star}/>
                    </span>
                    <p>({reviewCount}) Reviews</p>
                </span>
                <hr/>
                <section className={styles.details}>
                    <span className={styles.reg}>
                        <p>{vehlicleModel}</p>|
                        <p>{regNo}</p>
                    </span>
                    <p>Capacity : {capacity}</p>
                </section>
                <p className={styles.priceRate}>Rs.{priceRate} per Kilometer</p>
                <span className={styles.buttonContainer}>
                    <button className={styles.seller}>Contact Seller</button>
                </span>
                <hr/>
                <span className={styles.location}>
                    <Locpin className={styles.locpin}/>
                    <p>{nearestTown}</p>
                </span>
                <p className={styles.descript}>{description}</p>
                <button className={styles.wishList} onClick={() => setOpentrade(true) } >Make a Trade</button>
            </section>
            {openTrade ? <CreateTrade setOpentrade= {setOpentrade}/> : <></>}
        </div>
    )
}