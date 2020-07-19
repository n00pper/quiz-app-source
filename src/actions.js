export const incrementLevel = () => {
    return {
      type: 'INCREMENT_LEVEL'
    }
}
export const resetLevel = () => {
    return {
        type: 'RESET_LEVEL'
    }
}
export const setName = name => {
    return {
        type: 'SET_NAME',
        text: name
    }
}
export const landingPage = () => {
    return {
        type: 'LANDING_PAGE'
    }
}
export const inputName = () => {
    return {
        type: 'INPUT_NAME'
    }
}
export const startGame = () => {
    return {
        type: 'GAME'
    }
}
export const questions = () => {
    return {
        type: 'QUESTIONS'
    }
}
export const addQuestion = question => {
    return {
        type: 'ADD_QUESTION',
        payload: question
    }
}
export const removeQuestion = question => {
    return {
        type: 'REMOVE_QUESTION',
        payload: question
    }
}