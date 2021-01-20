import React from 'react'
import { Link } from 'react-router-dom'
import '../Button.css'

const ButtonBlue = (props) => {
    return(
        <div>
             {props.src!=undefined ? 
                <Link to={{
                    pathname:props.src,
                    state: props.state}}
                    className="btn btn-blue">{props.title}</Link>
            :
                <button className="btn btn-blue">{props.title}</button>
            }
        </div>
        
    )
    
}

export default ButtonBlue