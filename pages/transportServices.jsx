import styles from '../styles/transportStyles/transportServicesStyles.module.css'
import { VehicleComponent, Categories, Adcard } from '../components/transportComponents'

const TransportServices = () =>{

    const vehicle ={
        vname: "Dimo lokka",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        priceRate: 150,
        vehicleModel: "Lorry",
        regNo: "EP L-5638",
        capacity:"2000kg"
    }

    return(
        <div className={styles.transcontainer}>
            <section className={styles.vehicles}>
                <VehicleComponent 
                    vname={vehicle.vname} 
                    description={vehicle.description}
                    priceRate={vehicle.priceRate}
                    vehlicleModel={vehicle.vehicleModel}
                    regNo={vehicle.regNo}
                    capacity={vehicle.capacity}
                />
                <VehicleComponent 
                    vname={vehicle.vname} 
                    description={vehicle.description}
                    priceRate={vehicle.priceRate}
                    vehlicleModel={vehicle.vehicleModel}
                    regNo={vehicle.regNo}
                    capacity={vehicle.capacity}
                />
                <VehicleComponent 
                    vname={vehicle.vname} 
                    description={vehicle.description}
                    priceRate={vehicle.priceRate}
                    vehlicleModel={vehicle.vehicleModel}
                    regNo={vehicle.regNo}
                    capacity={vehicle.capacity}
                />
                <VehicleComponent 
                    vname={vehicle.vname} 
                    description={vehicle.description}
                    priceRate={vehicle.priceRate}
                    vehlicleModel={vehicle.vehicleModel}
                    regNo={vehicle.regNo}
                    capacity={vehicle.capacity}
                />
                <VehicleComponent 
                    vname={vehicle.vname} 
                    description={vehicle.description}
                    priceRate={vehicle.priceRate}
                    vehlicleModel={vehicle.vehicleModel}
                    regNo={vehicle.regNo}
                    capacity={vehicle.capacity}
                />
            </section>
            <section className={styles.sidebar}>
                <Categories/>
                <Adcard sellername="AHL Transport" promotion="50% off in new year season"/>
            </section>
        </div>
    )
}

export default TransportServices