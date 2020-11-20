import { shuffle } from 'lodash'

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD CIRCLE':
      return [...state, { id: state.length, animate: true, square: false }]

    case 'SHUFFLE':
      return shuffle(state)

    case 'STOP ODD':
      return state.map((circle) => circle.id % 2 === 0 ? circle : { ...circle, animate: false })

    case 'START ODD':
      return state.map((circle) => circle.id % 2 === 0 ? circle : { ...circle, animate: true })

    case 'EASTER EGG':
      const circles = [...state]
      circles[circles.length - 1] = { ...circles[circles.length - 1], square: true }
      return circles

    case 'RESET':
      return []

    default:
      return state;
  }
}

export default reducer