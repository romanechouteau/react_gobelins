import { useDispatch, useSelector } from 'react-redux'

import { set_number, addition } from './actions/actions-types'

const App = () => {
  const { message, number, result } = useSelector( state => state)
  const dispatch = useDispatch()

  const handleChange = e => {
    const { value: number } = e.target

    dispatch(set_number(number))
  }

  return (
    <div className="App">
      <p>{message}</p>
      <p>Number : { number }</p>
      <input type="text" value={number} onChange={handleChange} />
      <button onClick={() => dispatch(addition())}>+</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
