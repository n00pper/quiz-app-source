import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, startGame, landingPage } from '../../actions';
import next from '../../nav-icons/next.png';
import back from '../../nav-icons/back.png';

function EnterName() {
    const dispatch = useDispatch();
    return (
        <div className='enter-name' >
            <img src={back} onClick={() => dispatch(landingPage())} className='back' alt="Back" />
            <h1>Enter your name!</h1>
            <div className='name-input'>
                <input id='name-input' type='text' placeholder={useSelector(state => state.name)} 
                    onChange={() => dispatch(setName(document.getElementById('name-input').value))} />
                <img src={next} onClick={() => dispatch(startGame())} className='next' alt='Next' />
            </div>
        </div>
    )
}


export default EnterName;