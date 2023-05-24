import React, { useEffect, useState } from 'react'
import { getMealDetails } from '../../apis/recipe';
import { useParams } from 'react-router-dom';
import styles from './RecipeDetail.module.css'

export default function RecipeDetail() {
    
    const{id}=useParams() 
    const[recipeDetail,setRecipeDetail]=useState(`${id}`)

    useEffect(()=>{
        getDetail();
    },[]);


    const getDetail=()=>{
      getMealDetails(id).then((res) => {
            setRecipeDetail(res)
        })
    }

  return (
    <div className={styles.container}>

        <div className={styles.title}>
          {recipeDetail?.strMeal}
        </div>

        <div className={styles.image}>
          <img src={recipeDetail?.strMealThumb} alt="food image in plate" /> 
        </div>

        <div className={styles.description}>
        {recipeDetail?.strInstructions}  
        </div>
           
    </div>
  )
}