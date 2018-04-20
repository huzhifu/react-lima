import React, { Component } from 'react';
import logo from '../logo.svg';
import CSSModules from 'react-css-modules'
import styles from  './App.scss';
console.log(styles)

class App extends Component {
  render() {
    return (
      <div styleName="app">
        <header styleName="header">
          <img src={logo} styleName="logo" alt="logo" />
          <h1 styleName="title">Welcome to React！</h1>
        </header>
        <p styleName="intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default CSSModules(App, styles);
