import React from 'react'
import { Link } from 'react-router-dom'
import '../Button.css'

const ButtonWhite = (props) => {
    return(
        <div>
             {props.src!=undefined ? 
                <Link to={{
                    pathname:props.src,
                    state: props.state}}
                    className="btn btn-white">{props.title}</Link>
            :
                <button className="btn btn-white">{props.title}</button>
            }
        </div>
   )
}

export default ButtonWhite