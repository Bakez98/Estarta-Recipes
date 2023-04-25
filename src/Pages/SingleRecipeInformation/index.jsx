// SingleCatagoryInformation.js
import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"
//import Hooks
import {  useDispatch, useSelector } from "react-redux";
import { PostComment, UpdateCategory } from '../../Redux/CatagoryReducer/actions';

//i have to use useParams Hook for the id  const {id } = useParam()

const SingleCatagoryInformation = () => {

  const [comment, setComment] = useState("")
  // const {comments} = useSelector(state => state.CatagoryReducer)

  const {singleRecipe,singleCategory ,flag} = useSelector(state => state.CatagoryReducer)
  const dispatch = useDispatch()
  function HandleClick(comment) {
    dispatch(PostComment(comment))
   
  }

  useEffect(() => {
    dispatch(UpdateCategory(singleCategory))
  }, [flag])
  
  

  return (
    <div className={styles.wrapper}>
      <h2>{singleRecipe?.name}</h2>
      <div className={styles.imageAndDescription}>
        <div className={styles.image}><img src={singleRecipe?.picture} alt="Recipe" className={styles.img} /></div>
        <div className={styles.description}>
          <p><strong>Recipe Name:</strong> {singleRecipe?.name}</p>
          <p><strong>Recipe Ingredients:</strong> {singleRecipe?.ingredients}</p>
          <p><strong>Recipe Description:</strong> {singleRecipe?.description}</p>
        </div>
      </div>
      <div className={styles.comment}>
        <h2>Add Comment</h2>
        <input placeholder='Enter your Comment' onChange={(e) => setComment(e.target.value)}/>
        <button onClick={()=>HandleClick(comment)}>Add Comment</button>
      </div>
      <div className={styles.comments}>
        <p>Comments posted:</p>
        <div className={styles.CommentsWrapper}>
    {singleRecipe.comments?.map((comment) => (
      <div className={styles.SingleComment}>{comment}</div>
    ))}
    </div>
      </div>
    </div>
  )
}

export default SingleCatagoryInformation
