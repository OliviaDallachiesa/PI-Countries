import CardsContainer from "../../components/CardContainer/CardContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, porNombre, population, porContinent, porActivity } from "../../redux/actions";
import style from "./Home.module.css";
import Paginado from "../../components/Paginado/Paginado";
import { Link } from "react-router-dom";

const Home = () => {
// cuando se monta, que haga el dispatch
// entonces usamos los hooks useEffect() y useDispatch()
const dispatch = useDispatch()

const allCountries = useSelector((state) => state.countries)
const allActivities = useSelector(state=>state.activities)


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


const handleAllCountries = (event) => {
    event.preventDefault()
    dispatch(getCountries())
}



const orderByName = (event) => {
    dispatch(porNombre(event.target.name))
}

const orderByPop = (event) => {
    dispatch(population(event.target.name))
}

const handleFilterByContinent = (event) => {
    dispatch(porContinent(event.target.value))
}

const handleFilterByActivities = (event) => {
    dispatch(porActivity(event.target.value))
    setCurrentPage(1)
}

return(
    <div className={style.homeCont}>
        <h1>Home Page</h1>
        <div>
            <button onClick={handleAllCountries}>All Countries</button>
        </div>
        <div>
            <label>Order by name: </label>
            <button name="az" onClick={orderByName}>A-Z</button>
            <button name="za" onClick={orderByName}>Z-A</button>

            <label>   Order by population: </label>
            <button name="popInc" onClick={orderByPop}>Increasing</button>
            <button name="popDec" onClick={orderByPop}>Decreasing</button>
        </div>
        <div>
            <label>Filter by Continent: </label>
            <select name="All" onChange={handleFilterByContinent}>
                <option value="" disabled selected hidden>Filter continent</option>
                <option value="Antarctica">Antarctica</option>
                <option value="South America">South America</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="Oceania">Oceania</option>
            </select>

            <label>Filter by Activity: </label>
            <select onChange={handleFilterByActivities} name='activitiesType'>
                <option value='All'>Filter activity</option>
                {
                    allActivities.length && allActivities.map(a=><option value={a}>{a}</option>)
                }
            </select>
        </div>
        
        <Paginado 
        countriesPerPage={countriesPerPage} 
        allCountries={allCountries.length} 
        paginado={paginado}/>
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
)
}

export default Home;

