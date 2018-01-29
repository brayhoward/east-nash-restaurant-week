import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss'
import { MED_SM } from 'constants/media-screens';

const styles = {
  appContainer: {
    composes: 'flex flex-col flex-between full-height align-content-center',
    margin: '1em'
  },
  navList: {
    listStyle: "none"
  },
  branding: {
    composes: 'bd flex flex-col flex-between justify-center align-content-center',
    marginTop: '2rem',
    height: '80%',
    padding: '0 20%',
    // Animate the breakpoint transition... b/c why not?
    transition: 'padding 0.75s',
    [`@media (max-width: ${MED_SM})`]: {
      padding: '0 2%'
    }
  }
}


@injectSheet(styles)
class App extends Component {
  render() {
    const { logo, appContainer, navList, branding } = this.props.classes;

    return (
      <div className={appContainer}>
        {/* HEADER   */}
        <header className="flex justify-end">
          <ul className={navList}>
            <li>Nav item?</li>
          </ul>
        </header>

        {/* BRANDING */}
        <div className={branding}>
          <div>
            <h1 className="txt-center">
              East Nashville Restaurant Week
            </h1>

            <p className="mg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, iste. Quibusdam, praesentium minus!
              Accusantium, vero minima voluptatibus reprehenderit nisi, suscipit quibusdam molestiae necessitatibus
              tempora deserunt debitis eaque tempore officia id.  
            </p>
          </div>
        </div>

        {/* RESTAURANTS */}
      </div>
    );
  }
}

export default App;
