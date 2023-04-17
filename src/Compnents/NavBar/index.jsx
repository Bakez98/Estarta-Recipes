import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./styles.module.css"
const NavBar = () => {
  return (
    <div className={styles.NavBarContainer}>
      <nav className={styles.NavBarWrapper}>
        <h2>Estarta For Recipes</h2>
        <div className={styles.Buttons}>
        <Link to="/"><button>Home</button> </Link>
        <Link to="/AddRecipes"><button>Add Recipe</button> </Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar