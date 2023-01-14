import styles from '../styles/profileStyles/profilePageStyles.module.css'
import { Banner } from '../components/SignUpComponents'
import { useState } from 'react'
import { Details, Items, Tradings } from '../components/ProfileComponents'

const profile = () => {

    const [tab, setTab] = useState("Details");

    const obj = {
        name:"abc",
        userId:"dshhgfhkdfgdhlkv",
        address:"N0 27,brookme road,",
        nearestTown:"bacon hills,",
        district:"colombo,",
        province:"western.",
        email:"sample.gmail.com",
        phone:"0777423483",
        description:"hfhpiuhrpiuhiupughrughprouhgnjsfabhgrdihfduvhdivudisvuhivu"
    }

    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <span className={styles.selection}>
                    <p onClick={() => setTab("Details")}>Details</p>
                    <p onClick={() => setTab("Items")}>Items</p>
                    <p onClick={() => setTab("Tradings")}>Tradings</p>
                </span>
                <hr className={styles.profilehr} />
                {tab == "Details" ? <Details {...obj}/> : tab == "Items" ? <Items/> : <Tradings/>}
           </div>
        </div>
    )
}

export default profile