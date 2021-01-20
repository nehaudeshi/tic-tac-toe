import React from 'react'
import { Link } from 'react-router-dom'
import '../Button.css'

const ButtonBlue = (props) => {
    return(
        <Link to={props.src} className="btn btn-blue" state={props.state}>{props.title}</Link>
    )
}

export default ButtonBlue