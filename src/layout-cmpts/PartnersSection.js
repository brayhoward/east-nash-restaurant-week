import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';
import bind from 'bind-decorator';
import classnames from 'classnames';
import FivePointsLogo from 'assets/five-points.jpg';
import FivePointsDarkLogo from 'assets/five-points-dark.jpg';
import FivePointsImg from 'assets/five-points-streetview.jpg';
import FortLogo from 'assets/logo-fort-louise.jpg';
import FortImg from 'assets/fort-exterior.jpg';
import ButcherLogo from 'assets/logo-butcher-bee.jpg';
import ButcherImg from 'assets/fort-exterior.jpg';
import LockelandLogo from 'assets/logo-lockleand-table.jpg';
import LockelandImg from 'assets/fort-exterior.jpg';
import JackLogo from 'assets/logo-two-ten-jack.jpg';
// import JackImg from 'assets/fort-exterior.jpg';
import Swipeable from 'react-swipeable'
import DetailCard from './DetailCard';

const styles = {
  wrapper: {
    composes: 'flex justify-between',
    minHeight: '100vh'
  },
  listWrapper: {
    composes: 'flex justify-center',
    minWidth: '100%',
    maxWidth: '100%',
    transition: 'margin-left .75s ease-in-out',
  },
  marginLeft: {
    marginLeft: '-100%',
  },
  partnersList: {
    composes: 'flex flex-wrap justify-center pd-0',
    margin: 'auto',
    listStyle: 'none',
    minWidth: '80%',
    maxWidth: '80%'
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
  }
}

@injectSheet(styles)
export default class extends Component {

  constructor(props) { 
    super(props);
    // Init state
    const { name, blurb, contacts, image, logo } = partners[0];

    this.state = {
      showDetail: false,
      detailCardInfo: {
        name,
        blurb,
        contacts,
        image,
        logo
      }
    }
  }

  @bind 
  escFunction({ keyCode }){
    if(keyCode === 27) {
      this.setState({ showDetail: false });
    }
  }

