import { ItemComponent } from "./HomeComponents"
import styles from "../styles/profileStyles/profileComponentStyles.module.css"
import { SellerTradingCard } from "./TradingComponents"
import Add from "../public/Add.svg"
import Close from "../public/close button.svg" 
import { useState } from "react"

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

export const AddItem = () => {

    const[openForm, setOpenForm] = useState(false)

    return(
        <div className={styles.addItem}>
            <h1 onClick={() => setOpenForm(true)}>Add Item</h1>
            <Add className={styles.addbtn} onClick={() => setOpenForm(true)}/>
            {openForm ?<ItemForm setOpenForm={setOpenForm}/> : <></>}
        </div>
    )
}

const ItemForm = ({setOpenForm}) => {
    return(
        <div className={styles.cover}>
            <div className={styles.details}>
                <section className={styles.closeSec}>
                    <Close className={styles.close} onClick={() => setOpenForm(false)}/>
                </section>
                <section className={styles.detailsSec}>
                    <div className={styles.imgSec}>
                        <img src="" alt="item descriptive image" />
                    </div>
                    <div className={styles.details}>
                        <label htmlFor="itemName">
                            Item Name : 
                            <input type="text" name="itemName" />
                        </label>
                        <label htmlFor="priceRate">
                            Price Rate :
                            <input type="text" name="priceRate" />
                        </label>
                        <label htmlFor="description" className={styles.descript}>
                            Description : 
                            <textarea name="description" id="descript" cols="30" rows="10"></textarea>
                        </label>
                    </div>
                </section>
                <section className={styles.formControl}>
                    <button className={styles.clear}>Clear</button>
                    <button type="submit" className={styles.add} onClick={() => setOpenForm(false)}>Add</button>
                </section>
            </div>
        </div>
    )
}