import React, { useEffect, useState } from 'react'
import styles from './Recipe.module.css'
import Recipecard from '../../components/cards/Recipecard'
import {getAllRecipes,getAllReciesByCategory} from '../../apis/recipe'

function Recipe() {
    const [categories,setCategories] = useState([])
    const [selectedcategory,setSelectedCatgeory] = useState('beef')
    const [meal,setMeals]=useState([])

  useEffect(()=>{
    getAllRecipesCategory()
    getMealsByCategory()
  },[])

  const getAllRecipesCategory =()=>{
    getAllRecipes().then((res)=>{
      setCategories(res)
    })
  }

  const getMealsByCategory = () => {
    getAllReciesByCategory(selectedcategory).then((res) => {
      setMeals(res)
    })
  }

  return (
    <>
      <div className={styles.categoriesWrapper}>
          {categories?.length > 0 &&
            categories?.map((category) => (
              <div className={styles.categoryItem} key={category.idCategory}>
                {category?.strCategory}
              </div>
          ))}
      </div>
      
      <div className={styles.recipeCardWrapper}>
          {meal.map((recipe) => (
              <div>
                <Recipecard recipe={recipe} />
              </div>
            ))}
      </div>
    
    </>

  )
}

export default Recipe