import React from 'react'
import styles from '../CSS/Components/Card.module.css';

const Card = ({...props}) => {

  
  return (
    <div id = {styles.card} >
      <img  src={props.img} alt="" />
      <span className='font-1-l'>{props.nome}</span>
    </div>
  )
}

export default Card