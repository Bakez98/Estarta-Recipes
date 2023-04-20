// SingleCatagoryInformation.js
import React from 'react'
import styles from "./styles.module.css"
//import Hooks
import { useDispatch, useSelector } from "react-redux";

//i have to use useParams Hook for the id  const {id } = useParam()

const SingleCatagoryInformation = () => {

  const {singleRecipe} = useSelector(state => state.CatagoryReducer)
  console.log("LOGGING FROM INSIDE SINGLE RECIPE",singleRecipe)

  return (
    <div className={styles.wrapper}>
      <h2>{singleRecipe.name}</h2>
      <div className={styles.imageAndDescription}>
        <div className={styles.image}><img src={singleRecipe.picture} alt="Recipe" className={styles.img} /></div>
        <div className={styles.description}>
          <p><strong>Recipe Name:</strong> {singleRecipe.name}</p>
          <p><strong>Recipe Ingredients:</strong> {singleRecipe.ingredients}</p>
          <p><strong>Recipe Description:</strong> {singleRecipe.description}</p>
        </div>
      </div>
      <div className={styles.comment}>
        <h2>Add Comment</h2>
        <input placeholder='Enter your Comment'/>
        <button>Add Comment</button>
      </div>
      <div className={styles.comments}>
        <p>Comments posted:</p>
      </div>
    </div>
  )
}

export default SingleCatagoryInformation
