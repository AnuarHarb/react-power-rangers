import React from 'react';
import styled from 'styled-components';

const GameCardStyles = styled.article`
  background-color: lightblue;
  width: 300px;
  height: 150px;
  border: 10px dashed black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

const GameCard = () => {
  return (
    <GameCardStyles>
      tarjeta de juego
    </GameCardStyles>
  )
}

export default GameCard;
