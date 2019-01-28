import React, { Component } from 'react';
import injectSheet from 'react-jss'
import { MED, MED_LG, LG } from 'constants/media-screens';
import Card, { CardContent } from 'material-ui/Card';

const colBreakPoint = MED_LG

const styles = {
  main: {
    composes: 'flex justify-center'
  },
  contentWrapper: {
    composes: 'flex',
    padding: '20px',
    [`@media (max-width: ${colBreakPoint})`]: {
      flexFlow: 'column'
    },
    [`@media (max-width: ${LG})`]: {
      padding: 0,
      fontSize: '.9em'
    }
  },
  contentLeftWrapper: {
    width: '60%',
    paddingRight: '30px',
    marginBottom: '.5em',
    [`@media (max-width: ${colBreakPoint})`]: {
      width: '100%'
    }
  },
  contactInfo: {
    fontSize: '1em',
    paddingLeft: '10px',
    maxWidth: '35%',
    overflowWrap: 'break-word',
    [`@media (max-width: ${colBreakPoint})`]: {
      paddingLeft: 0,
      maxWidth: 'inherit',
    },
    [`@media (min-width: ${colBreakPoint}) and (max-width: ${LG})`]: {
      fontSize: '.8em'
    }
  },
  card: {
    maxWidth: '60%',
    position: 'relative',
    [`@media (max-width: ${MED})`]: {
      maxWidth: 'inherit',
      width: '95%'
    }
  },
  cardWrapper: {
    [`@media (max-width: ${MED})`]: {
      width: '95%'
    }
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
    textAlign: 'center',
    padding: '15px 15px 10px 15px'
  }
};

@injectSheet(styles)
class DetailCard extends Component {


  render() {
    const { classes, info, handleClose } = this.props;
    const {card, contentWrapper, contentLeftWrapper, img, closeBtn, contactInfo } = classes;
    const { name, blurb, logo, web, res, phone, map, menu, offering } = info;
    const mapQuery = `Nashville ${name} ${map}`.split(" ").join("+")

    return (
      <Card className={card}>
        {/* CLOSE DETAIL BUTTON */}
        <div className={closeBtn} style={{backgroundColor: '#fff'}}>
          <span onClick={handleClose}>
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill="#000" d="M11.446 10L20 18.554 18.553 20 10 11.446 1.446 20 0 18.554 8.553 10 0 1.446 1.446 0 10 8.554 18.553 0 20 1.446z" fillRule="evenodd" />
            </svg>
          </span>
        </div>

        {/* BACKGROUND IMAGE*/}
        <div className={img} style={{ borderBottom: '5px solid rgb(205, 212, 82)' }}/>

        <CardContent>

          <div ref="detailView">
            <div className={contentWrapper}>

              <div className={contentLeftWrapper}>
                <img
                  src={logo}
                  alt={`${name} logo`}
                  style={{
                    maxWidth: '150px',
                    marginBottom: '.5em'
                  }}
                />
                <div>
                  {
                    offering && (
                      <div>
                        <em><strong>{offering}</strong></em>
                      </div>
                    )
                  }

                  <br />

                  {
                    menu && <a className="btn-m" href={`${menu}`} target='blank'>See what's on the menu</a>
                  }

                  <hr />

                  <br />

                  <p>
                    {blurb}
                  </p>
                </div>
              </div>

              <div className={contactInfo}>
                {
                  menu ?
                    <a className="btn" href={`${menu}`} target='blank'>View ENRW Menu</a>
                  :
                    null
                }

                {res ? <a className="btn" href={`${res}`}>Make a Reservation</a> : null}

                <span style={{ fontSize: '.75em' }}>Directions:</span><br />

                <address>
                  <a href={`http://maps.google.com?q=${mapQuery}`}>{map}</a>
                </address>

                <span style={{ fontSize: '.75em' }}>Website:</span>
                <br />

                <a href={`http://${web}`} target='blank'>{web}</a>
                <br />

                <span style={{ fontSize: '.75em' }}>Phone:</span>
                <br /><a href={`tel:${phone}`}>{phone}</a><br/>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default DetailCard;
