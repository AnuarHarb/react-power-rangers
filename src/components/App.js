import React, { Component, Fragment } from 'react';
import logo from '../assets/images/logo.png';
import '../assets/css/app.css';
import HeaderComponent from './HeaderComponent';
import GameContainer from './GameContainer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderComponent logo={logo} />
        <GameContainer />
      </Fragment>
    );
  }
}

export default App;
