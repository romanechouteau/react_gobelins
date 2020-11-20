import styled, { keyframes, css } from 'styled-components'

const strokeWidth = keyframes`
  from {
    stroke-width: 1;
    transform: scale(1);
  }
  to {
    stroke-width: 4;
    transform: scale(1.2)
  }
`;

const CircleSvg = styled.circle`
  stroke: black;
  fill: #c1adea;
  stroke-width: 1;
  animation: ${props => props.animate === true ? css`${strokeWidth} 2s ease-in-out infinite alternate` : 'none'};
  transform-origin: center;
`;

const SquareSvg = styled.rect`
  stroke: black;
  fill: #c1adea;
  stroke-width: 1;
  animation: ${props => props.animate === true ? css`${strokeWidth} 2s ease-in-out infinite alternate` : 'none'};
  transform-origin: center;
`;

function Circle({ id, animate, square }) {
  return (
    <svg height="100" width="100" >
      {!square ? <CircleSvg cx="50" cy="50" r="25" animate={animate}></CircleSvg> : <SquareSvg x="25" y="25" width="50" height="50" animate={animate}></SquareSvg>}
      <text x="50" y="50">{id}</text>
    </svg>
  );
}

export default Circle;
