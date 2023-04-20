import React, { useState , useRef} from 'react';
import styles from "./styles.module.css";

const AddRecipes = () => {
  const [mainCategory, setMainCategory] = useState('');
  const [recipeName, setRecipeName] = useState('');
  const [recipeIngredients, setRecipeIngredients] = useState('');
  const [recipePicture, setRecipePicture] = useState(null);
  const [recipeDescription, setRecipeDescription] = useState('');

  const mainCategories = [
    'ItalianFood',
    'MexicanFood',
    'ChineseFood',
    'IndianFood',
    'AmericanFood',
  ];

  const myRef = useRef({
    categories: "",
    recipesName: "",
    recipeIngredients: "",
    recipepicture: "",
    recipedescription: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can dispatch an action to add the recipe to your Redux store or send the data to your server

    // Reset the form
    setMainCategory('');
    setRecipeName('');
    setRecipeIngredients('');
    setRecipePicture(null);
    setRecipeDescription('');
  };

  return (
    <form className={styles['form-container']} onSubmit={handleSubmit}>
      <div className={styles['form-input']}>
        <label htmlFor="mainCategory">Main Category:</label>
        <select
          id="mainCategory"
          value={mainCategory}
          onChange={(event) => setMainCategory(event.target.value)}
        >
          <option value="">-- Select a category --</option>
          {mainCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className={styles['form-input']}>
        <label htmlFor="recipeName">Recipe Name:</label>
        <input
          type="text"
          id="recipeName"
          value={recipeName}
          onChange={(event) => setRecipeName(event.target.value)}
        />
      </div>
      <div className={styles['form-input']}>
        <label htmlFor="recipeIngredients">Recipe Ingredients:</label>
        <textarea
          id="recipeIngredients"
          value={recipeIngredients}
          onChange={(event) => setRecipeIngredients(event.target.value)}
        />
      </div>
      <div className={styles['form-input']}>
        <label htmlFor="recipePicture">Upload Recipe Picture:</label>
        <input
          type="file"
          id="recipePicture"
          onChange={(event) => setRecipePicture(event.target.files[0])}
        />
      </div>
      <div className={styles['form-input']}>
        <label htmlFor="recipeDescription">Recipe Description:</label>
        <textarea
          id="recipeDescription"
          value={recipeDescription}
          onChange={(event) => setRecipeDescription(event.target.value)}
        />
      </div>
      <div className={styles['form-button']}>
        <button type="submit">Add Recipe</button>
      </div>
    </form>
  );
};

export default AddRecipes;
