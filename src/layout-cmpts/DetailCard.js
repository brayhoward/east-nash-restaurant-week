import React, { Component } from 'react';
import injectSheet from 'react-jss'
import { MED } from 'constants/media-screens';
import Card, { CardContent } from 'material-ui/Card';

const styles = {
  main: {
    composes: 'flex justify-center'
  },
  contentWrapper: {
    composes: 'flex justify-between',
    padding: '20px',
    [`@media (max-width: ${MED})`]: {
      flexFlow: 'column'
    }
  },
  contentLeftWrapper: {
    width: '60%', 
    paddingRight: '10px',
    [`@media (max-width: ${MED})`]: {
      width: '100%'
    }
  },
  card: {
    maxWidth: '60%',
    margin: 'auto',
    position: 'relative',
    [`@media (max-width: ${MED})`]: {
      maxWidth: '95%'
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
    const {card, contentWrapper, contentLeftWrapper, img, closeBtn } = classes;
    const { name, blurb, logo, web, res, map, menu } = info;
    const mapQuery = `Nashville ${name} ${map}`.split(" ").join("+")

    return (
      <Card className={card}>
        {/* CLOSE DETAIL BUTTON */}
        <div className={closeBtn} style={{backgroundColor: '#fff'}}>
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
        <div className={img} style={{ borderBottom: '5px solid rgb(205, 212, 82)' }}/>
      
        <CardContent>
          
          <div className="flex justify-between" ref="detailView">
      
            <div className={contentWrapper}>
      
              <div className={contentLeftWrapper}>
                <img src={logo} alt={`${name} logo`} style={{ maxWidth: '200px' }} />
      
                <p>
                  {blurb}
                </p>
              </div>
      
              <div style={{ fontSize: '1em', paddingLeft: '10px' }}>
                {menu ? <a className="btn" href={`${menu}`}>View Menu</a> : null}
                {res ? <a className="btn" href={`${res}`}>Make a Reservation</a> : null}

                <address><a href={`http://maps.google.com?q=${mapQuery}`}>{map}</a></address>
                <a href={`http://${web}`} target='blank'>{web}</a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default DetailCard;
