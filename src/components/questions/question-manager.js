import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import QuestionList from './question-list';
import { landingPage, addQuestion } from '../../actions';
import add from '../../nav-icons/add.png';
import back from '../../nav-icons/back.png';
import store from '../../reducers';

const LS_KEY = 'quiz.question';

function QuestionManager() {
    const dispatch = useDispatch();
    const [q, setQ] = useState([]);

    useEffect(() => {
        setQ(() => store.getState().questions);
    }, []);

    useEffect(() => {
        if(q.length > store.getState().questions.length) {
            setQ(() => store.getState().questions);
        }
        localStorage.setItem(LS_KEY, JSON.stringify(q));
    }, [q]);
    
    function saveQuestion() {
        const question = {
            q: document.getElementById('form-question').value,
            a1: document.getElementById('form-answer1').value,
            a2: document.getElementById('form-answer2').value,
            a3: document.getElementById('form-answer3').value,
            a4: document.getElementById('form-answer4').value,
            c: document.getElementById('form-correct-answer').value
        }
        for (let i in question) {
            if(question[i] === '') {
                document.getElementById('warning-not-filled').style.visibility = 'visible';
                return 0;
            }
        }

        setQ(() => [...q, question]);
        dispatch(addQuestion(question));
        document.getElementById('form-question').value = '';
        document.getElementById('form-answer1').value = '';
        document.getElementById('form-answer2').value = '';
        document.getElementById('form-answer3').value = '';
        document.getElementById('form-answer4').value = '';
        document.getElementById('warning-not-filled').style.visibility = 'hidden';
        return 1;
    }
    
    return (
        <div className='question-manager'>
            <img src={back} onClick={() => dispatch(landingPage())} className='back' alt='Back' />
            <h1>Your Quiz</h1>
            <QuestionList questionList={q} setQuestion={setQ} />
            <h2>Add another question</h2>
            <form>
                <label htmlFor='form-question'>Question</label><br />
                <input type='text' id='form-question' name='form-question' />
                <table className='answers-table'>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor='form-answer1'>Answer A</label><br />
                                <input type='text' id='form-answer1' name='form-answer1' />
                            </td>
                            <td>
                                <label htmlFor='form-answer2'>Answer B</label><br />
                                <input type='text' id='form-answer2' name='form-answer2' />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='form-answer3'>Answer C</label><br />
                                <input type='text' id='form-answer3' name='form-answer3' />
                            </td>
                            <td>
                                <label htmlFor='form-answer4'>Answer D</label><br />
                                <input type='text' id='form-answer4' name='form-answer4' />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <label htmlFor='form-correct-answer'>Select the correct answer: </label>
                <select id='form-correct-answer' name='form-correct-answer'>
                    <option value='A'>A</option>
                    <option value='B'>B</option>
                    <option value='C'>C</option>
                    <option value='D'>D</option>
                </select><br />
                <img src={add} alt='Add question' onClick={() => saveQuestion()} />
            </form>
            <div id='warning-not-filled' className='warning' style={{visibility: 'hidden'}}>Fill every cell</div>
        </div>
    )
}


export default QuestionManager;