import React, { useState } from 'react'
import ButtonWhite from '../common/ButtonWhite'
import './PickSide.css'

const PickSide = () => {
    const [sideSelected, selectSide] = useState("O")

    const changeSide = (event) => {
        selectSide(event.target.value)
    }

    return(
    <div>
        <h1>Pick Your Side</h1>
        <div className="row pick-side" >
            <div className="col-6">
                <img src="/o.png"/>
                <br/>
                <input type="radio" name="sidePick" value="O" onChange={changeSide} checked={sideSelected === "O"}/>
            </div>
            <div className="col-6">
                <img src="/x.png"/>
                <br/>
                <input type="radio" name="sidePick" value="X" onChange={changeSide} checked={sideSelected === "X"}/>
            </div>
        </div>
        <ButtonWhite title="Continue" src="/play" state={{side: sideSelected}}/>
    </div>
    )
}

export default PickSide