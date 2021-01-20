import React from 'react'
import { Link } from 'react-router-dom'
import '../Button.css'

const ButtonWhite = (props) => {
    console.log(props.state)
    return(
        <Link to={{
            pathname:props.src,
            state: props.state}}
            className="btn btn-white">{props.title}</Link>
    )
}

export default ButtonWhite