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
  jumpers: {
    maxWidth: '16em',
    transition: 'opacity .3s ease-in, transform .3s ease-in'
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

const BrandingSection = ({ classes: { main, jumpers, deliciousFood, deliciousFoodBg } }) => (
  <Fragment>
    <div className={main}>
      <div className="flex flex-col align-items-center">
        <img
          src={Logo}
          alt="East Nashville Restaurant Week"
        />
      </div>

      <img
        src={Jumpers}
        className={jumpers}
        alt="couple jumping"
        id="jumpers"
      />

      <h2 className="mg--xl">
        Special menus and cheap eats at some of East Nashville's best restaurants.
      </h2>
    </div>

    <div id="deliciousFood" className={deliciousFoodBg}></div>

    <h2 className="mg--sm txt-center txt-upper">
      Visit these Participating Restaurants
    </h2>
  </Fragment>  
);

export default injectSheet(styles)(BrandingSection);
