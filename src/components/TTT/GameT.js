import React, { useState, Fragment } from 'react';
import Board from './Board';
import { calculateWinner } from './helper';
import './GameT.css';

const GameT = () =>{
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];

        if(winner || squares[i]) return; 

        squares[i] = xO;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
    };

    const jumpTo=(step)=> {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    }

    const renderMoves = () =>
        history.map((_step, move) =>{
            const dest = move ? `Go to move #${move}` : "Go to game start";
            return(
                <li key={move}>
                    <button onClick={()=> jumpTo(move)}>{dest}</button>
                </li>
            );
        });

    return(
        <Fragment>
            <div className="dad">
            <h1 id="title">TTT Using Hooks</h1>
                <h3>{winner ? "Winner: " + winner : "Next Player: " + xO} </h3>

                <div className="dad2">
                    <Board squares={history[stepNumber]} onClick={handleClick}></Board>
                    <div className="info-wrapper">   
                            <div>
                            <h3>History</h3>
                                {renderMoves()} 
                            </div>         
                    </div>
                </div> 
            </div>
                          
        </Fragment>
    );

} 

export default GameT;