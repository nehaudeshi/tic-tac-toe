import React from 'react'
import { Link } from 'react-router-dom'
import '../Button.css'

const ButtonBlue = (props) => {
    return(
        <div>
             {props.src!=undefined ? 
                <Link to={props.src} className="btn btn-blue" state={props.state}>{props.title}</Link>
            :
                <button className="btn btn-blue">{props.title}</button>
            }
        </div>
        
    )
    
}

export default ButtonBlue