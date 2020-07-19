import React from 'react';
import Question from './question';

function QuestionList({ questionList, setQuestion }) {
    return(
        <div className='question-list'>
            {questionList.map((item, index) => <Question questionList={questionList} 
                setQuestion={setQuestion} question={item} key={index} /> )}
        </div>
    );
}

export default QuestionList;