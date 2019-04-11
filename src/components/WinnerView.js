import React, {Fragment} from 'react';
import styled from 'styled-components';

const WinnerView = ({winner, player1Value, player2Value, playAgain}) => {
  return (
    <Fragment>
      <img src={require(`../assets/images/${player1Value}.png`)} alt={player1Value}/>
      <h2>El jugador uno tiró: {player1Value}</h2>

      <img src={require(`../assets/images/${player2Value}.png`)} alt={player2Value}/>
      <h2>El jugador dos tiró: {player2Value}</h2>

      <h2>Ganó {winner}</h2>
      <button onClick={playAgain}>Jugar de nuevo</button>
    </Fragment>
  )
}

export default WinnerView;
