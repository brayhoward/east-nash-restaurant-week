import React, { Component } from 'react';
import injectSheet from 'react-jss'
import capitalize from 'lodash.capitalize'
import { MED_SM } from 'constants/media-screens';
import Card, { CardContent } from 'material-ui/Card';

const styles = {
  main: {
    composes: 'flex justify-center'
  },
  contentWrapper: {
    composes: 'flex justify-between',
    padding: '20px',
    [`@media (max-width: ${MED_SM})`]: {
      flexFlow: 'column'
    }
  },
  contentLeftWrapper: {
    width: '60%', 
    paddingRight: '10px',
    [`@media (max-width: ${MED_SM})`]: {
      width: '100%'
    }
  },
  card: {
    maxWidth: '60%',
    margin: 'auto',
    position: 'relative'
  },
  img: {
    composes: 'full-width',
    height: '33vh',
    background: ({ info: { image } }) => `url('${image}') no-repeat center/cover`
  },
  blurb: {
    composes: 'mg-t--xl'
  },
  about: {
    composes: 'mg-t'
  },
  closeBtn: {
    position: 'absolute',
    right: '.4em',
    top: '.4em',
    cursor: 'pointer',
    backgroundColor: 'var(--light)',
    textAlign: 'center',
    padding: '15px 15px 10px 15px'
  }
};

@injectSheet(styles)
class DetailCard extends Component {


  render() {
    const { classes, info, handleClose, showDetail } = this.props;
    const {card, contentWrapper, contentLeftWrapper, img, closeBtn } = classes;
    const { name, blurb, deals, logo } = info;
    const formatedName = capitalize(name);

    if (showDetail) {
      window.setTimeout(
        () => {
          this.refs['detailView'].scrollIntoView({block: "start", behavior: 'smooth' });
        },
        500
      );
    }

    return (
      <Card className={card}>
        {/* CLOSE DETAIL BUTTON */}
        <div className={closeBtn} ref="detailView">
          <span onClick={handleClose}>
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>
                close [#1511]
            </title>
              <path fill="#000" d="M11.446 10L20 18.554 18.553 20 10 11.446 1.446 20 0 18.554 8.553 10 0 1.446 1.446 0 10 8.554 18.553 0 20 1.446z" fillRule="evenodd" />
            </svg>
          </span>
        </div>

        {/* BACKGROUND IMAGE*/}
        <div className={img} />

        <CardContent>
          
          <div className="flex justify-between" ref="detail">

            <div className={contentWrapper}>

              <div className={contentLeftWrapper}>
                <h2 className="mg-b--sm">
                  {formatedName}
                </h2>

                  <p>
                    {blurb}
                  </p>
                </div>

              <div style={{ fontSize: '14px', paddingLeft: '10px' }}>
                <img src={logo} alt={`${name} logo`} style={{ maxWidth: '3em' }} />
                <a className="btn">View Menu</a>
                <a className="btn">Make a Reservation</a>
                
                <h3>Specials</h3>

                <ul>
                  {deals.map((deal, i) => <li key={i}>{deal}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default DetailCard;
