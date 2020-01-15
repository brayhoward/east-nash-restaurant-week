import React, { Fragment } from 'react';
import injectSheet from 'react-jss'
import { MED_SM } from 'constants/media-screens';
import Jumpers from 'assets/halsman-jump.png';
import SoupFront from 'assets/dish-front.png'
import SoupBack from 'assets/dish-back.jpg'
import Logo from 'assets/enrw-logo-color-2020.svg'
import SponsorLogo from 'assets/logos/sponser.png'

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
  sponsorMsg: {
    composes: "mg-b--lg",
    textAlign: "center",
    [`@media (max-width: ${MED_SM})`]: {
      fontSize: '.75em',
      marginBottom: "1.5em"
    }
  },
  sponsorImg: {
    maxWidth: 180,
    [`@media (max-width: ${MED_SM})`]: {
      maxWidth: 80
    }
  }
};

const BrandingSection = ({ classes: { main, jumpers, deliciousFoodBack, deliciousFoodFront, h2, sponsorImg, sponsorMsg } }) => (
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
      Support local restaurants in East Nashville with a week of dining deals...
    </h2>

    <div className="flex flex-col justify-between align-items-center mg-t--xl pd-l pd-r">
      <h2 className={sponsorMsg}>
        ...and support the work of <a className="no-hover" style={{color: "inherit"}} href="http://www.fanniebattle.org/" target="_blank" rel="noopener noreferrer">Fannie Battle</a>
      </h2>

      <a className="no-hover" href="http://www.fanniebattle.org/" target="_blank" rel="noopener noreferrer">
        <img className={sponsorImg} src={SponsorLogo} alt="Fannie Battle logo"/>
      </a>
    </div>

    <div id="deliciousFood" className={deliciousFoodBack}>
      <div className={deliciousFoodFront}/>
    </div>
  </Fragment>
);

export default injectSheet(styles)(BrandingSection);
