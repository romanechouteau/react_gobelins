function Grades(props) {
  const { grades } = props

  return (
    <div>
      <h1>Liste</h1>
      <ul>
        {grades.map((grade, i) => (
          <li key={i}>{grade.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Grades;
