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
    minHeight: '175vh',
    padding: '0 20%',
    textAlign: 'center',
    // Animate the breakpoint transition... b/c why not?
    transition: 'padding 0.75s',
    [`@media (max-width: ${MED_SM})`]: {
      padding: '0 2%',
      minHeight: '145vh'
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
  deliciousFood: {
    maxWidth: '95vw',
    marginBottom: '15vh'
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
    composes: "mg--sm txt-center txt-upper",
    [`@media (max-width: ${MED_SM})`]: {
      fontSize: '.9em'
    }
  }
};

const BrandingSection = ({ classes: { main, jumpers, deliciousFood, deliciousFoodBack, deliciousFoodFront, h2 } }) => (
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

      <h2 className="mg-l--lg mg-r--lg">
        First annual dining event supporting local restaurants in East Nashville through a week of dining deals for customers.
      </h2>
    </div>

    <div id="deliciousFood" className={deliciousFoodBack}>
      <div className={deliciousFoodFront}/>
    </div>

    <h2 className={h2}>
      Visit these Participating Restaurants
    </h2>
  </Fragment>  
);

export default injectSheet(styles)(BrandingSection);
