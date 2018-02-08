import React, { Component } from 'react';
import injectSheet from 'react-jss'
import { XL } from 'constants/media-screens';
import { MED_SM } from 'constants/media-screens';
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
  collage: {
    composes: 'full-width flex justify-between align-items-end',
    height: '700px',
    background: `url(${footerImage}) no-repeat center/cover`,
    color: '#cdd452',
    fontSize: '12px',
    [`@media (max-width: ${MED_SM})`]: {
      background: `url(${footerImage}) no-repeat bottom/contain`,
      height: '40vh'
    }
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
  },
  footer: {
    composes: 'flex justify-between pd',
    backgroundColor: '#cdd452',
    width: '98%',
    fontSize: '12px'
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
      collage
    } = this.props.classes;

    return (
      <div className={wrapper}>
        {/* HEADER   */}
        <header className={header}>
          <ul className={navList}>
            <li></li>
          </ul>
        </header>
        
        <div className={appContainer}>  
          <BrandingSection />
        
          <PartnersSection />
        </div>

        <div className={collage}>
          <span className="footer-links" style={{ margin: '20px' }}>
            site by <a href="http://adamswebpage.com/" target="_blank" rel="noopener noreferrer">Howard</a> &amp; <a href="http://www.brandonrhoward.com/" target="_blank" rel="noopener noreferrer">Howard</a>
          </span>
        </div>
      </div>
    );
  }
}

export default App;
