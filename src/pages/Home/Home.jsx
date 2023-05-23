import React from 'react'
import styles from './Home.module.css'
import Recipecard from '../../components/cards/Recipecard'
import { Link } from 'react-router-dom'



function Home() {

  return (
    <>
    <div className={styles.homeWrapper}>
        <div className={styles.recipeCardWrapper}>
            {
                [0,1,2,3,4,5].map(()=>
                <Recipecard />
                )}
            
        </div>
        
    </div>
    <div className='recipeButton'> 
          <Link to={'/recipe'}><button>Recipe list</button></Link>
    </div>

    </>
  )
}

export default Home