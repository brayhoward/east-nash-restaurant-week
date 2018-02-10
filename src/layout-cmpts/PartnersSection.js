import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';
import bind from 'bind-decorator';
import classnames from 'classnames';
import { MED_SM } from 'constants/media-screens';
import FortLogo from 'assets/logo-fort-louise.jpg';
import FortImg from 'assets/fort-exterior.jpg';
import ButcherLogo from 'assets/logo-butcher-bee.jpg';
import ButcherImg from 'assets/Cebulka-B+B-4869.jpg';
import MargotLogo from 'assets/logo-margot.jpg';
import MargotImg from 'assets/ext-margot.jpg';
import JackLogo from 'assets/logo-two-ten-jack.jpg';
import RozeLogo from 'assets/logo-roze.jpg';
import RozeImg from 'assets/CafeRoze-exterior.jpg';
// import JackImg from 'assets/fort-exterior.jpg';
import Swipeable from 'react-swipeable'
import DetailCard from './DetailCard';

const styles = {
  wrapper: {
    composes: 'flex justify-between pd-t--lg',
    minHeight: '60vh'
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
  h3: {
    composes: "mg--sm txt-center txt-upper",
    [`@media (max-width: ${MED_SM})`]: {
      fontSize: '.9em'
    }
  }
}

@injectSheet(styles)
export default class extends Component {

  constructor(props) { 
    super(props);
    // Init state
    const { name, blurb, image, logo, phone, web, res, map } = partners[0];

    this.state = {
      showDetail: false,
      detailCardInfo: {
        name,
        blurb,
        image,
        logo,
        phone,
        web,
        res,
        map
      }
    }
  }

  componentDidMount(){
    document.addEventListener("keyup", this.escFunction, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keyup", this.escFunction, false);
  }

  shouldComponentUpdate(_props, { showDetail: nextShowDetail }) {
    const { showDetail } = this.state;
    const scrollIntoView = nextShowDetail && (nextShowDetail !== showDetail);
    // Only scroll into view it show detail state has change from false to true
    if (scrollIntoView) {
      window.setTimeout(
        () => {
          this.refs['heading'].scrollIntoView({block: "start", behavior: 'smooth' });
        },
        500
      );
    }

    return true;
  } 

  render() {
    const {
      wrapper,
      listWrapper,
      partnersList,
      listItems,
      marginLeft,
      fadeIn,
      fadeOut,
      h3
    } = this.props.classes;

    const { showDetail, detailCardInfo } = this.state;

    const handleClick = info => (
      showDetail ? this.hideDetail() : this.showDetail(info)
    );

    return (
      <Fragment>
        <h3 className={h3} ref="heading">
          Visit these Participating Restaurants
        </h3>

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
          <Swipeable
            className={showDetail ? fadeIn : fadeOut}
            onSwipedUp={this.flickedUp}
            onSwipedRight={() => this.hideDetail()}
            onSwipedLeft={() => this.hideDetail()}
            delta={70}
          >
            <DetailCard info={detailCardInfo} handleClose={this.hideDetail} showDetail={showDetail}/>
          </Swipeable>
        </div>
      </Fragment>
    );
  }

  @bind 
  escFunction({ keyCode }){
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

const partners = [
  {
    name: 'Butcher & Bee',
    logo: ButcherLogo ,
    image: ButcherImg,
    blurb: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem expedita, alias fugit,
      nobis ab, est laborum nemo tempora facere error quam ratione. Magnam consequatur iure minima nisi,
      vero eligendi quae!`,
    phone: '(615) 226-3322',
    web: 'butcherandbee.com',
    map: '902 Main St',
    menu:'#',
    res:'#'
  },
  {
    name: 'Fort Louise',
    logo: FortLogo,
    image: FortImg,
    blurb: `Located in East Nashville’s Inglewood neighborhood, Fort Louise is a restaurant from local entrepreneur Jessica Bower and acclaimed Chicago chef Greg Biggers (McCrady’s, TRU, Morimoto) offering a friendly spin on American comfort cuisine. The space — formerly a residential house — is cozy and intimate, and there's a charming back porch for al fresco dining. Beyond the menu of snacks, salads, and large plates, the bar program boasts frozen cocktails, beers sourced from across the country, and a shareable ewer of punch called "The Test."`,
    phone: '(615) 730-6273',
    web: 'hungrylikeafort.com',
    map: '1304 McGavock Pike',
    menu:'#',
    res:'https://resy.com/cities/bna/fort-louise'
  },
  {
    name: 'Margot',
    logo: MargotLogo,
    image: MargotImg,
    blurb: `Margot café & bar is a French inspired restaurant with southern influence located at the Five Points in the heart of East Nashville. The menu changes daily, features locally sourced products and hinges upon seasonality, freshness and simplicity. It is owned and operated by chef Margot McCormack. The building itself dates back to the 1930’s and was originally Fluty’s service station. The space was transformed in 2001 into a cozy neighborhood gathering place. Brick walls are simply adorned with copper pots, Italian plates and antique mirrors. A playful use of color creates a vibrant yet warm and comfortable interior. The restaurant also features a covered brick patio, flower filled gardens, a marble bar, an open kitchen and a mezzanine dining area.`,
    phone: '(615) 228-4864',
    web: 'margotcafe.com',
    map: '1017 Woodland Street',
    menu:'',
    res:''
  },
  {
    name: 'Two Ten Jack',
    logo: JackLogo ,
    image: 'http://twotenjack.com/nashville/wp-content/themes/twotenjack/img/web-bg-3.jpg',
    blurb: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem expedita, alias fugit,
      nobis ab, est laborum nemo tempora facere error quam ratione. Magnam consequatur iure minima nisi,
      vero eligendi quae!`,
    phone: '(615) 454-2731',
    web: 'twotenjack.com',
    map: '1900 Eastland Ave #105',
    menu:'',
    res:''
  },
  {
    name: 'Treehouse',
    logo: 'http://www.glutenfreegeek.com/wp-content/uploads/2015/03/the-Treehouse.jpg',
    image: 'https://pbs.twimg.com/media/CwX5zAIWgAAFeyY.jpg',
    blurb: `Located in East Nashville’s Inglewood neighborhood, Fort Louise is a restaurant from local entrepreneur Jessica Bower and acclaimed Chicago chef Greg Biggers (McCrady’s, TRU, Morimoto) offering a friendly spin on American comfort cuisine. The space — formerly a residential house — is cozy and intimate, and there's a charming back porch for al fresco dining. Beyond the menu of snacks, salads, and large plates, the bar program boasts frozen cocktails, beers sourced from across the country, and a shareable ewer of punch called "The Test."`,
    phone: '(615) 454-4201',
    web: 'treehousenashville.com',
    map: '1011 Clearview Ave',
    menu:'',
    res:'https://www.opentable.com/r/the-treehouse-nashville'
  },
  {
    name: 'Cafe Roze',
    logo: RozeLogo,
    image: RozeImg,
    blurb: `Cafe Roze, a neighborhood cafe by New York City chef Julia Jaksic, focuses on fresh, modern all day fare.  Lattes, steamers and spins on classic breakfast dishes are served throughout the mornings, salads and grain bowls come at lunchtime, and hearty globally influenced dinners with riffs on classic cocktails finish out the night. The airy minimalist space features an expansive marble bar, with pink and gray accents throughout.`,
    phone: '(615) 645-9100',
    web: 'caferoze.com',
    map: '1115 Porter Rd',
    menu:'',
    res:'https://resy.com/cities/22/cafe-roze'
  },
  {
    name: 'Peninsula',
    logo: 'http://peninsulanashville.com/wp-content/uploads/2017/04/logo.png',
    image: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/57022901/Peninsula.0.jpg',
    blurb: `Cuisine of the Iberian Peninsula in the heart of East Nashville. We serve Spanish and Portuguese fare accented with French techniques, and a bar program that features a Spanish gin and tonic menu, Old World Wines, and thoughtfully crafted cocktails.`,
    phone: '(615) 679-0377',
    web: 'peninsulanashville.com',
    map: '1035 W Eastland Ave',
    menu:'',
    res: 'https://resy.com/cities/bna/peninsula'

  }
]