  componentDidMount(){
    document.addEventListener("keyup", this.escFunction, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keyup", this.escFunction, false);
  }

  render() {
    const {
      wrapper,
      listWrapper,
      partnersList,
      listItems,
      marginLeft,
      fadeIn,
      fadeOut
    } = this.props.classes;

    const { showDetail, detailCardInfo } = this.state;

    const handleClick = info => (
      showDetail ? this.hideDetail() : this.showDetail(info)
    );


    return (
      
      <div className={wrapper}>
        <div className={classnames([listWrapper, showDetail ? marginLeft : null])}>
          <div>
            <ul className={partnersList}>
              {
                partners.map(
                  ({ logo, name, ...rest }, i) => (
                    <li onClick={() => handleClick({ name, logo, ...rest })} className={listItems} key={i}>
                      <img src={logo} alt={`${name} logo`} style={{maxWidth: '9em'}}/>
                    </li>
                  )
                )
              }
            </ul>
          </div>
        </div>
      
        {/* TODO: Make swipe right work */}
        <Swipeable onSwipedUp={this.flickedUp} className={classnames(['pd-t--xl', showDetail ? fadeIn : fadeOut])}>
          <DetailCard info={detailCardInfo} handleClose={this.hideDetail} showDetail={showDetail}/>
        </Swipeable>
      </div>
    );
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

const partners = [
  {
    name: 'Butcher & Bee',
    logo: ButcherLogo ,
    image: 'https://cdn.vox-cdn.com/thumbor/Q2obxdebiyaKNOpEFJN6WL2wQEg=/633x0:5753x3840/1200x800/filters:focal(633x0:5753x3840)/cdn.vox-cdn.com/uploads/chorus_image/image/47819659/BUTCHER___BEE-1163.0.0.jpg',
    blurb: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem expedita, alias fugit,
      nobis ab, est laborum nemo tempora facere error quam ratione. Magnam consequatur iure minima nisi,
      vero eligendi quae!`,
    contacts: ['(615) 226-3322', 'butcherandbee.com' ]

  },
  {
    name: 'Fort Louise',
    logo: FortLogo,
    image: FortImg,
    blurb: `Located in East Nashville’s Inglewood neighborhood, Fort Louise is a restaurant from local entrepreneur Jessica Bower and acclaimed Chicago chef Greg Biggers (McCrady’s, TRU, Morimoto) offering a friendly spin on American comfort cuisine. The space — formerly a residential house — is cozy and intimate, and there's a charming back porch for al fresco dining. Beyond the menu of snacks, salads, and large plates, the bar program boasts frozen cocktails, beers sourced from across the country, and a shareable ewer of punch called "The Test."`,
    contacts: ['(615) 730-6273', 'hungrylikeafort.com' ]

  },
  {
    name: 'Lockeland Table',
    logo: LockelandLogo,
    image: 'http://cdn.onlyinyourstate.com/wp-content/uploads/2016/07/159.-Lockeland-Table-700x457.jpg',
    blurb: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem expedita, alias fugit,
      nobis ab, est laborum nemo tempora facere error quam ratione. Magnam consequatur iure minima nisi,
      vero eligendi quae!`,
    contacts: ['(615) 228-4864', 'lockelandtable.com' ]

  },
  {
    name: 'Two Ten Jack',
    logo: JackLogo ,
    image: 'http://twotenjack.com/nashville/wp-content/themes/twotenjack/img/web-bg-3.jpg',
    blurb: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem expedita, alias fugit,
      nobis ab, est laborum nemo tempora facere error quam ratione. Magnam consequatur iure minima nisi,
      vero eligendi quae!`,
    contacts: ['(615) 454-2731', 'twotenjack.com' ]

  },
  {
    name: 'Fort Louise',
    logo: FortLogo,
    image: FortImg,
    blurb: `Located in East Nashville’s Inglewood neighborhood, Fort Louise is a restaurant from local entrepreneur Jessica Bower and acclaimed Chicago chef Greg Biggers (McCrady’s, TRU, Morimoto) offering a friendly spin on American comfort cuisine. The space — formerly a residential house — is cozy and intimate, and there's a charming back porch for al fresco dining. Beyond the menu of snacks, salads, and large plates, the bar program boasts frozen cocktails, beers sourced from across the country, and a shareable ewer of punch called "The Test."`,
    contacts: ['(615) 730-6273', 'hungrylikeafort.com' ]

  },
  {
    name: 'Fort Louise',
    logo: FortLogo,
    image: FortImg,
    blurb: `Located in East Nashville’s Inglewood neighborhood, Fort Louise is a restaurant from local entrepreneur Jessica Bower and acclaimed Chicago chef Greg Biggers (McCrady’s, TRU, Morimoto) offering a friendly spin on American comfort cuisine. The space — formerly a residential house — is cozy and intimate, and there's a charming back porch for al fresco dining. Beyond the menu of snacks, salads, and large plates, the bar program boasts frozen cocktails, beers sourced from across the country, and a shareable ewer of punch called "The Test."`,
    contacts: ['(615) 730-6273', 'hungrylikeafort.com' ]

  },
  {
    name: 'Fort Louise',
    logo: FortLogo,
    image: FortImg,
    blurb: `Located in East Nashville’s Inglewood neighborhood, Fort Louise is a restaurant from local entrepreneur Jessica Bower and acclaimed Chicago chef Greg Biggers (McCrady’s, TRU, Morimoto) offering a friendly spin on American comfort cuisine. The space — formerly a residential house — is cozy and intimate, and there's a charming back porch for al fresco dining. Beyond the menu of snacks, salads, and large plates, the bar program boasts frozen cocktails, beers sourced from across the country, and a shareable ewer of punch called "The Test."`,
    contacts: ['(615) 730-6273', 'hungrylikeafort.com' ]

  },
  {
    name: 'Fort Louise',
    logo: FortLogo,
    image: FortImg,
    blurb: `Located in East Nashville’s Inglewood neighborhood, Fort Louise is a restaurant from local entrepreneur Jessica Bower and acclaimed Chicago chef Greg Biggers (McCrady’s, TRU, Morimoto) offering a friendly spin on American comfort cuisine. The space — formerly a residential house — is cozy and intimate, and there's a charming back porch for al fresco dining. Beyond the menu of snacks, salads, and large plates, the bar program boasts frozen cocktails, beers sourced from across the country, and a shareable ewer of punch called "The Test."`,
    contacts: ['(615) 730-6273', 'hungrylikeafort.com' ]

  },
  {
    name: 'Fort Louise',
    logo: FortLogo,
    image: FortImg,
    blurb: `Located in East Nashville’s Inglewood neighborhood, Fort Louise is a restaurant from local entrepreneur Jessica Bower and acclaimed Chicago chef Greg Biggers (McCrady’s, TRU, Morimoto) offering a friendly spin on American comfort cuisine. The space — formerly a residential house — is cozy and intimate, and there's a charming back porch for al fresco dining. Beyond the menu of snacks, salads, and large plates, the bar program boasts frozen cocktails, beers sourced from across the country, and a shareable ewer of punch called "The Test."`,
    contacts: ['(615) 730-6273', 'hungrylikeafort.com' ]

  },
  {
    name: 'Fort Louise',
    logo: FortLogo,
    image: FortImg,
    blurb: `Located in East Nashville’s Inglewood neighborhood, Fort Louise is a restaurant from local entrepreneur Jessica Bower and acclaimed Chicago chef Greg Biggers (McCrady’s, TRU, Morimoto) offering a friendly spin on American comfort cuisine. The space — formerly a residential house — is cozy and intimate, and there's a charming back porch for al fresco dining. Beyond the menu of snacks, salads, and large plates, the bar program boasts frozen cocktails, beers sourced from across the country, and a shareable ewer of punch called "The Test."`,
    contacts: ['(615) 730-6273', 'hungrylikeafort.com' ]

  }
]