import React from 'react'
import { Link } from 'react-router-dom'

const ButtonBlue = (props) => {
    return(
        <Link to={props.src}>{props.title}</Link>
    )
}

export default ButtonBlue