import React from 'react'
import styles from './RecipeCard.module.css'

function Recipecard() {
  return (
    <div className={styles.cardWrapper}>
        <img src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg" alt="" className={styles.cardImage}/>
        <span>
          Classc Greek Salad
        </span>
    </div>
  )
}

export default Recipecard