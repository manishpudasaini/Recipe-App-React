import React, { useEffect } from 'react'
import styles from './RecipeCard.module.css'

function Recipecard(props) {


  return (
    <div className={styles.recipeCardWrapper}>
        <img src={props.recipe.strMealThumb} alt="food image" className={styles.cardImage}/>
          <div className={styles.contentWrapper}>
            <span className={styles.mealTitle}>{props?.recipe?.strMeal}</span>
            <span className={styles.mealSubtitle}>Time: <b>15m</b></span>  
          </div>    
    </div>
  )
}

export default Recipecard