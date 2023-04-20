import * as CATEGORY_CONSTANTS from "./constants"


export default function FetchCategories() {

    return async (dispatch) => {
    dispatch({
        type:CATEGORY_CONSTANTS.LOADING
    })

    try {
    const res = await fetch("./Data/data.json")
    const foodCategories = await res.json()
    
    dispatch({
        type:CATEGORY_CONSTANTS.FETCH_SUCCESS,
        payload:foodCategories.categories,
    })
        
    } catch (error) {
        dispatch({
            type:CATEGORY_CONSTANTS.ERROR,
            payload:error
        })
    }
} 
}



export function FetchSingleCategory(category) {

    return async (dispatch) => {
    dispatch({
        type:CATEGORY_CONSTANTS.LOADING
    })

    try {
    dispatch({
        type:CATEGORY_CONSTANTS.FETCH_SINGLE_CATEGORY,
        payload:category,
    })
        
    } catch (error) {
        dispatch({
            type:CATEGORY_CONSTANTS.ERROR,
            payload:error
        })
    }
} 
}



export function FetchSingleRecipe(recipe) {

    return (dispatch) => {
    dispatch({
        type:CATEGORY_CONSTANTS.LOADING
    })

    try {
    dispatch({
        type:CATEGORY_CONSTANTS.FETCH_SINGLE_RECIPE,
        payload:recipe,
    })
        
    } catch (error) {
        dispatch({
            type:CATEGORY_CONSTANTS.ERROR,
            payload:error
        })
    }
} 
}