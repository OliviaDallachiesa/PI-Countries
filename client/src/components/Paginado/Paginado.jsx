import React from "react";
import style from './Paginado.module.css'

export default function Paginado ({countriesPerPage, allCountries, paginado}){
    const pageNumbers = [];

    for(let i = 0; i <= Math.ceil(allCountries / countriesPerPage); i++){
        pageNumbers.push(i+1)
    }
    return(
        <nav className={style.paginado}>
            <ul className={style.lista}>
                { pageNumbers && pageNumbers.map(number =>(
                        <li className={style.number} key={number}>
                        <button className={style.numeros} onClick={() => paginado(number)}>{number}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

