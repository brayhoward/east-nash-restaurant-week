import React, { Component } from 'react';
import injectSheet from 'react-jss'
import { XL } from 'constants/media-screens';
import BrandingSection from 'layout-cmpts/BrandingSection';
import PartnersSection from 'layout-cmpts/PartnersSection';
import footerImage from 'assets/footer-collage-fpo.png';

const headerHeight = '3em';
const styles = {
  // ensure appContainer div stays centered when it reaches it's max width
  wrapper: {
    composes: 'flex flex-col justify-center align-items-center'
  },
  appContainer: {
    composes: 'flex flex-col flex-between align-content-center',
    paddingTop: headerHeight,
    width: '100vw',
    maxWidth: `calc(${XL} - 100px)`  
  },
  footer: {
    composes: 'full-width',
    height: '700px',
    background: `url(${footerImage}) no-repeat center/cover`
  },
  navList: {
    listStyle: "none"
  },
  header: {
    composes: 'flex justify-end pd-r--lg',
    position: 'fixed',
    width: '100%',
    height: headerHeight,
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
      header,
      footer
    } = this.props.classes;

    return (
      <div className={wrapper}>
        {/* HEADER   */}
        <header className={header}>
          <ul className={navList}>
            <li>Social Share?</li>
          </ul>
        </header>
        
        <div className={appContainer}>  
          <BrandingSection />
        
          <PartnersSection />
        </div>
        <div className={footer}>
        </div>
      </div>
    );
  }
}

export default App;
