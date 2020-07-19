import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { incrementLevel, landingPage, resetLevel } from '../../actions';
import store from '../../reducers';
import next from '../../nav-icons/next.png';
import back from '../../nav-icons/back.png';

function Game() {
    const dispatch = useDispatch();
    const [ state, setState ] = useState(store.getState());
    const [ showButton, setShowButton ] = useState(false);
    const [ currentPoints, setCurrentPoints ] = useState(0);
    const correct = '#7fb883', incorrect = '#ba6868', neutral = '#b1ceee';

    store.subscribe(() => {
        setState(() => store.getState())
    });

    function selectAnswer(selected) {
        if(state.questions[state.level].c === selected && !showButton) {
            setCurrentPoints(prev => ++prev);
            setShowButton(() => true);
        }
        else {
            setShowButton(() => true);
        }
        document.getElementById('a1').style.backgroundColor = state.questions[state.level].c === 'A' ? correct : incorrect;
        document.getElementById('a2').style.backgroundColor = state.questions[state.level].c === 'B' ? correct : incorrect;
        document.getElementById('a3').style.backgroundColor = state.questions[state.level].c === 'C' ? correct : incorrect;
        document.getElementById('a4').style.backgroundColor = state.questions[state.level].c === 'D' ? correct : incorrect;
        if(state.level + 1 === state.questions.length) document.getElementById('your-score').style.visibility = 'visible';
    }

    function setColorNeutral() {
        document.getElementById('a1').style.backgroundColor = neutral;
        document.getElementById('a2').style.backgroundColor = neutral;
        document.getElementById('a3').style.backgroundColor = neutral;
        document.getElementById('a4').style.backgroundColor = neutral;
    }

    return (
        <div className="game">
            <div className='game-info' style={{clear: 'both'}}>
                <h2 className='player-score'>{state.name}: {currentPoints}</h2><h2 className='current-level'>Question: {state.level + 1}/{state.questions.length}</h2>
            </div>
            <div className='question'>{state.questions[state.level].q}</div>
            <table className='answers-table'>
                <tbody>
                    <tr>
                        <td id='a1' onClick={() => selectAnswer('A')}>
                            {state.questions[state.level].a1}
                        </td>
                        <td id='a2' onClick={() => selectAnswer('B')}>
                            {state.questions[state.level].a2}
                        </td>
                    </tr>
                    <tr>
                        <td id='a3' onClick={() => selectAnswer('C')}>
                            {state.questions[state.level].a3}
                        </td>
                        <td id='a4' onClick={() => selectAnswer('D')}>
                            {state.questions[state.level].a4}
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <h1 id='your-score' style={{visibility: 'hidden'}}>Your score: {currentPoints}/{state.questions.length} ({(currentPoints / (state.questions.length / 100)).toFixed(0)}%)</h1>
            {showButton && state.level + 1 < state.questions.length && <img src={next} onClick={() => {
                dispatch(incrementLevel());
                setShowButton(() => false);
                setColorNeutral();
            }} className='nav-button' alt='Next' />}
            {showButton && state.level + 1 >= state.questions.length && <img src={back} onClick={() => {
                dispatch(landingPage());
                dispatch(resetLevel());
                setColorNeutral();
            }} className='nav-button' alt='Back' />}
        </div>
    )
}

export default Game;