import * as CATEGORY_CONSTANTS from "./constants"
const initState = {
  loading:false,
  error:null,
  foodCategories:[],
  singleCategory:{},
  singleRecipe:[],
  comments:[]
};

function CatagoryReducer(state = initState, action) {
    switch (action.type) {
        case CATEGORY_CONSTANTS.LOADING:
          return{
            ...state,
            loading:true,
          }
        case CATEGORY_CONSTANTS.FETCH_SUCCESS:
          return{
            ...state,
            loading:false,
            foodCategories:action.payload,
          }
        case CATEGORY_CONSTANTS.FETCH_SINGLE_CATEGORY:
          return{
            ...state,
            loading:false,
            singleCategory:action.payload
          }
        case CATEGORY_CONSTANTS.FETCH_SINGLE_RECIPE:
          return{
            ...state,
            loading:false,
            singleRecipe:action.payload
          }
        case CATEGORY_CONSTANTS.ERROR:
          return{
            ...state,
            error:action.payload,
          }
        case CATEGORY_CONSTANTS.POST_COMMENT:
          return{
            ...state,
            loading:false,
            comments:[...comments, action.payload]
          }
        default:
            return state;
    }
}

export default CatagoryReducer;