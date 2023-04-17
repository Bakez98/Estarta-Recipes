import React from 'react'
import styles from "./styles.module.css"

const SingleCategory = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Recipe Name</h2>
      <div className={styles.imageAndDescription}>
        <div className={styles.image}>the Image</div>
        <div className={styles.description}>
          <p>Recipe Name:</p>
          <p>Recipe Ingredients:</p>
          <p>Recipe Description:</p>
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

export default SingleCategory
