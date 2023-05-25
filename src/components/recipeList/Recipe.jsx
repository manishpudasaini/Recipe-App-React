import React, { useEffect, useState } from 'react'
import styles from './Recipe.module.css'
import Recipecard from '../../components/cards/Recipecard'
import {getAllRecipes,getAllReciesByCategory,getMealBySearch} from '../../apis/recipe'
import SearchField from '../../common/SearchField'

function Recipe() {
    const [categories,setCategories] = useState([])
    const [selectedcategory,setSelectedCatgeory] = useState('chicken')
    const [meal,setMeals]=useState([])

  useEffect(()=>{
    getAllRecipesCategory()
    getMealsByCategory()
  },[selectedcategory])

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

  const filterMealByName=(name)=>{
    getMealBySearch(name).then((res) =>{
      setMeals(res)
    })
  }
 

  return (
    <>
      <SearchField onSearchInitiate={(searchItem)=>{
        filterMealByName(searchItem);
      }} />
      <div className={styles.categoriesWrapper}>
          {categories?.length > 0 &&
            categories?.map((category) => (
              <div key={category.idCategory}>
                {/* Using onClick functio so we can choose the item and see the detail about items */}
                <button className={styles.categoryItem} 
                  onClick={()=>{setSelectedCatgeory(category.strCategory)}}>{category?.strCategory}</button> 
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