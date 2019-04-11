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

const GameCard = ({arma, clickHandler}) => {

  return (
    <GameCardStyles onClick={()=>{clickHandler(arma)}}>
      {arma}
    </GameCardStyles>
  )
}

export default GameCard;
