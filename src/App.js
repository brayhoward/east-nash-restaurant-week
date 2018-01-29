import React, { Component, Fragment } from 'react';
import logoSvg from './logo.svg';
import injectSheet from 'react-jss'

const styles = {
  logo: {
    width: '4em'
  }
}


@injectSheet(styles)
class App extends Component {
  render() {
    const { logo } = this.props.classes;

    return (
      <Fragment>
        <header className="flex">
          <img src={logoSvg} className={logo} alt="logo" />
          <h1 className="App-title">East Nashville Restaruant Week</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Fragment>
    );
  }
}

export default App;
