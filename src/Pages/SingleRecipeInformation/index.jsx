// SingleCatagoryInformation.js
import React, { useState } from 'react'
import styles from "./styles.module.css"
//import Hooks
import {  useDispatch, useSelector } from "react-redux";
import { PostComment } from '../../Redux/CatagoryReducer/actions';

//i have to use useParams Hook for the id  const {id } = useParam()

const SingleCatagoryInformation = () => {

  const [comment, setComment] = useState("")
  const {comments} = useSelector(state => state.CatagoryReducer)

  const {singleRecipe} = useSelector(state => state.CatagoryReducer)
  const disaptch = useDispatch()
  function HandleClick(singleRecipe,comment) {
    disaptch(PostComment(singleRecipe,comment))
    // alert("comment added succesfully")
    setComment("")
  }

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
        <input placeholder='Enter your Comment' onChange={(e) => setComment(e.target.value)}/>
        <button onClick={()=>HandleClick(singleRecipe,comment)}>Add Comment</button>
      </div>
      <div className={styles.comments}>
        <p>Comments posted:</p>
      </div>
    </div>
  )
}

export default SingleCatagoryInformation
