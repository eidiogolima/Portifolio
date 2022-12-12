import React from 'react'
import styles from '../CSS/Components/Card.module.css';

const Card = ({...props}) => {

  
  return (
    <div id = {styles.card} >
      <img  src={props.img} alt="" />
      <p className='font-1-l'>{props.nome}</p>
    </div>
  )
}

export default Card