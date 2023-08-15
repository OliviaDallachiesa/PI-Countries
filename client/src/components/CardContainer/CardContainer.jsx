// import Card from "../Card/Card";
import style from "./CardContainer.module.css"
import { useSelector } from "react-redux";

// CardsContainer debe tomar una array de countries y por cada uno renderizar un componente Card
const CardsContainer = ({name, flag, continent, population}) => {
    
    return(
        <div className={style.cardsCont}>
            <div className={style.flag}>
               <img src={flag} alt="Bandera"/>
           </div>

            <div>
                <h3 className={style.name}>{name}</h3>
                <p className={style.info}>Continent: {continent}</p>
                <p className={style.info}>Population: {population}</p>
            </div>
        </div>
    )
}


export default CardsContainer;