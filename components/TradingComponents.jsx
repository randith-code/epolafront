import { useState } from 'react'
import styles from '../styles/tradingStyles/tradingStyles.module.css'
import Closebtn from '../public/close button.svg'

export const CreateTrade = ({setOpentrade}) => {

    const [tradeDate, setTradeDate] = useState("");

    return(
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <section className={styles.closeSec}>
                <Closebtn className={styles.close} onClick={() => setOpentrade(false)}/>
            </section>
            <section className={styles.header}>
                <h1>Create a trade</h1>
                <hr className={styles.horiline} />
            </section>
            <section className={styles.flds}>
                <span>
                    Item id  : <p>{}</p>
                </span>
                <span>
                    Seller id  : <p>{}</p>
                </span>
                <span>
                    Amount  : <input type="number"></input>
                </span>
                <br />
                <span>
                    Trade ending date  : <input type="date" value={tradeDate} onChange={(e) => setTradeDate(e.target.value)}/>
                </span>
                <br />
                <span className={styles.btnSec}>
                    <button onClick={() => setOpentrade(false)}>Create</button>
                </span>
            </section>
          </div>
        </div>
    )
}

export const SellerTradingCard = () => {

    const[accept, setAccept] = useState(null);

    return(
        <div className={styles.tradeCard}>
            <section className={styles.status}>
                <span className={!accept ? styles.active_bfraccpt : styles.active}>
                    <p className={styles.activeText}>{accept ? "Active" : accept == null ? "Not Accepted" : "Completed"}</p>
                </span>
                <button className={!accept ? styles.done_bfraccpt : styles.done} onClick ={() => {setAccept(false)}}>Done</button>
            </section>
            <hr className={styles.sellercrdhr}/>
            <section className={styles.details}>
                <span>Trade id  : <p>{}</p></span>
                <span>Item id  : <p>{}</p></span>
                <span>Seller id  : <p>{}</p></span>
                <span>Buyer id  : <p>{}</p></span>
                <span>Amount  : <p>{}</p></span>
                <span>Trade ending date  : <p>{}</p></span>
            </section>
            {accept == null ? <Confirmation setAccept={setAccept}/> : <></>}
        </div>
    )
}

const Confirmation = ({setAccept}) => {
    return(
        <section className={styles.confirmation}>
                <button className={styles.accept} onClick={() => setAccept(true)} >Accept</button>
                <button className={styles.reject}>Reject</button>
        </section>
    )
}

// export const Buyer