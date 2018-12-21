import React, {Component} from 'react';

import './App.css';

import Header from './components/Header';
import CriarBullet from './components/CriarBullet';

class App extends Component {
  renderCriarBullet () {
    let style = {
      marginTop: '140px',
      textAlign: 'center',
    };

    return (
      <div style={style}>
        <CriarBullet />
      </div>
    );
  }

  render () {
    return (
      <div>
        <Header />
        {this.renderCriarBullet ()}
      </div>
    );
  }
}

export default App;
