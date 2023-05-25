import React, { useRef } from 'react'
import styles from './Common.module.css'


export default function SearchField(props) {
  const searchInputRef = useRef();


  const handelSearch = ()=>{
    let value = searchInputRef.current.value;
    props?.onSearchInitiate(value)
  }
  return (
    <div>
        <input ref={searchInputRef} />
        <button onClick={()=>handelSearch()}>Search</button>
    </div>
  )
}

 