import * as CATEGORY_CONSTANTS from "./constants";

export default function FetchCategories() {
  return async (dispatch) => {
    dispatch({
      type: CATEGORY_CONSTANTS.LOADING,
    });

    try {
      const res = await fetch("http://localhost:8000/categories");
      const foodCategories = await res.json();

      dispatch({
        type: CATEGORY_CONSTANTS.FETCH_SUCCESS,
        payload: foodCategories,
      });
    } catch (error) {
      dispatch({
        type: CATEGORY_CONSTANTS.ERROR,
        payload: error,
      });
    }
  };
}

export function FetchSingleCategory(category) {
  return async (dispatch) => {
    dispatch({
      type: CATEGORY_CONSTANTS.LOADING,
    });

    try {
      dispatch({
        type: CATEGORY_CONSTANTS.FETCH_SINGLE_CATEGORY,
        payload: category,
      });
    } catch (error) {
      dispatch({
        type: CATEGORY_CONSTANTS.ERROR,
        payload: error,
      });
    }
  };
}

export function FetchSingleRecipe(recipe) {
  return (dispatch) => {
    dispatch({
      type: CATEGORY_CONSTANTS.LOADING,
    });

    try {
      dispatch({
        type: CATEGORY_CONSTANTS.FETCH_SINGLE_RECIPE,
        payload: recipe,
      });
    } catch (error) {
      dispatch({
        type: CATEGORY_CONSTANTS.ERROR,
        payload: error,
      });
    }
  };
}

export function PostComment(comment) {
  return  (dispatch) => {
    // dispatch({
    //   type: CATEGORY_CONSTANTS.LOADING,
    // });
    

    // const jsonData = JSON.stringify(comment);
    // const res = await fetch("./Data/data.json", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: jsonData,
    // });

    // try {
    //   dispatch({
    //     type: CATEGORY_CONSTANTS.POST_COMMENT,
    //     payload: comment,
    //   });
    // } catch (error) {
    //   dispatch({
    //     type: CATEGORY_CONSTANTS.ERROR,
    //     payload: error,
    //   });
    // }

          dispatch({
        type: CATEGORY_CONSTANTS.POST_COMMENT,
        payload: comment})
  };
}


export function UpdateCategory(singleCategory) {

  return async (dispatch) => {
    
    await fetch(`http://localhost:8000/categories/${singleCategory?.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(singleCategory),
    });

  };
  
}



export function CreateNewRecipe(form) {
  return (dispatch) => {

    dispatch({
      type: CATEGORY_CONSTANTS.POST_RECIPE,
      payload:form
    })
  }
}