import React from 'react'
import styles from "./styles.module.css"
const NavBar = () => {
  return (
    <div className={styles.NavBarContainer}>
      <nav className={styles.NavBarWrapper}>
        <h2>Estarta For Recipes</h2>
        <button>Add Recipe</button>
      </nav>
    </div>
  )
}

export default NavBar