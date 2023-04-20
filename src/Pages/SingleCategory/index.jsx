import React from "react";
import styles from "./styles.module.css";
//import Hooks
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

//Functions from reducer actions
import { FetchSingleRecipe } from "../../Redux/CatagoryReducer/actions";

const SingleCategory = () => {
  const dispatch = useDispatch();
  const { singleCategory } = useSelector((state) => state.CatagoryReducer);
  console.log("loggin from foodCategories",singleCategory);
  const nav = useNavigate();

  function handleClick(recipe) {
    dispatch(FetchSingleRecipe(recipe))
    nav("/SingleRecipeInformation")
  }

  return (
    <div>
      <h2>{singleCategory.name}</h2>
      <div className={styles.wrapper}>
        {singleCategory.recipes?.map((recipe) => (
          <div className={styles.recipe} key={recipe.id}>
            <div className={styles.imgContainer}>
              <img src={recipe.picture} alt="Recipe" />
            </div>
            <div>{recipe.name}</div>
            <button className={styles.button} onClick={() => handleClick(recipe)}>Check out Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;
