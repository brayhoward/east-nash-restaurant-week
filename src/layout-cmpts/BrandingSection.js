import React, { Fragment } from 'react';
import injectSheet from 'react-jss'
import { MED_SM } from 'constants/media-screens';
import Jumpers from 'assets/halsman-jump.png';
import SoupFront from 'assets/soup-front.png'
import SoupBack from 'assets/soup-back.jpg'
import Logo from 'assets/enrw-logo-bigeast-color.svg'

const styles = {
  main: {
    composes: 'flex justify-center flex-col justify-between align-items-center',
    minHeight: '104vh',
    padding: '0 20%',

    // Animate the breakpoint transition... b/c why not?
    transition: 'padding 0.75s',
    [`@media (max-width: ${MED_SM})`]: {
      minHeight: '98vh',
      padding: '0 2%',
    }
  },
  jumpers: {
    maxWidth: '16em',
    transition: 'opacity .3s ease-in, transform .3s ease-in',
    zIndex: '1',
    [`@media (max-width: ${MED_SM})`]: {
      maxWidth: '7em'
    }
  },
  deliciousFoodBack: {
    height: '650px',
    width: '99%',
    background: `url(${SoupBack}) no-repeat top/contain`,
    marginTop: '250px',
    position: 'relative',
    [`@media (max-width: ${MED_SM})`]: {
      height: '350px',
      marginTop: '0'
    }
  },
  deliciousFoodFront: {
    height: '650px',
    width: '100%',
    background: `url(${SoupFront}) no-repeat top/contain`,
    position: 'relative',
    zIndex: '2',
    [`@media (max-width: ${MED_SM})`]: {
      height: '350px'
    }
  },
  h2: {
    composes: ['mg-t--xl txt-center'],
    maxWidth: '75%',
    marginTop: '15em',
    marginBottom: '18em',
    marginLeft: 'auto',
    marginRight: 'auto',
    [`@media (max-width: ${MED_SM})`]: {
      maxWidth: '95%',
    }
  },
  dates: {
    color:'rgb(187, 195, 37)', 
    fontSize: '1.8em', 
    textAlign: 'center', 
    textTransform: 'uppercase', 
    fontWeight: '700',
    marginBottom: '150px',
    [`@media (max-width: ${MED_SM})`]: {
      fontSize: '1.2em'
    }
  }
};

const BrandingSection = ({ classes: { main, jumpers, deliciousFoodBack, deliciousFoodFront, h2, dates } }) => (
  <Fragment>
    <div className={main}>
      <div className="flex flex-col align-items-center">
        <img
          src={Logo}
          alt="East Nashville Restaurant Week"
          style={{maxWidth: '100%'}}
        />
      </div>

      <img
        src={Jumpers}
        className={jumpers}
        alt="couple jumping"
        id="jumpers"
      />
    </div>

    <h2 className={h2}>
      Support local restaurants in East Nashville with a week of dining deals.
    </h2>

    <h3 className={dates}>
      <span>February 26 - March 4, 2018</span><br/>
    </h3>

    <div id="deliciousFood" className={deliciousFoodBack}>
      <div className={deliciousFoodFront}/>
    </div>
  </Fragment>  
);

export default injectSheet(styles)(BrandingSection);
