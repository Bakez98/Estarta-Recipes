import * as CATEGORY_CONSTANTS from "./constants"


export default function FetchCategories() {

    return async (dispatch) => {
    dispatch({
        type:CATEGORY_CONSTANTS.LOADING
    })

    try {
    const res = await fetch("./Data/data.json")
    const foodCategories = await res.json()
    // console.log(foodCategories.categories)
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



export function FetchSingleCategory(CatagoryName) {

    return async (dispatch) => {
    dispatch({
        type:CATEGORY_CONSTANTS.LOADING
    })

    try {
    const res = await fetch(`./Data/data.json/${CatagoryName}`)
    const SinglefoodCategory = await res.json()
    console.log("lOGGING FROM INSIDE ACTION",SinglefoodCategory)
    dispatch({
        type:CATEGORY_CONSTANTS.FETCH_SINGLE_CATEGORY,
        payload:SinglefoodCategory,
    })
        
    } catch (error) {
        dispatch({
            type:CATEGORY_CONSTANTS.ERROR,
            payload:error
        })
    }
} 
}