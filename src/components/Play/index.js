import React, { useState, useEffect } from 'react'
import './Play.css'
import ButtonBlue from '../common/ButtonBlue'
import ButtonWhite from '../common/ButtonWhite'

const Play = (props) => {
    const [turn, setTurn] = useState("O")
    const [currentState, setCurrentState] = useState("---------")
    const [cellClicked, setCellClicked] = useState(-1)
    const [player1, setScore1] = useState(0)
    const [player2, setScore2] = useState(0)
    const [ai, setAI] = useState()
    const [side, setSide] = useState()
    const cell0 = React.createRef()
    const cell1 = React.createRef()
    const cell2 = React.createRef()
    const cell3 = React.createRef()
    const cell4 = React.createRef()
    const cell5 = React.createRef()
    const cell6 = React.createRef()
    const cell7 = React.createRef()
    const cell8 = React.createRef()

    useEffect(() => {
        setAI(props.location.state.ai)
        if(props.location.state.ai != undefined){
            setSide(props.location.state.side)
            if(props.location.state.side === "X"){
                aiPlays()
            }
        }
    },[])

    useEffect(() => {
        if(cellClicked >= 0 && cellClicked<9){
            if(currentState[cellClicked] === "-"){
                setCurrentState(setCharAt(currentState, cellClicked, turn))
                if (turn === "X"){
                    checkCell(cellClicked).current.setAttribute("src","/x.png")
                    setTurn("O")
                } else {
                    checkCell(cellClicked).current.setAttribute("src","/o.png")
                    setTurn("X")
                }
            } 
        }
    },[cellClicked]) 

    useEffect(() => {
        //Cell Visibility
        if(cellClicked>=0){
            document.querySelectorAll(".ttt-cell img")[cellClicked].style.visibility = "unset"
        }

        //Check if player has won
        for(let i=0 ;i<9; i++){
            if(currentState[i] != "-" && currentState[i] === currentState[i+3] && currentState[i+3] === currentState[i+6]){
                setTimeout(() => winGame(currentState[i]),500)
            } else if(currentState[i] != "-" && currentState[i] === currentState[i+1] && currentState[i+1] === currentState[i+2]){
                if(i === 0 || i === 3 || i === 6){
                    setTimeout(() => winGame(currentState[i]),500)
                }
            }
        }
        if(currentState[0] != "-" && currentState[0] === currentState[4] && currentState[4] === currentState[8]){
            setTimeout(() => winGame(currentState[0]),500)
        } else if(currentState[2] != "-" && currentState[2] === currentState[4] && currentState[4] === currentState[6]){
            setTimeout(() => winGame(currentState[2]),500)
        }

        //AI Turn
        if(ai && turn!=side){
            aiPlays()
        }
       
    },[currentState])

    function aiPlays(){
        fetch("https://stujo-tic-tac-toe-stujo-v1.p.rapidapi.com/" + currentState + "/" + turn, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "5ccbcda7bfmsh8c3ab5cbec6b6bap155a93jsncbc675a2b6c9",
                    "x-rapidapi-host": "stujo-tic-tac-toe-stujo-v1.p.rapidapi.com"
            }
        })
        .then(result => result.json()
        .then(response => {
            setCellClicked(response.recommendation)
        })
        )
        .catch(err => {
            console.error(err);
        });
    }

    function setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substring(0,index) + chr + str.substring(index+1);
    }

    function checkCell(cell){
        switch (cell){
            case 0:
                return cell0
            case 1:
                return cell1
            case 2:
                return cell2
            case 3:
                return cell3
            case 4:
                return cell4
            case 5:
                return cell5
            case 6:
                return cell6
            case 7:
                return cell7
            case 8:
                return cell8
        }
    }

    function winGame(winner){
        if(winner === "O"){
            if(ai && side==="X"){
                setScore2(prevScore => prevScore + 1)
                alert("AI wins the game")
            } else {
                setScore1(prevScore => prevScore + 1)
                alert("Player 1 wins the game")
            }
        } else {
            if(ai){
                if(side === "X"){
                    setScore1(prevScore => prevScore + 1)
                    alert("Player 1 wins the game")
                } else {
                    setScore2(prevScore => prevScore + 1)
                    alert("AI wins the game")
                }
            }
            else {
                setScore2(prevScore => prevScore + 1)
                alert("Player 2 wins the game")
            }
        }
        resetClick()
    }

    function resetClick(){
        setTurn("O")
        setCurrentState("---------")
        setCellClicked(-1)        
        document.querySelectorAll(".ttt-cell img").forEach((item) => {
            item.style.visibility = "hidden"
        })

    }

    function resetScore(){
        resetClick()
        setScore1(0)
        setScore2(0)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-4 text-left">
                    <p>Player 1</p>
                </div> 
                <div className="col-4 score-grid">
                    <div className="row">
                        <div className="col-6 text-right border-right"><h6 className="score-1">{player1}</h6></div>
                        <div className="col-6 text-left"><h6 className="score-2">{player2}</h6></div>
                    </div>
                </div>
                <div className="col-4 text-right">
                    <p>{ai ? "AI" : "Player 2"}</p>
                </div>  
            </div>
            <div className="row ttt-grid">
                <div className="col-4 ttt-cell" onClick={() => setCellClicked(0)}><img src="/o.png" ref={cell0}></img></div>
                <div className="col-4 ttt-cell vertical" onClick={() => setCellClicked(1)}><img src="/o.png" ref={cell1}></img></div>
                <div className="col-4 ttt-cell" onClick={() => setCellClicked(2)}><img src="/o.png" ref={cell2}></img></div>
                <div className="col-4 ttt-cell horizontal" onClick={() => setCellClicked(3)}><img src="/o.png" ref={cell3}></img></div>
                <div className="col-4 ttt-cell horizontal vertical" onClick={() => setCellClicked(4)}><img src="/o.png" ref={cell4}></img></div>
                <div className="col-4 ttt-cell horizontal" onClick={() => setCellClicked(5)}><img src="/o.png" ref={cell5}></img></div>
                <div className="col-4 ttt-cell" onClick={() => setCellClicked(6)}><img src="/o.png" ref={cell6}></img></div>
                <div className="col-4 ttt-cell vertical" onClick={() => setCellClicked(7)}><img src="/o.png" ref={cell7}></img></div>
                <div className="col-4 ttt-cell cell-8" onClick={() => setCellClicked(8)}><img src="/o.png" ref={cell8}></img></div>
            </div>
            <div onClick={resetClick}>
                <ButtonBlue title="Reset Game" />
            </div>
            <div onClick={resetScore}>
                <ButtonWhite title="Reset Score" />
            </div>
        </div>
    )
}

export default Play