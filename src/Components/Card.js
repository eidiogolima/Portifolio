import React from 'react'
import styles from '../CSS/Components/Card.module.css';

const Card = ({...props}) => {

  const activeFunction = ({target}) => {
    console.log(target)
  } 
  return (
    <div id = {styles.card} >
      <img  src={props.img} alt="" />
      <a href = {props.link} onMouseEnter={activeFunction} className='font-1-l'>{props.nome}</a>
    </div>
  )
}

export default Card