import React from "react";
import style from './Paginado.module.css'

export default function Paginado ({countriesPerPage, allCountries, paginado}){
    const pageNumbers = [];

    for(let i = 0; i <= Math.ceil(allCountries / countriesPerPage)-1; i++){
        pageNumbers.push(i+1)
    }

    const botonesNumeros = document.querySelectorAll(`.${style.numeros}`);

    botonesNumeros.forEach(boton => {
        boton.addEventListener('click', () => {
            botonesNumeros.forEach(b => b.classList.remove(style.active));
            boton.classList.add(style.active);
        });
    });

    
    return(
        <nav className={style.paginado}>
            <ul className={style.lista}>
                { pageNumbers && pageNumbers.map(number =>(
                        <li className={style.number} key={number}>
                        <button className={`${style.numeros} ${style.active}`} onClick={() => paginado(number)}>{number}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

