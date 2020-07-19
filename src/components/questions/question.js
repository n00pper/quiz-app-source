import React from 'react';
import { useDispatch } from 'react-redux';
import { removeQuestion } from '../../actions';
import remove from '../../nav-icons/remove.png';

export default function Question({ questionList, setQuestion, question }) {
    const dispatch = useDispatch();

    function onClick() {
        dispatch(removeQuestion(question));
        setQuestion(() => questionList.filter(q => q !== question));
    }
    return (
        <div className='question'>
            {question.q}<img className='remove-question' src={remove} onClick={() => onClick()} alt='Remove' />
        </div>
    )
}
