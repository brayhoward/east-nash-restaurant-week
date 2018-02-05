import React, { Fragment } from 'react';
import injectSheet from 'react-jss'
import { MED_SM } from 'constants/media-screens';
import Jumpers from 'assets/halsman-jump.png';
import Soup from 'assets/soup.jpg'
import Logo from 'assets/enrw-logo-circle-test.svg'

const styles = {
  main: {
    composes: 'flex justify-center flex-col justify-between align-items-center',
    minHeight: '250vh',
    padding: '0 20%',
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
  }
};

const BrandingSection = ({ classes: { main, jumpersFixed, jumpersAbsolute, deliciousFood } }) => (
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

        <p className="mg--xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, iste. Quibusdam, praesentium minus!
          Accusantium, vero minima voluptatibus reprehenderit nisi, suscipit quibusdam molestiae necessitatibus
          tempora deserunt debitis eaque tempore officia id.  
        </p>
      </div>
      
      <img
        className={deliciousFood}  
        src={Soup}
        alt="bowl of delicious food!"
      />
    </div>
  </Fragment>  
);

export default injectSheet(styles)(BrandingSection);
