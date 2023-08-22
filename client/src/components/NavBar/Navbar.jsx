import { Link } from 'react-router-dom'
import style from "./NavBar.module.css"
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getNameCountries } from '../../redux/actions'


const NavBar = ( ) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    
    const handleInputName = (event) => {
        event.preventDefault()
        setName(event.target.value)
        console.log(name)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(getNameCountries(name))
    }
    return(
        <div className={style.mainContainer}>
            
        <div className={style.search}>
                <div className={style.search_box}>
                    <div className={style.search_field}>
                        <input className={style.bar} onChange={handleInputName} type="text" placeholder='Search a country 🗺'/>
                        <div className={style.search_box_icon}>
                            <button className={style.button} type="submit" onClick={handleSubmit}>
                            <i className={style.search_icon}>
                                <svg xmlns="://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#000"></path></svg>
                            </i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.mundi}><Link to="/">🌎</Link></div>
            <div className={style.buttons}>
                <button className={style.home}>
                    <Link to="/home" className={style.sinSubrayado}> HOME </Link>
                </button>

                <button className={style.create}>
                    <Link to="/create" className={style.sinSubrayado}> CREATE AN ACTIVITY </Link>
                </button>
            </div>
            
            </div>
            
    )
}

export default NavBar;