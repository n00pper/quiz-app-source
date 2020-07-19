import { combineReducers, createStore } from 'redux';

const LS_KEY = 'quiz.question';

const levelCounter = (state = 0, action) => {
    switch(action.type) {
      case 'INCREMENT_LEVEL':
        return ++state;
      case 'RESET_LEVEL':
        return 0;
      default:
        return state;
    }
}
const setName = (state = 'John Doe', action) => {
    switch(action.type){
        case 'SET_NAME':
            return action.text === '' ? 'John Doe' : action.text;
        default:
            return state;
    }
}

const setView = (state = 'LANDING_PAGE', action) => {
    switch(action.type) {
        case 'INPUT_NAME':
            return 'INPUT_NAME';
        case 'GAME':
            return 'GAME';
        case 'QUESTIONS':
            return 'QUESTIONS';
        case 'LANDING_PAGE':
            return 'LANDING_PAGE';
        default:
            return state;
    }
}

const manageQuestions = (state = JSON.parse(localStorage.getItem(LS_KEY)) || [], action) => {
    switch(action.type) {
        case 'ADD_QUESTION':
            state.push(action.payload);
            return state;
        case 'REMOVE_QUESTION':
            state.splice(state.indexOf(action.payload), 1);
            return state;
        default:
            return state;
    }
}


const reducers = combineReducers({
    phase: setView,
    questions: manageQuestions,
    level: levelCounter,
    name: setName,
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;