import {Hero, Catogories, Bestseller, Frontfooter} from "../components/landing"

const Home = () => {

    let sllr1 = "Mark's Organic Farm"
    let sllr2 = "Jenny's Fresh Veggies"
    let sllr3 = "Marry's Dairy"

    return(
        <div style={{backgroundColor:"#EEEEEE"}}>
            <Hero/>
            <Catogories/>
            <Bestseller seller1={sllr1} seller2={sllr2} seller3={sllr3}/>
            <Frontfooter/> 
        </div>
    )
}

export default Home

Home.getLayout = function pageLayout(page){
    return(
        <>
            {page}
        </>
    )
}