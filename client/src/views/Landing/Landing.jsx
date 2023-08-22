import React from 'react';
import style from "./Landing.module.css";
import { Link } from 'react-router-dom'

const Landing = () =>{
    return(
        
        <div className= {style.containerLanding}>
            <div className={style.subContainer}>
            <h1 className={style.title}> 🌎 WORLD TOUR 🌎</h1>
            <h2  className={style.subTitle}>Press the button below and discover all the countries of the world!</h2>
                <Link to= "/home" >
                    <button className={style.button}>ENTER</button>
                </Link>
            </div>
            
        </div>
        
    )
}

export default Landing;
