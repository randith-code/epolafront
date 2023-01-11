import styles from '../styles/homeStyles/HomeComponentsStyles.module.css' 

export const ItemComponent = ({iname, description, priceRate}) => {

    let reviewCount;

    return(
        <div className={styles.itemComponent}>
            <div className={styles.imageWraper}>
                <img src="" alt="item-photo" />
            </div>
            <div className={styles.detailSection}>
                <h1>{iname}</h1>
                <section className={styles.reviews}>
                    <p>{reviewCount} Reviews</p>
                    <span></span>
                    <a href="">
                       <p>Add Review</p>
                    </a>
                </section>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>Rs.{priceRate} Per Kilogram</p>
                <section className={styles.btnSection}>
                    <button className={styles.seeMore}>See More</button>
                    <button className={styles.addToWish}>Add To Wish List</button>
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
                <a href=""><p>Fruits</p></a>
                <a href=""><p>Vegitables</p></a>
                <a href=""><p>Spices</p></a>
                <a href=""><p>Plants</p></a>
                <a href=""><p>Coconuts and Products</p></a>
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