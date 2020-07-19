import React from 'react';
import { useSelector } from 'react-redux';
import LandingPage from './components/landing/landing-page';
import EnterName from './components/game/enter-name';
import Game from './components/game/game';
import QuestionManager from './components/questions/question-manager';


function App() {
  return (
    <div className='app'>
      {useSelector(state => state.phase) === 'LANDING_PAGE' && <LandingPage />}
      {useSelector(state => state.phase) === 'INPUT_NAME' && <EnterName />}
      {useSelector(state => state.phase) === 'GAME' && <Game />}
      {useSelector(state => state.phase) === 'QUESTIONS' && <QuestionManager />}
    </div>
  );
}

export default App;
