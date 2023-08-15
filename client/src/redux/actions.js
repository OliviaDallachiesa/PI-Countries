import axios from "axios"; 
import { GET_ALL_COUNTRIES, CREATE_ACTIVITY, ORDER, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, GET_COUNTRY_BY_NAME } from "./action-types";

export const getCountries = () => {
    const endpoint = "http://localhost:3001/countries"
    
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: data
            });            
        } catch (error) {
            console.log(error)
        }
    }
}

export const getNameCountries = (name) => {
    return async function (dispatch){
        try {
            const { data } = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch({
                type: GET_COUNTRY_BY_NAME,
                payload: data
            })

        } catch (error) {
            console.log(error)
        }
    }
}

export const createActivity = (state) => {
    const endpoint = "http://localhost:3001/activities"

    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, state)
            return dispatch({
                type: CREATE_ACTIVITY,
                payload: data
            })        
        } catch (error) {
            console.log(error)
        }
    }
}



export const porNombre = (event) => {
    
    return async (dispatch) => {
        try {
            return dispatch({
                type: ORDER,
                payload: event
            });            
        } catch (error) {
            console.log(error)
        }
    }   
}

export const population = (event) => {
    
    return async (dispatch) => {
        try {
            return dispatch({
                type: ORDER,
                payload: event
            });            
        } catch (error) {
            console.log(error)
        }
    }   
}


export const porContinent = (event) => {
    
    return async (dispatch) => {
        try {
            return dispatch({
                type: FILTER_BY_CONTINENT,
                payload: event
            });            
        } catch (error) {
            console.log(error)
        }
    }   
}

export const porActivity = (event) => {
    
    return async (dispatch) => {
        try {
            return dispatch({
                type: FILTER_BY_ACTIVITY,
                payload: event
            });            
        } catch (error) {
            console.log(error)
        }
    }   
}
