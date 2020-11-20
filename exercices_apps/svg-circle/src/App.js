import { useReducer, useEffect } from 'react'
import styled from 'styled-components'
import reducer from './reducers/circle'
import Circle from './Styles/Circle'
import Button from './Styles/Button'

const initialState = []

const StyledApp = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Circles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (state.length !== 0 && state.length % 7 === 0 && state[state.length - 1].square !== true) {
      dispatch({ type: 'EASTER EGG'})
    }
  }, [state])

  return (
    <StyledApp>
      <h1>Circles</h1>
      <Circles>
        {state.map((circle) => (
          <Circle key={circle.id} id={circle.id} animate={circle.animate} square={circle.square} />
        ))}
      </Circles>
      <div>
        <Button onClick={() => dispatch({ type: 'ADD CIRCLE'})} text="Add circle"></Button>
        <Button onClick={() => dispatch({ type: 'SHUFFLE'})} text="Shuffle"></Button>
        <Button onClick={() => dispatch({ type: 'STOP ODD'})} text="Stop odd"></Button>
        <Button onClick={() => dispatch({ type: 'START ODD'})} text="Start odd"></Button>
        {state.length > 0 && <Button onClick={() => dispatch({ type: 'RESET'})} text="Reset"></Button>}
      </div>
    </StyledApp>
  );
}

export default App;
