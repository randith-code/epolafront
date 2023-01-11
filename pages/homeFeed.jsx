import Head from 'next/head'
import styles from '../styles/HomeFeed.module.css'
import {ItemComponent, Categories, Adcard} from '../components/HomeComponents'

export default function HomeFeed() {

  const apple = {
    iname:"Apple",
    description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    priceRate:1400
  }

  return (
    <div className={styles.container}>
        <section className={styles.cardSection}>
          <ItemComponent iname={apple.iname} description={apple.description} priceRate={apple.priceRate} />
          <ItemComponent iname={apple.iname} description={apple.description} priceRate={apple.priceRate} />
          <ItemComponent iname={apple.iname} description={apple.description} priceRate={apple.priceRate} />
        </section>
        <section className={styles.adSection}>
          <Categories/>
          <Adcard sellername={"Fresh Food"} promotion={"Up to 50% off today"}/>
        </section>
    </div>
  )
}
