import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss'
import { MED_SM, XL } from 'constants/media-screens';
import BrandingSection from 'layout-cmpts/BrandingSection';

const styles = {
  // ensure appContainer div stays centered when it reaches it's max width
  wrapper: {
    composes: 'flex flex-col justify-center align-items-center full-height'
  },
  appContainer: {
    composes: 'flex flex-col flex-between full-height align-content-center',
    padding: '0 1em',
    maxWidth: XL
  },
  navList: {
    listStyle: "none"
  },
  header: {
    composes: 'flex justify-end pd-r--lg',
    position: 'fixed',
    width: '100%',
    top: 0
  }
}


@injectSheet(styles)
class App extends Component {
  render() {
    const {
      wrapper,
      logo,
      appContainer,
      navList,
      branding,
      header
    } = this.props.classes;

    return (
      <div className={wrapper}>
        {/* HEADER   */}
        <header className={header}>
          <ul className={navList}>
            <li>Nav item?</li>
          </ul>
        </header>
        
        <div className={appContainer}>
          <BrandingSection />
        
          {/* RESTAURANTS */}
        </div>
      </div>
    );
  }
}

export default App;
