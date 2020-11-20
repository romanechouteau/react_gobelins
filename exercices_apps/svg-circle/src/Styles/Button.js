import styled from 'styled-components'

const StyledButton = styled.button`
  color: black;
  background-color: #c1adea;
  font-size: 1em;
  margin: 16px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;

function Button({ onClick, text }) {
  return (
    <StyledButton onClick={onClick}>{text}</StyledButton>
  );
}

export default Button;
