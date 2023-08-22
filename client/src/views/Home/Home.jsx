import CardsContainer from "../../components/CardContainer/CardContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, porNombre, population, porContinent, porActivity, getActivities } from "../../redux/actions";
import style from "./Home.module.css";
import Paginado from "../../components/Paginado/Paginado";
import { Link } from "react-router-dom";

const Home = () => {
// cuando se monta, que haga el dispatch
// entonces usamos los hooks useEffect() y useDispatch()
const dispatch = useDispatch()

const allCountries = useSelector((state) => state.countries)
const allActivities = useSelector(state=>state.activities)
console.log("allActivities", allActivities)

const [currentPage, setCurrentPage] = useState(1)
const [countriesPerPage, setCountriesPerPage] = useState(10)
const indexOfLastCountry = currentPage * countriesPerPage // 10
const indexOfFirstCountry = indexOfLastCountry - countriesPerPage // 0
const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)

const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
}

useEffect(() => {
    dispatch(getCountries())
}, [dispatch])
// siempre tenemos que poner el array de dependencias aunque este vacío

useEffect(() => {
    dispatch(getActivities())
}, [dispatch])

const handleAllCountries = (event) => {
    event.preventDefault()
    dispatch(getCountries())
}



const orderByName = (event) => {
    dispatch(porNombre(event.target.name))
    setCurrentPage(1)
}

const orderByPop = (event) => {
    dispatch(population(event.target.name))
    setCurrentPage(1)
}

const handleFilterByContinent = (event) => {
    dispatch(porContinent(event.target.value))
    setCurrentPage(1)
}

const handleFilterByActivities = (event) => {
    
    dispatch(porActivity(event.target.value))
    setCurrentPage(1)
}

return(
    <div className={style.image}>
    <div className={style.homeCont}>
        <div className={style.orderAndFilter}>
            <div>
                <button className={style.button} onClick={handleAllCountries}>All Countries</button>
            </div>
            <div className={style.espaciado}> | </div>
            <div>
                <label className={style.label}>  Order by name: </label>
                <button className={style.button} name="az" onClick={orderByName}>A-Z</button>
                <button className={style.button} name="za" onClick={orderByName}>Z-A</button>
                
                <label className={style.label}>  Order by population: </label>
                <button className={style.button} name="popInc" onClick={orderByPop}>Increasing</button>
                <button className={style.button} name="popDec" onClick={orderByPop}>Decreasing</button>
            </div>
            <div className={style.espaciado}> | </div>
            <div>
                <label className={style.label}>  Filter by Continent: </label>
                <select className={style.desplegable} name="All" onChange={handleFilterByContinent}>
                    <option value="" disabled selected hidden>Filter continent</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="South America">South America</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Europe">Europe</option>
                    <option value="North America">North America</option>
                    <option value="Oceania">Oceania</option>
                </select>
                
                <label className={style.label}>  Filter by Activity: </label>
                <select className={style.desplegable} onChange={handleFilterByActivities} name='activitiesType'>
                    <option value='All'>Filter activity</option>
                    {
                        allActivities?.map(a=>{
                        return(
                        <option key={a.id} value={a.name}>{a.name}</option>)
                    })
                    
                    }
                </select>
            </div>
        </div>

        <Paginado 
        countriesPerPage={countriesPerPage} 
        allCountries={allCountries.length} 
        paginado={paginado}/>
        <br/>

        <div className={style.contenedor}>
        {currentCountries?.map((country, index)=>{
            return (
                <div>
                    <Link key={index} to={`/detail/${country.id}`}>
                    <CardsContainer
                        name={country.name}
                        id={country.id}
                        flag={country.flag}
                        continent={country.continent}
                        capital={country.capital}
                        subregion={country.subregion}
                        area={country.area}
                        population={country.population}
                    />
                    </Link>
                </div>
            )
        })

        }
        </div>
        
    </div>
    </div>
)
}

export default Home;

