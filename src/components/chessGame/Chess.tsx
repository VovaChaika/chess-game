import React, {useEffect, useState} from "react";
import BoardComponent from "./board/BoardComponent";
import "./chess.scss"
import {Board} from "../../models/Board";
import {Player} from "../../models/Player";
import {Colors} from "../../models/Colors";
import LostFigures from "./LostFigures";
import Timer from "./Timer";
function Chess() {

    const [board, setBoard] = useState(new Board())
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
    const [currentPlayer, setCurrentPlayer] = useState<Player|null>(null)
    useEffect(()=>{
        restart()
        setCurrentPlayer(whitePlayer)
    },[])

    function restart(){
        const newBoard = new Board();
        newBoard.initCells()
        newBoard.addFigures()
        setBoard(newBoard)
    }
    function swapPlayer(){
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
    }

    return (
        <div className="chess">
            <Timer currentPlayer={currentPlayer} restart={restart}/>
            <BoardComponent board={board} setBoard={setBoard} currentPlayer={currentPlayer} swapPlayer={swapPlayer}/>
            <div>
                <LostFigures title={"Втрати чорних:"} figures={board.lostBlackFigures}/>
                <LostFigures title={"Втрати білих:"} figures={board.lostWhiteFigures}/>
            </div>
        </div>
    )
}

export default Chess