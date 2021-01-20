import React, { useState } from 'react'
import ButtonWhite from '../common/ButtonWhite'
import './PickSide.css'

const PickSide = (props) => {
    const [sideSelected, selectSide] = useState("O")

    const changeSide = (event) => {
        selectSide(event.target.value)
    }

    return(
    <div>
        <h1>Pick Your Side</h1>
        <div className="row pick-side justify-content-center" >
            <div className="col-5">
                <img src="/oshadow.png"/>
                <br/>
                <input type="radio" name="sidePick" value="O" onChange={changeSide} checked={sideSelected === "O"}/>
            </div>
            <div className="col-5">
                <img src="/xshadow.png"/>
                <br/>
                <input type="radio" name="sidePick" value="X" onChange={changeSide} checked={sideSelected === "X"}/>
            </div>
        </div>
        <ButtonWhite title="Continue" src="/play" state={{side: sideSelected, ai: props.location.state.ai}}/>
    </div>
    )
}

export default PickSide