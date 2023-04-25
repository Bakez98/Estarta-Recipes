import * as CATEGORY_CONSTANTS from "./constants"
const initState = {
  loading:false,
  error:null,
  foodCategories:[],
  singleCategory:{},
  singleRecipe:{},
  flag: true,
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
          const Data = {...state.singleRecipe, comments:[...state.singleRecipe.comments, action.payload]}
          // console.log(Data)
          return{
            ...state,
            singleRecipe: Data,
            singleCategory:{...state.singleCategory, recipes:state.singleCategory.recipes.map((recipe) => recipe.id == Data.id ? Data : recipe )},
            flag :!state.flag
          }

        case CATEGORY_CONSTANTS.POST_RECIPE:
          console.log("from inside reducer",action.payload)
          return{
            ...state,
            singleCategory:{...state.singleCategory, recipes:[...state.singleCategory.recipes,{...action.payload,id: crypto.randomUUID()}]},
          }
        default:
            return state;
    }
}

export default CatagoryReducer;