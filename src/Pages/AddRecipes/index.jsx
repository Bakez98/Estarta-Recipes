import React, { useEffect, useState } from 'react';
import styles from "./styles.module.css";
import { useDispatch , useSelector} from 'react-redux';
import { CreateNewRecipe, UpdateCategory } from '../../Redux/CatagoryReducer/actions';
import { useNavigate } from 'react-router-dom';

const AddRecipes = () => {

  const dispatch =useDispatch()
  const {singleCategory} = useSelector(state => state.CatagoryReducer)
  const nav = useNavigate()
  const mainCategories = [
    'ItalianFood',
    'MexicanFood',
    'ChineseFood',
    'IndianFood',
    'AmericanFood',
  ];


  const [form, setForm] = useState({
    categoryName: "Indian Food",
    comments: [],
    picture: "",
    ingredients: "",
    description: "",
    name: "",

  })
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(CreateNewRecipe(form))
    setForm(
      {
        categoryName: "Indian Food",
        comments: [],
        picture: "",
        ingredients: "",
        description: "",
        name: "",
      }
    )
    nav("/")
  };


  const handelChange = (e) => {
    setForm((pervs) => ({
      ...pervs,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    dispatch(UpdateCategory(singleCategory))
  }, [singleCategory])
  

  return (
    <form className={styles['form-container']} onSubmit={handleSubmit}>
      <div className={styles['form-input']}>
        <label htmlFor="mainCategory">Main Category:</label>
        <select
          id="mainCategory"
          onChange={handelChange}
          name="categoryName"
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
          onChange={handelChange}
          name="name"
        />
      </div>
      <div className={styles['form-input']}>
        <label htmlFor="recipeIngredients">Recipe Ingredients:</label>
        <textarea
          id="recipeIngredients"
          onChange={handelChange}
          name="ingredients"
        />
      </div>
      <div className={styles['form-input']}>
        <label htmlFor="recipePicture">Upload Recipe Picture:</label>
        <input
          type="file"
          id="recipePicture"
          onChange={handelChange}
          name='picture'
        />
      </div>
      <div className={styles['form-input']}>
        <label htmlFor="recipeDescription">Recipe Description:</label>
        <textarea
          id="recipeDescription"
          onChange={handelChange}
          name="description"
        />
      </div>
      <div className={styles['form-button']}>
        <button type="submit">Add Recipe</button>
      </div>
    </form>
  );
};

export default AddRecipes;
