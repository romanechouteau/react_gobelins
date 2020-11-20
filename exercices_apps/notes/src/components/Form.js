import { useReducer } from 'react'

const maxGrades = 10

const initialState = { average: 0, grades: [{ value: '', error: '' }] }
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, grades: [...state.grades, { value: '', error: '' }] }

    case 'reset':
      return initialState

    case 'grade':
      state.grades[action.index].value = action.value

      let average = 0

      if (isNaN(parseFloat(action.value)) && action.value.trim() !== '') {
        state.grades[action.index].error = 'La note doit être un nombre.'
      } else if (parseFloat(action.value) > 20) {
        state.grades[action.index].error = 'La note doit être inférieure à 20.'
      } else {
        state.grades[action.index].error = ''
        if (!state.grades.some(grade => grade.error !== '')) {
          const grades = state.grades.filter(grade => grade.value.trim() !== '')
          average = grades.length > 0 ? grades.reduce((acc, grade) => acc + parseFloat(grade.value), 0) / grades.length : 0
        }
      }

      return { average, grades: state.grades}

    default:
      return state;
  }
}

function Form(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { average, grades } = state
  // const { onGrade } = props

  const handleChange = (event) => {
    const { name, value } = event.target
    const index = parseInt(name.replace('grade', ''))
    dispatch({type: 'grade', index, value})
  }

  return (
    <div>
      <h1>Notes</h1>
      <form>
        {grades.map((grade, i) => (
          <div key={i}>
            <div>{grade.error}</div>
            <div>
              <label>
                Note {i + 1} :
                <input
                  type="text"
                  name={`grade${i}`}
                  value={grade.value}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        ))}
      </form>
      <button disabled={grades.length >= maxGrades} onClick={() => dispatch({ type: 'add' })}>Ajouter une note</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Supprimer les notes</button>
      <div>
        <p>Moyenne : {average}</p>
      </div>
    </div>
  );
}

export default Form;
