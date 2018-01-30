import React, { Component } from 'react';
import injectSheet from 'react-jss'
import { XL } from 'constants/media-screens';
import BrandingSection from 'layout-cmpts/BrandingSection';
import PartnersSection from 'layout-cmpts/PartnersSection';

const styles = {
  // ensure appContainer div stays centered when it reaches it's max width
  wrapper: {
    composes: 'flex flex-col justify-center align-items-center'
  },
  appContainer: {
    composes: 'flex flex-col flex-between align-content-center',
    padding: '0 1em',
    // paddingTop: `calc(${height} * 3)`,
    maxWidth: `calc(${XL} - 100px)`  
  },
  navList: {
    listStyle: "none"
  },
  header: {
    composes: 'flex justify-end pd-r--lg',
    position: 'fixed',
    width: '100%',
    height: '3em',
    top: 0
  }
}


@injectSheet(styles)
class App extends Component {
  render() {
    const {
      wrapper,
      appContainer,
      navList,
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
        
          <PartnersSection />
        </div>
      </div>
    );
  }
}

export default App;
