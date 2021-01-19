import React from 'react'

const Play = () => {
    return(
        <div>
            <div className="row">
                <div className="col-xs-4 text-left">
                    <p>You</p>
                </div> 
                <div className="col-xs-4 score-grid">
                <div className="col-xs-6 text-right"><p className="score-1">0</p></div>
                <div className="col-xs-6 text-left"><p className="score-2">0</p></div>
                </div>
                <div className="col-xs-4 text-right">
                    <p>AI</p>
                </div>  
            </div>
            <div className="row ttt-grid">
                <div className="col-xs-4 ttt-cell cell-0"><img src="/x.png"></img></div>
                <div className="col-xs-4 ttt-cell cell-1"><img src="/x.png"></img></div>
                <div className="col-xs-4 ttt-cell cell-2"><img src="/x.png"></img></div>
                <div className="col-xs-4 ttt-cell cell-3"><img src="/x.png"></img></div>
                <div className="col-xs-4 ttt-cell cell-4"><img src="/x.png"></img></div>
                <div className="col-xs-4 ttt-cell cell-5"><img src="/x.png"></img></div>
                <div className="col-xs-4 ttt-cell cell-6"><img src="/x.png"></img></div>
                <div className="col-xs-4 ttt-cell cell-7"><img src="/x.png"></img></div>
                <div className="col-xs-4 ttt-cell cell-8"><img src="/x.png"></img></div>
            </div>
        </div>
    )
}

export default Play