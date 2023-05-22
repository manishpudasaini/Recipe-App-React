import React from 'react'
import styles from './Home.module.css'
import Recipecard from '../../components/cards/Recipecard'

function Home() {
  return (
    <div className={styles.homeWrapper}>
        <div className={styles.recipeCardWrapper}>
            {
                [0,1,2,3,4,5].map(()=>
                <Recipecard />
                )}
            
        </div>
        
    </div>
  )
}

export default Home