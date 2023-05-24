import React, { useEffect, useState } from 'react'
import { getMealDetails } from '../../apis/recipe';
import { useParams } from 'react-router-dom';
import styles from './RecipeDetail.module.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'



export default function RecipeDetail() {
    
    const{id}=useParams() 
    const[recipeDetail,setRecipeDetail]=useState(`${id}`)

    useEffect(()=>{
        getDetail()
    },[]);


    const getDetail=()=>{
      getMealDetails(id).then((res) => {
            setRecipeDetail(res)
        })
    }

  return (
    <div className={styles.container}>

        <div className={styles.heading}>
          <h1 className={styles.title}>{recipeDetail?.strMeal}</h1>
          <Link to={'/'}>
            <FontAwesomeIcon icon={faXmark} />
          </Link>
          
        </div>

        <div className={styles.image}>
          <img src={recipeDetail?.strMealThumb} alt="food in plate" /> 
        </div>

        <div className={styles.description}>
            <div className={styles.area}>
              <ul>
                <li><span>Category</span>{recipeDetail?.strCategory}</li>
                <li><span>Country</span>{recipeDetail?.strArea}</li>
              </ul>
            </div>
            {recipeDetail?.strInstructions}  
        </div>
           
    </div>
  )
}