import React, { Fragment } from 'react';
import injectSheet from 'react-jss'
import { MED_SM } from 'constants/media-screens';
import Jumpers from 'assets/halsman-jump.png';
import Soup from 'assets/soup2.jpg'
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
      padding: '0 2%'
    }
  },
  jumpersFixed: {
    maxWidth: '11em',
    bottom: '50%%',
    position: 'fixed',
    // Center horizontally //
    margin: '0 auto',
    left: 0,
    right: 0
    /////////////////////////
  },
  jumpersAbsolute: {
    maxWidth: '16em',
    bottom: '-12%',
    position: 'absolute',
    // Center horizontally //
    margin: '0 auto',
    left: 0,
    right: 0
    /////////////////////////
  },
  deliciousFood: {
    maxWidth: '95vw',
    marginBottom: '15vh'
  },
  deliciousFoodBg: {
    height: '500px',
    width: '100%',
    background: `url(${Soup}) no-repeat top/contain`
  }
};

const BrandingSection = ({ classes: { main, jumpersFixed, jumpersAbsolute, deliciousFood, deliciousFoodBg } }) => (
  <Fragment>
    <img
      src={Jumpers}
      className={true ? jumpersAbsolute : jumpersFixed}
      alt="couple jumping"
    />

    <div className={main}>
      <div className="flex flex-col align-items-center">
        <img
          src={Logo}
          alt="East Nashville Restaurant Week"
        />
      </div>

      <h2 className="mg--xl">
        Special menus and cheap eats at some of East Nashville's best restaurants.
      </h2>
      
      {/* <img
        className={deliciousFood}  
        src={Soup}
        alt="bowl of delicious food!"
      /> */}
    </div>
    <div className={deliciousFoodBg}></div>
    <h2 className="mg--sm txt-center txt-upper">
      Visit these Participating Restaurants
    </h2>
  </Fragment>  
);

export default injectSheet(styles)(BrandingSection);
