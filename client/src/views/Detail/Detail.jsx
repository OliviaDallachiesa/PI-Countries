import React from "react";
import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDetail,cleanDetails } from '../../redux/actions'
import style from './Detail.module.css'
import { Link } from "react-router-dom";

const Detail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const detailsCountry = useSelector(state=>state.details)

    useEffect(() => {
        dispatch(getDetail(id))
        
        return()=>dispatch(cleanDetails())
    },[dispatch])

    const [ details ] = detailsCountry;
    
    return(
        details?<div className={style.detailContainer}>
            <div className={style.buttonCont}>
            <Link to='/home'>
                <button className={style.button}>←</button>
            </Link>
            </div>

            
            <div className={style.bandera}>
                <img src={details.flag}></img>
            </div>
        
            <div className={style.infoDetail}>
                    <h2><b>Name:  </b> {details.name}</h2>
                    <p><b>Id:  </b> {details.id}</p>
                    <p><b>Continent:  </b> {details.continent}</p>
                    <p><b>Capital:  </b> {details.capital}</p>
                    <p><b>Subregion:  </b> {details.subregion}</p>
                    <p><b>Area:  </b> {details.area}</p>
                    <p><b>Poblation:  </b> {details.population}</p>
            </div>

            <div className={style.activities}>
                    <h3><b>Activities:</b></h3> 
                     <div className={style.actDesc}>
                            {
                                details.Activities.length > 0? details.Activities.map(a=>
                                    <ul>
                                        <h3>{a.name}</h3>
                                        <p> Difficulty: {a.difficulty}</p>
                                        <p>Duration: {a.duration}</p>
                                        <p>Season: {a.season}</p>
                                    </ul>
                                ):'-'
                            }
                    </div>
                
            </div>
        </div>:<p>loading...</p>
           
    )
    }
    
    export default Detail;