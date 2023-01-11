import Star from '../public/star.svg'
import Locpin from '../public/bytesize_location.svg'

import styles from '../styles/itemDetailStyles/itemDetailStyles.module.css'

export const ItemDetailComponent = ({iname, reviewCount, priceRate, nearestTown, description }) => {
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
                    <button className={styles.seller}>Contact Seller</button>
                    <button className={styles.transport}>Find Transport</button>
                </span>
                <hr/>
                <span className={styles.location}>
                    <Locpin className={styles.locpin}/>
                    <p>{nearestTown}</p>
                </span>
                <p className={styles.descript}>{description}</p>
                <button className={styles.wishList}>Add To Wish List</button>
            </section>
        </div>
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