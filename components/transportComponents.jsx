import styles from '../styles/transportStyles/transportComponentsStyles.module.css'

export const VehicleComponent = ({vname, description, priceRate, capacity, vehlicleModel, regNo}) => {
    let reviewCount

    return(
        <div className={styles.itemComponent}>
            <div className={styles.imageWraper}>
                <img src="" alt="item-photo" />
            </div>
            <div className={styles.detailSection}>
                <h1>{vname}</h1>
                <section className={styles.details}>
                    <span className={styles.reg}>
                        <p>{vehlicleModel}</p>|
                        <p>{regNo}</p>
                    </span>
                    <p>Capacity : {capacity}</p>
                </section>
                <section className={styles.reviews}>
                    <p>{reviewCount} Reviews</p>
                    <span></span>
                    <a href="/itemDetails">
                    <p>Add Review</p>
                    </a>
                </section>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>Rs.{priceRate} Per Kilometer</p>
                <section className={styles.btnSection}>
                    <a href="/vehicleDetails"><button className={styles.seeMore}>See More</button></a>
                </section>
            </div>
        </div>
    )
}

export const Categories = () => {
    return(
        <div className={styles.Categories}>
            <h1>Categories</h1>
            <span className={styles.catList}>
                <a href=""><p>Lorry</p></a>
                <a href=""><p>Truck</p></a>
                <a href=""><p>Van</p></a>
                <a href=""><p>Tuk Tuk</p></a>
            </span>
        </div>
    )
}

export const Adcard = ({sellername, promotion}) =>{
    return(
        <div className={styles.adcard}>
            <section></section>
            <p>{sellername}</p>
            <h3>{promotion}</h3>
            <span>Click Here</span>
        </div>
    )
}