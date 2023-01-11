import styles from '../styles/itemDetailStyles/itemDetailPage.module.css'
import { ItemDetailComponent, AddReview } from "../components/ItemDetailComponent"

const ItemDetails = () => {

    let descript = `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`

    return(
        <div className={styles.main}>
            <ItemDetailComponent iname={"Apple"} reviewCount={0} priceRate={1400} nearestTown={"Bandarawela"} description={descript} />
            <AddReview/>
        </div>
    )
}

export default ItemDetails