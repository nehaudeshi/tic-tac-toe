import ButtonBlue from "../common/ButtonBlue"
import React from 'react'
import ButtonWhite from "../common/ButtonWhite"

const PlayMode = () => {
    return(
    <div>
        <img src="/tic.jpg"/>
        <h1>Choose your play mode</h1>
        <ButtonBlue title="With AI" src="/pickside"/>
        <br/>
        <ButtonWhite title="With a Friend" src="/pickside"/>
    </div>
    )
}

export default PlayMode