import { GET_ALL_COUNTRIES, CREATE_ACTIVITY, ORDER, FILTER_BY_CONTINENT, GET_COUNTRY_BY_NAME, GET_ACTIVITIES, GET_DETAIL, CLEAN_DETAILS, FILTER_BY_ACTIVITY } from "./action-types";

let initialState = {
    countries: [],
    activities: [],
    countriesCopy: [],
    countriesForm: [],
    details: [],
    
};

const rootReducer = (state = initialState, action) => {
    
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return { 
                ...state, 
                countries: action.payload,
                countriesCopy: action.payload,
                countriesForm: action.payload
            };
        
        case GET_ACTIVITIES: 
        
        
        return {
            ...state,
            activities: action.payload ,
         
        }
        
        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                countries: action.payload,
            }
        
        case CREATE_ACTIVITY:
            return { 
                ...state,
                activities:[...state.activities,action.payload]
            }

        case GET_DETAIL:
            return {
                ...state,
                details:[action.payload]
            }

        case CLEAN_DETAILS:
            return{
                ...state,
                details:[]
            }


        // case PAGINATE:
        //     const nextPage = state.currentPage + 1
        //     const prevPage = state.currentPage - 1
        //     const firstIndex = action.payload === "next" ? nextPage * cardsPerPage : prevPage * cardsPerPage

        //     if(action.payload === "next" && firstIndex >= state.countriesCopy.length) {return {...state}}
        //     else if(action.payload === "prev" && prevPage < 0) {return {...state}}
            
        //     return {
        //         ...state,
        //         countries: [...state.countriesCopy].splice(firstIndex, cardsPerPage),
        //         currentPage: action.payload === "next" ? nextPage : prevPage,
        //     }

        case ORDER:
            if(action.payload == "az"){
                const countriesOrder = [...state.countries].sort((prev, next) =>{
                    if(prev.name > next.name) return 1
                    if(prev.name < next.name) return -1
                    return 0
                }) 
                return {
                    ...state,
                    countries: countriesOrder,
                }
            } else if(action.payload == "za"){
                const countriesOrder = [...state.countries].sort((prev, next) =>{
                    if(prev.name > next.name) return -1
                    if(prev.name < next.name) return 1
                    return 0
                })
                return {
                    ...state,
                    countries: countriesOrder,
                }
            } else if(action.payload == "popInc"){
                const countriesOrder = [...state.countries].sort((prev, next) =>{
                    if(prev.population > next.population) return 1
                    if(prev.population < next.population) return -1
                    return 0
                }) 
                return {
                    ...state,
                    countries: countriesOrder,
                }

            } else if(action.payload == "popDec"){
                const countriesOrder = [...state.countries].sort((prev, next) =>{
                    if(prev.population > next.population) return -1
                    if(prev.population < next.population) return 1
                    return 0
                }) 
                return {
                    ...state,
                    countries: countriesOrder,
                }
            }

            case FILTER_BY_CONTINENT:{
                return{
                    ...state,
                    countries:action.payload==='All'? state.countries : state.countriesCopy.filter(c=>c.continent === action.payload)
                }
            }

            case FILTER_BY_ACTIVITY: 
                return{
                    ...state,
                    countries:action.payload==='All'? state.countries : state.countriesCopy.filter(c=>c.activities.includes(action.payload))
                }
            // case FILTER:
            // if(action.payload == "Europe"){
            //     const countriesFilter = [...state.countriesCopy].filter((country)=>  country.continent === "Europe") 
            //     return {
            //         ...state,
            //         countries: [...countriesFilter].splice(0, cardsPerPage),
            //         countriesFiltered: countriesFilter,
            //         currentPage: 0,
            //     }
            // }
        default:
            return {...state};
    }
}

export default rootReducer;
