import React, { Component } from 'react';
import styled from 'styled-components';
import GameCard from './GameCard';
import WinnerView from './WinnerView';

const GameContainerStyles = styled.section`
  height: calc(100vh - 120px);
  background-color: lightyellow;

  div {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
  }

`;

class GameContainer extends Component {
  constructor() {
    super();

    this.state = {
      winner: '',
      status: 'choosing'
    }

    this.play = this.play.bind(this);
  }

  play(playerValue){
    const armas = ['piedra', 'papel', 'tijeras'];
    const player1 = playerValue;
    const computer = armas[Math.floor(Math.random() * 2)];
    this.getWinner(player1, computer);
  }

  getWinner(player1, player2) {
    let winner;
    if(player1 === 'tijeras' && player2 === 'papel' ||
       player1 === 'papel' && player2 === 'piedra' ||
       player1 === 'piedra' && player2 === 'tijeras'){
        winner = 'player1';
    } else if(player2 === 'tijeras' && player1 === 'papel' ||
              player2 === 'papel' && player1 === 'piedra' ||
              player2 === 'piedra' && player1 === 'tijeras') {
        winner = 'player2'
    } else {
      winner = 'none';
    }
    this.showWinner(player1, player2, winner);
  }

  showWinner(player1, player2, winner) {
    this.setState({
      winner: winner,
      status: 'Finished'
    })
  }

  render() {
    return (
      <GameContainerStyles>
        { this.state.status == 'choosing' ?
          <div>
            <GameCard arma="papel" clickHandler={this.play}/>
            <GameCard arma="tijeras" clickHandler={this.play}/>
            <GameCard arma="piedra" clickHandler={this.play}/>
          </div>
        :
          <WinnerView winner={this.state.winner}/>
        }
      </GameContainerStyles>
    )
  }
}

export default GameContainer;
