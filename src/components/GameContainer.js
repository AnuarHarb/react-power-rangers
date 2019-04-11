import React, { Component, Fragment } from 'react';
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
      status: 'choosing',
      player1Value: '',
      player2Value: '',
      player1Score: 0,
      player2Score: 0
    }

    this.play = this.play.bind(this);
    this.playAgain = this.playAgain.bind(this);
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
    this.updateScore(winner);
  }

  showWinner(player1, player2, winner) {
    this.setState({
      winner: winner,
      status: 'Finished',
      player1Value: player1,
      player2Value: player2
    })
  }

  playAgain(){
    this.setState({
      status: 'choosing'
    });
  }

  updateScore(winner) {
    if(winner === 'player1') {
      this.setState({
        player1Score: this.state.player1Score + 1
      });
    } else if(winner === 'player2') {
      this.setState({
        player2Score: this.state.player2Score + 1
      });
    }
  }

  render() {
    return (
      <GameContainerStyles>
        { this.state.status == 'choosing' ?
          <Fragment>
            <div>
              <GameCard arma="papel" clickHandler={this.play}/>
              <GameCard arma="tijeras" clickHandler={this.play}/>
              <GameCard arma="piedra" clickHandler={this.play}/>
            </div>
            <h2>Player Uno {this.state.player1Score} - {this.state.player2Score} Player Dos</h2>
          </Fragment>
        :
          <WinnerView
            winner={this.state.winner}
            player1Value={this.state.player1Value}
            player2Value={this.state.player2Value}
            playAgain={this.playAgain}
          />
        }
      </GameContainerStyles>
    )
  }
}

export default GameContainer;
