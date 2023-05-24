import React, { useEffect, useState } from 'react'
import { getMealDetails } from '../../apis/recipe';
import { useParams } from 'react-router-dom';

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
    <div>
    { recipeDetail?.strMeal}
    <br />
      <img src={recipeDetail?.strMealThumb} alt="food image in plate" /> 
    <br />
      {recipeDetail?.strInstructions}   
    </div>
  )
}