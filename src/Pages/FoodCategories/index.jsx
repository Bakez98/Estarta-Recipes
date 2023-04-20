import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';



//Functions from reducer actions
import FetchCategories from "../../Redux/CatagoryReducer/actions";
import {FetchSingleCategory} from "../../Redux/CatagoryReducer/actions"
// Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//CSS Modules
import styles from "./styles.module.css"


const FoodCategories = () => {
  const dispatch = useDispatch();
  const { foodCategories, singleCategory } = useSelector((state) => state.CatagoryReducer);
  const nav = useNavigate();
  console.log("loggin from foodCategories",foodCategories);
  


  function HandleClick(category) {
     dispatch(FetchSingleCategory(category))
     nav("./SingleCategory")
  }

  useEffect(() => {
    dispatch(FetchCategories());
    
  }, []);

  return (
    <div className={styles.Wrapper}>
      {
        foodCategories.map(category => (
          <Card 
            key={category.id} 
            className={styles.card}
            style={{ width: '18rem', height: '18rem' }}
          >
            <div 
              className={styles.imgContainer} 
              style={{ backgroundImage: `url(${category.category_picture})` }}
            >
              <div className={styles.overlay}>
                <Button onClick={() => HandleClick(category)} variant="primary">Check Recipes</Button>
              </div>
            </div>
            <Card.Body>
              <Card.Title>{category.name}</Card.Title>
            </Card.Body>
          </Card>
        ))
      }
    </div>
  );
};

export default FoodCategories;
