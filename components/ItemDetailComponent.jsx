import Star from '../public/star.svg'
import Locpin from '../public/bytesize_location.svg'

import styles from '../styles/itemDetailStyles/itemDetailStyles.module.css'
import { useState } from 'react'
import { CreateTrade } from './TradingComponents'

export const ItemDetailComponent = ({iid, sid, iname, reviewCount, priceRate, nearestTown, description, email, phone }) => {
    
    const [openTrade, setOpentrade] = useState(false)
    const [openContact, setOpenContact] = useState(false)

    return(
        <div className={styles.itemDetails}>
            <section className={styles.imageSection}>
                <img src="" alt="item-image" />
            </section>
            <section className={styles.detailsSection}>
                <h1>{iname}</h1>
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

                <p className={styles.priceRate}>Rs.{priceRate} per Kilogram</p>
                <span className={styles.buttonContainer}>
                    <button className={styles.seller} onClick={() => setOpenContact(!openContact)}>Contact Seller</button>
                    <a href="/transportServices"><button className={styles.transport}>Find Transport</button></a>
                </span>
                {openContact ? <ContactSec email={email} phone={phone}/> : <></>}
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

const ContactSec =({email, phone}) => {
    return(
        <section className={styles.contactSec}>
            <p>{email}</p>
            <p>{phone}</p>
        </section>
    )
}

export const AddReview = () => {
    return(
        <div className={styles.addreview}>
            <section>
                <h1>Add Review</h1>
                <hr />
                <form action="">
                    <p>Your ratings</p>
                    <span className={styles.container}>
                        <span className={styles.star1}>
                            <Star className={styles.istar}/>
                        </span>
                        <span className={styles.star1}>
                            <Star className={styles.istar}/>
                            <Star className={styles.istar}/>
                        </span>
                        <span className={styles.star1}>
                            <Star className={styles.istar}/>
                            <Star className={styles.istar}/>
                            <Star className={styles.istar}/>
                        </span>
                        <span className={styles.star1}>
                            <Star className={styles.istar}/>
                            <Star className={styles.istar}/>
                            <Star className={styles.istar}/>
                            <Star className={styles.istar}/>
                        </span>
                        <span className={styles.star1}>
                            <Star className={styles.istar}/>
                            <Star className={styles.istar}/>
                            <Star className={styles.istar}/>
                            <Star className={styles.istar}/>
                            <Star className={styles.istar}/>
                        </span>
                    </span>
                    <label className={styles.lbl} htmlFor="reviewerName">
                        Your name <br />
                        <input className={styles.name} type="text" name='reviwerName'/>
                    </label><br />
                    <label className={styles.lbl} htmlFor="review">
                        Your review <br />
                        <textarea className={styles.descript} name='review'/>
                    </label><br />
                    <button className={styles.submit} type='submit'>Submit</button>
                </form>
            </section>
        </div>
    )
}
