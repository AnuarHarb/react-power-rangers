import React, { Component } from 'react';
import styled from 'styled-components';
import GameCard from './GameCard';

const GameContainerStyles = styled.section`
  height: calc(100vh - 120px);
  background-color: lightyellow;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

class GameContainer extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <GameContainerStyles>
        <GameCard />
        <GameCard />
        <GameCard />
      </GameContainerStyles>
    )
  }
}

export default GameContainer;
