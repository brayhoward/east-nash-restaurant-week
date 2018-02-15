import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';
import bind from 'bind-decorator';
import classnames from 'classnames';
import sortBy from 'lodash.sortby';
import { MED_SM } from 'constants/media-screens';
import FortLogo from 'assets/logo-fort-louise.jpg';
import FortImg from 'assets/fort-exterior.jpg';
import FortMenu from 'assets/Fort-louise-ENRWmenu.pdf';
import ButcherLogo from 'assets/logo-butcher-bee.jpg';
import ButcherImg from 'assets/Cebulka-B+B-4869.jpg';
import MargotLogo from 'assets/logo-margot.jpg';
import MargotImg from 'assets/ext-margot.jpg';
import JackLogo from 'assets/logo-two-ten-jack.jpg';
import RozeLogo from 'assets/logo-roze.jpg';
import RozeImg from 'assets/CafeRoze-exterior.jpg';
import TreeHouseLogo from 'assets/logo-treehouse.jpg'
import TkoLogo from 'assets/logo-tko.jpg';
import TkoImg from 'assets/tko-bar.jpg';
import RudiesLogo from 'assets/logo-rudies.jpg'
import RudiesImg from 'assets/rudies.jpeg';
import RudiesMenu from 'assets/menu-rudies.pdf';
import UrbanCowboyLogo from 'assets/logo-urban-cowboy.png';
import PublicHouseImg from 'assets/public-house.jpg';
import PeninsulaMenu from 'assets/ENRW Menu-Yuriko Say.pdf';
import Swipeable from 'react-swipeable';
import DetailCard from './DetailCard';

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
  h3: {
    composes: "mg--sm txt-center txt-upper",
    textTransform: 'none',
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
    const { name, blurb, image, logo, phone, web, res, map, special, menu } = partners[0];

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
        map,
        special,
        menu
      }
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
    // Only scroll into view if show detail state has change from false to true
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
      h3
    } = this.props.classes;

    const { showDetail, detailCardInfo } = this.state;

    const [first, second, third, ...rest] = sortBy(partners, ['name'])
    
    const almostAlpha = [first, third, second, ...rest ]

    const handleClick = info => (
      showDetail ? this.hideDetail() : this.showDetail(info)
    );

    return (
      <Fragment>
        <h3 className={h3} ref="heading">
          Select a restaurant to view specials
        </h3>

        <div className={wrapper}>
          <div className={classnames([listWrapper, showDetail ? hidePartners : null])}>
            <div>
              <ul className={partnersList}>
                {
                  almostAlpha.map(
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
            className={showDetail ? fadeIn : fadeOut}
            onSwipedRight={() => this.hideDetail()}
            onSwipedLeft={() => this.hideDetail()}
            delta={80}
          >  
            <div ref="detail">
              <DetailCard info={detailCardInfo} handleClose={this.hideDetail} showDetail={showDetail}/>
            </div>
          </Swipeable>
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

const partners = [
  {
    name: 'Butcher & Bee',
    logo: ButcherLogo ,
    image: ButcherImg,
    blurb: `Opened in 2015 with the same philosophy of carefully sourced ingredients and an ever
      changing menu as it's Charleston counterpart, Butcher & Bee serves a diverse, Middle Eastern
      leaning menu from chef Bryan Lee Weaver of mezze, entrees, and vegetables for which B&B has
      gained a cult following.`,
    phone: '(615) 226-3322',
    web: 'butcherandbee.com',
    map: '902 Main St',
    special: null,
    menu: null,
    res: null
  },
  {
    name: 'Fort Louise',
    logo: FortLogo,
    image: FortImg,
    blurb: `Located in East Nashville’s Inglewood neighborhood, Fort Louise is a restaurant from local
      entrepreneur Jessica Bower and acclaimed Chicago chef Greg Biggers (McCrady’s, TRU, Morimoto) offering
      a friendly spin on American comfort cuisine. The space — formerly a residential house — is cozy and intimate,
      and there's a charming back porch for al fresco dining. Beyond the menu of snacks, salads, and large plates,
      the bar program boasts frozen cocktails, beers sourced from across the country, and a shareable
      ewer of punch called "The Test."`,
    phone: '(615) 730-6273',
    web: 'hungrylikeafort.com',
    map: '1304 McGavock Pike',
    special: 'Prix Fixe $33 / Person',
    menu: FortMenu,
    res:'https://resy.com/cities/bna/fort-louise'
  },
  {
    name: 'Margot',
    logo: MargotLogo,
    image: MargotImg,
    blurb: `Margot café & bar is a French inspired restaurant with southern influence located at the
      Five Points in the heart of East Nashville. The menu changes daily, features locally sourced products
      and hinges upon seasonality, freshness and simplicity. It is owned and operated by chef Margot McCormack.
      The building itself dates back to the 1930’s and was originally Fluty’s service station. The space
      was transformed in 2001 into a cozy neighborhood gathering place. Brick walls are simply adorned with
      copper pots, Italian plates and antique mirrors. A playful use of color creates a vibrant yet warm and
      comfortable interior. The restaurant also features a covered brick patio, flower filled gardens, a
      marble bar, an open kitchen and a mezzanine dining area.`,
    phone: '(615) 228-4864',
    web: 'margotcafe.com',
    map: '1017 Woodland Street',
    special: null,
    menu: null,
    res: null
  },
  {
    name: 'Two Ten Jack',
    logo: JackLogo ,
    image: 'http://twotenjack.com/nashville/wp-content/themes/twotenjack/img/web-bg-3.jpg',
    blurb: `Two Ten Jack is a Japanese-inspired neighborhood pub, or izakaya, featuring kodawari ramen,
      yakitori (skewers & grilled items), sushi selections, and other Japanese-inspired pub comfort food
      that incorporates local, Southern ingredients. The beverage selection features craft beers, wine,
      handcrafted cocktails, sake and shochu. Located in Walden’s Phase 2 in East Nashville
      (next to Jeni’s), Two Ten Jack offers an unpretentious and comfortable environment – the true izakaya
      experience – as an urban gathering spot for the community where local and Japanese culture can come
      together.`,
    phone: '(615) 454-2731',
    web: 'twotenjack.com',
    map: '1900 Eastland Ave #105',
    special: null,
    menu: null,
    res: null
  },
  {
    name: 'Treehouse',
    logo: TreeHouseLogo,
    image: 'https://pbs.twimg.com/media/CwX5zAIWgAAFeyY.jpg',
    blurb: `Rustic American eatery & bar featuring an ever-changing menu, outdoor seating & late-night hours`,
    phone: '(615) 454-4201',
    web: 'treehousenashville.com',
    map: '1011 Clearview Ave',
    special: null,
    menu: null,
    res:'https://www.opentable.com/r/the-treehouse-nashville'
  },
  {
    name: 'Cafe Roze',
    logo: RozeLogo,
    image: RozeImg,
    blurb: `Cafe Roze, a neighborhood cafe by New York City chef Julia Jaksic, focuses on fresh, modern
      all day fare.  Lattes, steamers and spins on classic breakfast dishes are served throughout the
      mornings, salads and grain bowls come at lunchtime, and hearty globally influenced dinners with
      riffs on classic cocktails finish out the night. The airy minimalist space features an expansive
      marble bar, with pink and gray accents throughout.`,
    phone: '(615) 645-9100',
    web: 'caferoze.com',
    map: '1115 Porter Rd',
    special: null,
    menu: null,
    res:'https://resy.com/cities/22/cafe-roze'
  },
  {
    name: 'Peninsula',
    logo: 'http://peninsulanashville.com/wp-content/uploads/2017/04/logo.png',
    image: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/57022901/Peninsula.0.jpg',
    blurb: `Cuisine of the Iberian Peninsula in the heart of East Nashville. We serve Spanish and Portuguese
      fare accented with French techniques, and a bar program that features a Spanish gin and tonic menu,
      Old World Wines, and thoughtfully crafted cocktails.`,
    phone: '(615) 679-0377',
    web: 'peninsulanashville.com',
    map: '1035 W Eastland Ave',
    special: 'Family style menu for two people ($65) or four people ($130)',
    menu: PeninsulaMenu,
    res: 'https://resy.com/cities/bna/peninsula'
  },
  {
    name: 'TKO',
    logo: TkoLogo,
    image: TkoImg,
    blurb: `Cozy neighborhood spot for inventive Chinese food with a Southern-inspired twist, plus takeout.`,
    phone: '(615) 915-3102',
    web: 'tkotn.com',
    map: '4204 Gallatin Pike',
    special: null,
    menu: null,
    res: null
  },
  {
    name: "Rudies's",
    logo: RudiesLogo,
    image: RudiesImg,
    blurb: `Rudie’s is a family-owned business located in the heart of East Nashville’s Riverside Village.
      It was founded by Dave Mitchell, of Mitchell Delicatessen. When the time came to move Mitchell
      Delicatessen, we wanted to combine our love of oysters and pork with great beer and drinks. Throw in a
      courtyard patio, a relaxed vibe, a friendly staff and you have Rudie’s Seafood and Sausage. Rudie’s
      opened it’s doors in November 2014. We have made contacts on the northwest coast and gulf coast to get
      the freshest oysters available. Our pork comes from hogs raised in Summertown by Amish farmer. We get 2
      hogs every week and create sausages, chops and porchetta, to name a few. Sausages that are always
      available include andouille and bratwurst, guest starring beef cheddar, green chili, togarashi and
      polish sausages. We offer a special dog of the day. Our seafood offering includes mussels, shrimp and
      grits and salmon dishes. We love our vegetarian and vegan friends too and offer vegan hot chicken, beet
      tartare and stuffed seasonal vegetables. If a touch of creole hits the spot, we also serve po’boys and
      jambalaya.`,
    phone: '(615) 645-5167',
    web: 'rudiesnashville.com',
    map: "1402 McGavock Pike",
    special: 'Three courses for $33',
    menu: RudiesMenu,
    res: null
  },
  {
    name: 'Public House',
    logo: UrbanCowboyLogo,
    image: PublicHouseImg,
    blurb: `The Public House is located in the back of the Urban Cowboy B&B in the Stable House. We are a
      neighborhood bar and kitchen focusing on craft cocktails, a ever-changing menu of locally sourced food
      cooked over a wood burning grill, and genuine hospitality. Our kitchen is open from 4pm-10pm Tuesday
      to Sunday (bar stays open till 11pm weeknight, midnight on the weekends).We are closed on Mondays.
      All food and drinks are ordered at the bar. We do not take reservations. `,
    phone: '(347) 840-0525',
    web: 'http://www.urbancowboybnb.com/public-house/',
    map: '1603 Woodland St',
    special: null,
    menu: null,
    res: null
  }
]
