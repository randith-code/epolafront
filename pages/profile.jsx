import styles from '../styles/profileStyles/profilePageStyles.module.css'
import { Banner } from '../components/SignUpComponents'
import { useState } from 'react'

const profile = () => {

    const [tab, setTab] = useState("Details");

    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <span>
                    <p onClick={() => setTab("Details")}>Details</p>
                    <p onClick={() => setTab("Items")}>Items</p>
                    <p onClick={() => setTab("Tradings")}>Tradings</p>
                </span>
                <hr />
                {tab == "Details" ? <Details/> : tab == "Items" ? <Items/> : <Tradings/>}
           </div>
        </div>
    )
}

const Details = () => {
    return(
        <div>Details</div>
    )
}

const Items = () => {
    return(
        <div>Items</div>
    )
}
const Tradings = () => {
    return(
        <div>Tradings</div>
    )
}

export default profile