import axios from "axios"

//get recipe by category
export function getAllReciesByCategory(category){
    return new Promise((resolve,reject)=>{
        axios({
            method:'get',
            url:`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        }).then((resp)=>{
            resolve(resp?.data?.meals)
        })
    })
}

//for all recipe name list
export function getAllRecipes(){
    return new Promise((resolve,reject)=>{
        axios({
            method:'get',
            url: 'https://www.themealdb.com/api/json/v1/1/categories.php'
        }).then((resp)=>{
            resolve(resp.data.categories)
        })
    })
}

//for meal details
export function getMealDetails(mealID){
    return new Promise((resolve,reject)=>{
        axios({
            method:'get',
            url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
        }).then((res)=>{
            resolve(res?.data?.meals?.[0])
        })
    })
}

//get meal by search name
export function getMealBySearch(mealName){
    return new Promise((resolve,reject)=>{
        axios({
            method:'get',
            url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
        }).then((resp)=>{
            resolve(resp?.data?.meals)
        })
    })
}
