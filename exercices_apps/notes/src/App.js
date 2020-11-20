import './App.css';
import Form from './components/Form'
// import Grades from './components/Grades'
// import { useState } from 'react'

function App() {
  // const [grades, setGrades] = useState([])

  // const handleGrade = (value) => {
  //   setGrades(value)
  // }

  return (
    <div className="App">
      <Form />
      {/* <Grades grades={grades} /> */}
    </div>
  );
}

export default App;
