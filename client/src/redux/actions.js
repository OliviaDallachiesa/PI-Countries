import axios from "axios"; 
import { GET_ALL_COUNTRIES, GET_DETAIL, CLEAN_DETAILS, ORDER, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, GET_COUNTRY_BY_NAME, GET_ACTIVITIES, CREATE_ACTIVITY } from "./action-types";

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

export const getActivities = () => {
    const endpoint = "http://localhost:3001/activities"
    
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            
            return dispatch({
                type: GET_ACTIVITIES,
                payload: data
            }); 
                       
        } catch (error) {
            console.log(error)
        }
    }
}

export const createActivity = (activity) => {

    return async function(dispatch){
        try{
        return dispatch({
            type: CREATE_ACTIVITY,
            payload: activity
        })

        } catch (error) {
            console.log(error)
        }
    }
}

export const getDetail = (id) => {
    
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/countries/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: data
            });            
        } catch (error) {
            console.log(error)
        }
    }
}

export const cleanDetails = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: CLEAN_DETAILS
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


