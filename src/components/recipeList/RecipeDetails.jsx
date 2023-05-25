import React, { useEffect, useState } from 'react'
import { getMealDetails } from '../../apis/recipe';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './RecipeDetail.module.css'
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { leftArrow } from '../../uti/icons';



export default function RecipeDetail() {
    
    const{id}=useParams() 
    const[recipeDetail,setRecipeDetail]=useState(`${id}`)
    const navigate = useNavigate()

    useEffect(()=>{
        getDetail()
    });


    const getDetail=()=>{
      getMealDetails(id).then((res) => {
            setRecipeDetail(res)
        })
    }

//Navigate function : when the function is callled it will helps to navigate to the page which we just come from (history page)
    const goBack=()=>{
      navigate(-1)
    }
 //if we want to go back to home we use this function   
    // const goBackHome=()=>{
    //   navigate('/')
    // }

  return (
    <div className={styles.container}>

        <div className='icon-wrapper' onClick={goBack}>
          {/* using LiNK  from react router dom */}
          {/* <Link to={'/'}>
              {leftArrow()}
          </Link> */}

          {/* using navigate */}
          {leftArrow() }
        </div>

        <div className={styles.heading}>
          <h1 className={styles.title}>{recipeDetail?.strMeal}</h1>  
        </div>

        <div className={styles.image}>
              {recipeDetail?.strYoutube ?(
                <ReactPlayer url={recipeDetail?.strYoutube } width="100%" />
              ): (
                <img src={recipeDetail?.strMealThumb} alt="food in plate" /> 
              )}
        </div>

        <div className={styles.description}>
            <div className={styles.area}>
              <ul>
                <li><span>Category</span>{recipeDetail?.strCategory}</li>
                <li><span>Country</span>{recipeDetail?.strArea}</li>
              </ul>
            </div>

            <h2>Description</h2>
            {recipeDetail?.strInstructions}  

        </div>


        
        <div className={styles.ingredient}>
          <h1>Ingredient</h1>
          {Array.from({length:20}).map((item,index)=>(
            <>
              {recipeDetail?.[`strIngredient${index+1}`] ? (
                <span>{recipeDetail?.[`strIngredient${index+1}`]}</span>
              ) : ('')}
            </>
          ))}
        </div>
           
    </div>
  )
}