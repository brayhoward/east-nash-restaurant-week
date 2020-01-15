import React, { Component, Fragment } from 'react';
import bind from 'bind-decorator';
import Swipeable from 'react-swipeable';
import injectSheet from 'react-jss';
import classnames from 'classnames';

import { MED_SM } from 'constants/media-screens';
import DetailCard from './DetailCard';
import partners from "./patners-list";
import CatheadLogo from 'assets/logos/cathead.png'
import JonesLogo from 'assets/logos/jones.jpg'

const styles = {
  wrapper: {
    composes: 'flex justify-between pd-t--lg mg-b',
    minHeight: '60vh'
  },
  listWrapper: {
    composes: 'flex justify-center',
    minWidth: '100%',
    maxWidth: '100%',
    transition: 'margin-left .75s ease-in-out',
  },
  hidePartners: {
    marginLeft: '-100%'
  },
  partnersList: {
    composes: 'partners flex flex-wrap justify-center pd-0',
    margin: 'auto',
    listStyle: 'none',
    minWidth: '80%',
    maxWidth: '80%',
    [`@media (max-width: ${MED_SM})`]: {
      maxWidth: '100%'
    }
  },
  listItems: {
    padding: '2em'
  },
  fadeIn: {
    opacity: '1',
    visibility: 'visible',
    transition: 'opacity',
    transitionDelay: '.7s',
    transitionDuration: '.3s'
  },
  fadeOut: {
    opacity: '0',
    visibility: 'hidden',
    width: 0,
    height: 0,
    transition: 'opacity',
    transitionDelay: '0s',
    transitionDuration: '.7s',
    position: 'fixed',
    zIndex: 1000
  },
  subtitle: {
    composes: "mg--sm txt-center",
    [`@media (max-width: ${MED_SM})`]: {
      fontSize: '.9em'
    }
  },
  dates: {
    color:'rgb(253, 11, 133)',
    fontSize: '1.8em',
    textAlign: 'center',
    fontWeight: '700',
    [`@media (max-width: ${MED_SM})`]: {
      fontSize: '1.2em'
    }
  },
  sponsorMsg: {
    composes: "mg-b--lg",
    textAlign: "center",
    padding: '0 25%',
    [`@media (max-width: ${MED_SM})`]: {
      fontSize: '.55em',
      marginBottom: "1.5em"
    }
  },
  sponsorImg: {
    maxWidth: 180,
    padding: '10px',
    [`@media (max-width: ${MED_SM})`]: {
      maxWidth: 100
    }
  },
  sponsorOffer: {
    fontSize: '.8em',
  }
}

@injectSheet(styles)
export default class extends Component {

  constructor(props) {
    super(props);
    // Init state

    this.state = {
      showDetail: false,
      detailCardInfo: partners[0]
    }
  }

  componentDidMount(){
    document.addEventListener("keyup", this.escFunction, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keyup", this.escFunction, false);
  }

  componentDidUpdate(_props, { showDetail: previousShowDetail }) {
    const { showDetail } = this.state;
    const scrollIntoView = showDetail && (showDetail !== previousShowDetail);
    // Only scroll into view if show detail state has changed from false to true
    // So the detail card is centered on page correctly
    if (scrollIntoView) {
      this.refs['heading'].scrollIntoView({ block: "start", behavior: 'smooth' });
    }
  }

  render() {
    const {
      wrapper,
      listWrapper,
      partnersList,
      listItems,
      hidePartners,
      fadeIn,
      fadeOut,
      subtitle,
      dates,
      sponsorMsg,
      sponsorImg,
      sponsorOffer
    } = this.props.classes;

    const { showDetail, detailCardInfo } = this.state;

    const handleClick = info => (
      showDetail ? this.hideDetail() : this.showDetail(info)
    );

    return (
      <Fragment>
        <h3 className={subtitle} ref="heading">
          Select a restaurant to view special menus
        </h3>
        <h3 className={dates}>
          <span>FEBRUARY 16-22nd, {new Date().getFullYear()}</span><br/>
        </h3>

        <div className={wrapper}>
          <div className={classnames([listWrapper, showDetail ? hidePartners : null])}>
            <div>
              <ul className={partnersList}>
                {
                  partners.map(
                    ({ logo, name, ...rest }, i) => (
                      <li onClick={() => handleClick({ name, logo, ...rest })} className={listItems} key={i}>
                        <img src={logo} alt={`${name} logo`} style={{ maxWidth: '9em' }} />
                      </li>
                    )
                  )
                }
              </ul>
            </div>
          </div>

          {/* TODO: Make swipe right work */}
          <Swipeable
            className={
              classnames([
                'full-width',
                showDetail ? fadeIn : fadeOut
              ]
            )}
            onSwipedRight={() => this.hideDetail()}
            onSwipedLeft={() => this.hideDetail()}
            delta={80}
          >
            <div className="flex justify-center" ref="detail">
              <DetailCard info={detailCardInfo} handleClose={this.hideDetail} />
            </div>
          </Swipeable>
        </div>

        <div className={sponsorMsg}>
          <h4 className="mg-t--xl">
          In collaboration with
          </h4>
          <div className="flex flex-row justify-between align-items-center pd-l pd-r">
            <div className="pd--lg">
              <img className={sponsorImg} src={CatheadLogo} alt="Cathead Distillery"/>
              <p className={sponsorOffer}>Participating restaurants to offer $1 per <a href="https://catheaddistillery.com/" target="_blank" rel="noopener noreferrer">Cathead</a> specialty cocktail to benefit Fannie Battle</p>
            </div>
            <div className="pd--lg">
              <img className={sponsorImg} src={JonesLogo} alt="Fieldhouse Jones"/>
              <p className={sponsorOffer}>Interested in a stay-cation during resatruant week? <a href="https://fieldhousejones.com/nashville/" target="_blank" rel="noopener noreferrer">Fieldhouse Jones</a> is offering 10% off to locals</p>
            </div>
          </div>
        </div>

      </Fragment>
    );
  }

  @bind
  escFunction({ keyCode }) {
    if(keyCode === 27) {
      this.setState({ showDetail: false });
    }
  }

  @bind
  flickedUp(_e, _deltaY, isFlick) {

    if (isFlick) this.hideDetail()
  }


  showDetail(info) {
    this.setState({
      detailCardInfo: { ...info },
      showDetail: true
    });
  }

  @bind
  hideDetail(info) {
    this.setState({ showDetail: false });
  }
}
