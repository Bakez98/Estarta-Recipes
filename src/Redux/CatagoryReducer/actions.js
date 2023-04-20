import * as CATEGORY_CONSTANTS from "./constants";

export default function FetchCategories() {
  return async (dispatch) => {
    dispatch({
      type: CATEGORY_CONSTANTS.LOADING,
    });

    try {
      const res = await fetch("./Data/data.json");
      const foodCategories = await res.json();

      dispatch({
        type: CATEGORY_CONSTANTS.FETCH_SUCCESS,
        payload: foodCategories.categories,
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

export function PostComment(singleRecipe,comment) {
  return async (dispatch) => {
    dispatch({
      type: CATEGORY_CONSTANTS.LOADING,
    });
    const jsonData = JSON.stringify(comment);

    const res = await fetch("./Data/data.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    });

    try {
      dispatch({
        type: CATEGORY_CONSTANTS.POST_COMMENT,
        payload: comment,
      });
    } catch (error) {
      dispatch({
        type: CATEGORY_CONSTANTS.ERROR,
        payload: error,
      });
    }
  };
}
