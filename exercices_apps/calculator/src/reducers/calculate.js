import { SET_NUMBER, ADDITION } from '../constants/actions'

const stateInit = {
  number: '',
  result: 0,
  message: 'Welcome to the calculator'
}

const reducer = (state = stateInit, action = {}) => {
  switch (action.type) {
    case SET_NUMBER:
      return {
        ...state,
        number: action.payload
      }

    case ADDITION:
      return {
        ...state,
        result: parseFloat(state.number) + parseFloat(state.number)
      }

    default:
      return state
  }
}

export default reducer