import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss'
import { MED_SM } from '../src/constants/media-screens';

const styles = {
  appContainer: {
    composes: 'flex flex-col flex-between full-height align-content-center',
    padding: '0 1em',
  },
  navList: {
    listStyle: "none"
  },
  header: {
    composes: 'flex justify-end',
    position: 'fixed',
    width: '100%',
    top: 0
  },
  branding: {
    composes: 'flex flex-col flex-between justify-center align-content-center',
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
    const {
      logo,
      appContainer,
      navList,
      branding,
      header
    } = this.props.classes;

    return (
      <Fragment>
        {/* HEADER   */}
        <header className={header}>
          <ul className={navList}>
            <li>Nav item?</li>
          </ul>
        </header>
        
        <div className={appContainer}>
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
      </Fragment>
    );
  }
}

export default App;
