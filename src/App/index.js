import React, { Component } from 'react';
import injectSheet from 'react-jss'
import bind from 'bind-decorator';
import classnames from 'classnames';
import { MED_SM, LG, XL, MED } from 'constants/media-screens';
import BrandingSection from './BrandingSection';
import PartnersSection from './PartnersSection';
import footerImage from 'assets/footer-collage-fpo.png';
import birdImage from 'assets/golden-pheasant-lives.png';


const headerHeight = '3em';
const styles = {
  // ensure appContainer div stays centered when it reaches it's max width
  wrapper: {
    composes: 'flex flex-col justify-center align-items-center'
  },
  appContainer: {
    composes: 'flex flex-col flex-between align-content-center',
    paddingTop: headerHeight,
    width: '100vw',
    maxWidth: `calc(${XL} - 100px)`
  },
  collage: {
    composes: 'full-width flex justify-between align-items-end',
    height: '900px',
    background: `url(${footerImage}) no-repeat center/cover`,
    color: 'aqua',
    fontSize: '12px',
    position: 'relative',
    [`@media (max-width: ${MED_SM})`]: {
      background: `url(${footerImage}) no-repeat bottom/contain`,
      height: '33vh'
    }
  },
  navList: {
    listStyle: "none"
  },
  header: {
    composes: 'flex justify-end pd-r--lg',
    position: 'fixed',
    width: '100%',
    height: headerHeight,
    top: 0
  },
  bird: {
    composes: 'bird',
    display: 'block',
    position: 'absolute',
    right: '10%',
    bottom: '5%'
  },
  birdImg: {
    width: '560px',
    transition: 'all .3s ease-in',
    '&:hover': {
      transform: 'translate(50%, 0)',
      animationPlayState: 'paused'
    },
    '&:active': {
      transform: 'translate(50%, 0)',
      animationPlayState: 'paused'
    },
    [`@media (max-width: ${LG})`]: {
      width: '450px'
    },
    [`@media (max-width: ${MED})`]: {
      width: '370px'
    },
    [`@media (max-width: ${MED_SM})`]: {
      width: '145px'
    }
  }
}


@injectSheet(styles)
class App extends Component {
  state = {
    intervalId: null,
    shakeIt: false
  }

  constructor(props) {
    super(props);

    setTimeout(() => {
      this.setState({ shakeIt: true })
    }, 2000);
  }

  componentDidMount() {
    var intervalId = setInterval(this.triggerBirdAnimation, 7000);

    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    this.clearAnimationInterval()
  }

  @bind
  clearAnimationInterval() {
    clearInterval(this.state.intervalId);
  }

  @bind
  triggerBirdAnimation() {
    const mostlyTrue = (Math.random() >= 0.25);

    if (mostlyTrue) {
      this.setState({ shakeIt: true })

      setTimeout(() => {
        this.setState({ shakeIt: false })
      }, 5000);
    }
  }

  render() {
    const {
      wrapper,
      appContainer,
      navList,
      header,
      collage,
      bird,
      birdImg
    } = this.props.classes;

    const { shakeIt } = this.state;

    return (
      <div className={wrapper}>
        {/* HEADER   */}
        <header className={header}>
          <ul className={navList}>
            <li></li>
          </ul>
        </header>

        <div className={appContainer}>
          <BrandingSection />

          <PartnersSection />
        </div>

        <div className={collage}>
          <span className="footer-links" style={{margin: '20px'}}>site by <a href="http://adamswebpage.com/" target="_blank" rel="noopener noreferrer">Howard</a> &amp; <a href="mailto:brandonrhoward@gmail.com" target="_blank" rel="noopener noreferrer">Howard</a></span>
          <a
            href="http://theeastnashvillian.com/article/the-lonely-bird-in-shelby-bottoms"
            className={bird}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={
                classnames(
                  shakeIt ? 'shake' : null,
                  birdImg
                )
              }
              src={birdImage}
              alt="the shelby bottoms golden phesant"
              onClick={this.clearAnimationInterval}
              onMouseOver={this.clearAnimationInterval}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
