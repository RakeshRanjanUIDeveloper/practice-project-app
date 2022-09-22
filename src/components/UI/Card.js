import React from 'react'
import classes from './Card.Module.css'
const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Card