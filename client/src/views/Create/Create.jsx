import React from "react";
import { useState } from "react";
import style from "./Create.module.css"
import { createActivity } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CardSelected from "../../components/CardSelected/CardSelected";

const Create = () => {
    const dispatch = useDispatch()

    const [state, setState] = useState({
        name: "",
        difficulty: "",
        duration:"",
        season:"",
        country: "",
    })

    const [select,setSelect] = useState({
        season:'Summer',
        countries: [],
    })

    const allCountries = useSelector(state => state.countriesForm)

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })

        validate({
            ...state,
            [event.target.name]: event.target.value }, event.target.name)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(createActivity(state))
    }

    const [error, setError] = useState({
        name: "Required field",
        difficulty: "Required field",
        duration:"",
        season:"Required field",
        country: "Required field",
    })

    const validate = (state, name) => {
        if(name === "name"){
            if(state.name !== "") setError({...error, name: ""}) 
            else  setError({...error, name: "Required field"}) 
        }

        if(name === "difficulty"){
            if(state.difficulty !== "") setError({...error, difficulty: ""})
            else setError({...error, difficulty: "Required field"})
        }

        if(name === "duration"){
            const regex = /^\d+$/
            
            if(regex.test(state.duration) === true) setError({...error, duration: ""})
            else setError({ ...error, duration: "Only numbers!"})
            
        }

        if(name === "season"){
            if(state.season !== "") setError({...error, season: ""}) 
            else setError({...error, season: "Required field"}) 
        }  
        
        if(name === "country"){
            if(state.country !== "") setError({...error, country: ""})
            else setError({...error, country: "Required field"})
            

        }
    }

    const disable = () => {
        let disabled = true;
        for(let err in error){
            if(error[err] === "") disabled = false
            else disabled = true 
            break
        }
        return disabled
    }

    const closeCountry = (countryName) => {
        setSelect(prevState => {
            return{
                ...prevState,
                countries:prevState.countries.filter(country => country !== countryName)
            }
        })
        console.log(select.countries)
    }

    const handleSelectChange = (event) => {
        if(event.target.name ==='countries'){
            if(!select[event.target.name].includes(event.target.value))setSelect(prevState=>{
                return{
                    ...prevState,
                    [event.target.name]: [...prevState[event.target.name], event.target.value]
                }
            })
        }else{
            setSelect(prevState=>{
                return{
                    ...prevState,
                    [event.target.name]: event.target.value
                }
            })
        }
        
    }

    return(
        <div className={style.create}>
          <h1>You can create your own activity!</h1>
          <h3>Complete the form to create one</h3>
            <form className={style.contInputs} onSubmit={handleSubmit}>
                <div>
                    <label> Name: </label>
                    <input name="name" onChange={handleChange} type="text" autoComplete="off"/>
                    <label className={style.error}>{error.name}</label>
                    <br />
                    
                    <label> Difficulty: </label>
                    <select name="difficulty" onChange={handleChange} autoComplete="off"> 
                        <option value="" disabled selected hidden>Choose a difficulty</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label className={style.error}>{error.difficulty}</label>
                    <br />

                    <label> Duration (in hours): </label>
                    <input name="duration" onChange={handleChange} type="text" autoComplete="off" />
                    {error["duration"] && <strong>{error.duration}</strong>}
                    <br />
                    <label> Season: </label>
                    <select name="season" onChange={handleChange} autoComplete="off">
                        <option value="" disabled selected hidden>Choose a season</option>
                        <option value="Summer">Summer</option>
                        <option value="Autumn">Autumn</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                    </select>
                    <label className={style.error}>{error.season}</label>
                    <br />
                    
                    <label> Country: </label>
                    {
                        select.countries.length?select.countries.map(c=><CardSelected name={c} onClose={closeCountry} />) : null
                    }
                <select name='countries' onChange={handleSelectChange}>
                    {
                        allCountries.map(c=><option value={c.name}>{c.name}</option>)
                    }
                </select>
                    
                    <br />

                    <input disabled={disable()} className="form-button" type="submit" value={"Create!"}/>
                </div>
            </form>
            </div>

    )
    }
    

export default Create;
    