import React from 'react';
import injectSheet from 'react-jss'
import { MED_SM } from 'constants/media-screens';

const styles = {
main: {
  composes: 'flex flex-col flex-between justify-center align-content-center',
  marginTop: '2rem',
  height: '80%',
  padding: '0 20%',
  // Animate the breakpoint transition... b/c why not?
  transition: 'padding 0.75s',
  [`@media (max-width: ${MED_SM})`]: {
    padding: '0 2%'
  }
}
};

const BrandingSection = ({ classes: { main } }) => (
  <div className={main}>
    <div>
      <h1 className="txt-center">
        East Nashville <br />
        Restaurant Week
      </h1>

      <p className="mg--xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, iste. Quibusdam, praesentium minus!
        Accusantium, vero minima voluptatibus reprehenderit nisi, suscipit quibusdam molestiae necessitatibus
        tempora deserunt debitis eaque tempore officia id.  
      </p>
    </div>
  </div>
);

export default injectSheet(styles)(BrandingSection);
