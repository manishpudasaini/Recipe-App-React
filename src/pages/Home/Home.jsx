import React from 'react'
import styles from './Home.module.css'
import Recipe from '../../components/recipeList/Recipe'



function Home() {

  return (
    <>
    <div className={styles.homeWrapper}>
      <Recipe />
    </div>  
    
    </>
  )
}

export default Home