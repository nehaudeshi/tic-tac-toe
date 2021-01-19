import React from 'react'
import ButtonWhite from '../common/ButtonWhite'

const PickSide = () => {
    return(
    <div>
        <h1>Pick Your Side</h1>
        <div className="row">
            <div className="col-xs-6">
                <img src="/o.png"/>
                <br/>
                <input type="radio" name="sidePick" value="O"/>
            </div>
            <div className="col-xs-6">
                <img src="/x.png"/>
                <br/>
                <input type="radio" name="sidePick" value="X"/>
            </div>
        </div>
        <ButtonWhite title="Continue" src="/play"/>
    </div>
    )
}

export default PickSide