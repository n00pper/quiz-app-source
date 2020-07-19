import React from 'react'
import { useDispatch } from 'react-redux';
import { inputName, questions } from '../../actions';
import start from '../../nav-icons/start.png';
import newQuestion from '../../nav-icons/new-question.png';
import store from '../../reducers';

function LandingPage() {
    const dispatch = useDispatch();
    function startGameCheck() {
        if(store.getState().questions.length === 0) {
            document.getElementById('warning-no-questions').style.visibility = 'visible';
        }
        else {
            dispatch(inputName());
        }
    }
    return(
        <div className='landing-page'>
            <h1 className='title'>Welcome to the Quiz App!</h1>
            <div>note: you need to create atleast 1 question to start</div>
            <table>
                <tbody>
                <tr>
                    <td onClick={() => startGameCheck()}>
                        <div>Start Game</div>
                        <img src={start} alt='Start game' />
                    </td>
                    <td onClick={() => dispatch(questions())}>
                        <div>Create Questions</div>
                        <img src={newQuestion} alt='Create questions' />
                    </td>
                </tr>
                </tbody>
            </table>
            <div id='warning-no-questions' className='warning' style={{visibility: 'hidden'}}>You need atleast 1 question to start!</div>
        </div>
    );
}

export default LandingPage;