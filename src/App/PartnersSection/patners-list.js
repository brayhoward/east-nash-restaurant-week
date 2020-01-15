import React from "react"
import sortBy from 'lodash.sortby';

import ButcherLogo from 'assets/logos/butcher-n-bee.jpg';
import ButcherImg from 'assets/banners/butcher-n-bee.jpg';
// import BeHiveLogo from 'assets/logos/be-hive.png';
// import BeHiveImg from 'assets/banners/behive.jpg';
import RozeLogo from 'assets/logos/cafe-roze.jpg';
import RozeImg from 'assets/banners/CafeRoze.jpg';
import TreeHouseLogo from 'assets/logos/treehouse.jpg';
import TreeHouseBanner from 'assets/banners/treehouse.jpg';
import PeninsulaLogo from 'assets/logos/peninsula.png';
import PeninsulaBanner from 'assets/banners/peninsula.jpg';
import LyraLogo from 'assets/logos/lyra.jpg';
import LyraBanner from 'assets/banners/lyra-2020.jpg';
// import FoxBarLogo from 'assets/logos/fox-bar.png';
// import FoxBarBanner from 'assets/banners/fox-bar.jpg';
// import PearlDiverLogo from 'assets/logos/pearl-diver.jpeg'
// import PearlDiverBanner from 'assets/banners/pearl-diver.jpg';
// import JackLogo from 'assets/logos/two-ten-jack.jpg';
// import JackBanner from 'assets/banners/two-ten-jack.jpg';
import PelicanLogo from 'assets/logos/pelican.jpg';
import PelicanBanner from 'assets/banners/pelican.jpg';
import RedLogo from 'assets/logos/rhs.png';
import RedBanner from 'assets/banners/rhs.jpg';
import LouLogo from 'assets/logos/lou.png';
import LouBanner from 'assets/banners/lou.jpg';
import NicolettosLogo from 'assets/logos/nico.jpg';
import NicolettosBanner from 'assets/banners/nico.jpg';
import MargotLogo from 'assets/logos/margot.png';
import MargotBanner from 'assets/banners/margot.jpg';
import SetsunLogo from 'assets/logos/setsun.png';
import SetsunBanner from 'assets/banners/setsun.jpg';
import FoxLogo from 'assets/logos/fox.jpg';
import FoxBanner from 'assets/banners/fox.jpg';

const partners = [
  // {
  //   name: 'Two Ten Jack',
  //   logo: JackLogo ,
  //   image: JackBanner,
  //   blurb: 'Casual, neighborhood izakaya serving craft cocktails, yakitori, and ramen.',
  //   phone: '(615) 579-9517',
  //   web: 'twotenjack.com',
  //   map: '1900 Eastland Ave #105',
  //   offering: <div>
  //     <div> YAKITORI </div>
  //     <div>fingerling sweet potatoes | miso butter $4</div>
  //     <div> tuna toro | wasabi oil $9</div>
  //     <br/>

  //     <bold>SPECIALTY SASHIMI $13</bold>
  //     <div>onaga | Japanese long-tail snapper | benimosu | mandarin | marcona</div>
  //     <br/>

  //     <div>RAMEN $15</div>
  //     <div>tori paitan shio | smoked chicken | frilly mustard | ajitama | red onion | yuzu oil</div>
  //     <br/>

  //     <div>COCKTAIL $11</div>
  //     <div>silver rum | keffir lime cordial | blackberry </div>
  //   </div>,
  //   res: 'https://resy.com/cities/bna/two-ten-jack-nashville'
  // },
  {
    name: 'Butcher & Bee',
    logo: ButcherLogo ,
    image: ButcherImg,
    blurb: "Opened in 2015 with the same philosophy of carefully sourced ingredients and an ever changing menu as it's Charleston counterpart, Butcher & Bee serves a diverse, Middle Eastern leaning menu from chef Bryan Lee Weaver of mezze, entrees, and vegetables for which B&B has gained a cult following.",
    phone: '(615) 226-3322',
    web: 'butcherandbee.com',
    map: '902 Main St',
    offering: 'Three courses for $30',
    res: 'https://resy.com/cities/bna/butcher-and-bee-nashville'
  },
  {
    name: 'Treehouse',
    logo: TreeHouseLogo,
    image: TreeHouseBanner,
    blurb: `Locally-sourced, The Treehouse Restaurant is a Chef-Driven restaurant located in the trendy 5-Points neighborhood in East Nashville. We focus on the best quality, organic ingredients from local farms in our dishes.`,
    phone: '(615) 454-4201',
    web: 'treehousenashville.com',
    map: '1011 Clearview Ave',
    offering: '"Chinese New Year" - A special menu of Chinese classics, a la carte.',
    res:'https://www.opentable.com/r/the-treehouse-reservations-nashville?restref=289153&lang=en-US'
  },
  {
    name: 'Cafe Roze',
    logo: RozeLogo,
    image: RozeImg,
    blurb: 'Cafe Roze is an all-day cafe in East Nashville specializing in fresh and simple breakfast, lunch and dinner options, as well as top-notch cocktails at night.',
    phone: '(615) 645-9100',
    web: 'caferoze.com',
    map: '1115 Porter Rd',
    offering: '$35 Two Course Dinner (appetizer & entree)',
    res:'https://resy.com/cities/bna/cafe-roze'
  },
  {
    name: 'Fox',
    logo: FoxLogo,
    image: FoxBanner,
    blurb: 'Imaginative, seasonal cocktails & modern shareable plates served in a stylish space.',
    phone: '',
    web: 'thefoxnashville.com/',
    map: '2905B Gallatin Pike',
    offering: '',
    res: 'https://resy.com/cities/bna/the-fox-bar-and-cocktail-club'
  },
  {
    name: 'Lou',
    logo: LouLogo,
    image: LouBanner,
    blurb: 'The daughter of a bohemian mother from Venice Beach and a well-read, charming Frenchman, lou is Chef / Owner Mailea Weger’s all-day café, brunch locale, and all-natural wine bar new to East Nashville, Tennessee.',
    phone: '(615) 499-4495',
    web: 'lounashville.com/',
    map: '1304 McGavock Pk',
    offering: '',
    res: 'https://resy.com/cities/bna/lou?date=2020-01-04&seats=2'
  },
  {
    name: 'Lyra',
    logo: LyraLogo,
    image: LyraBanner,
    blurb: "Lyra is a modern Middle Eastern restaurant taking classic Middle Eastern dishes to a new level. Chef Hrant's beautiful use of spice combined with his imaginative interpretation of ancient recipes from the Old Country spanning from Morocco to Oman will entertain your tastebuds.",
    phone: '(615) 928-8040',
    web: 'lyranashville.com',
    map: '935 W. Eastland Ave',
    offering: '',
    res: 'https://lyranashville.com/visit'
  },
  {
    name: 'Margot',
    logo: MargotLogo,
    image: MargotBanner,
    blurb: 'Margot café & bar is a French inspired restaurant with southern influence located at the Five Points in the heart of East Nashville. The menu changes daily, features locally sourced products and hinges upon seasonality, freshness and simplicity. It is owned and operated by chef Margot McCormack. The building itself dates back to the 1930’s and was originally Fluty’s service station. The space was transformed in 2001 into a cozy neighborhood gathering place. Brick walls are simply adorned with copper pots, Italian plates and antique mirrors. A playful use of color creates a vibrant yet warm and comfortable interior. The restaurant also features a covered brick patio, flower filled gardens, a marble bar, an open kitchen and a mezzanine dining area.',
    phone: '(615) 228-4864',
    web: 'margotcafe.com',
    map: '1017 Woodland Street',
    offering: '',
    res: ''
  },
  {
    name: "Nicoletto's",
    logo: NicolettosLogo,
    image: NicolettosBanner,
    blurb: "We love pasta. Fresh pasta, dried pasta, you name it. We love it so much that we founded Nicoletto's Pasta Co. to handcraft small batch pasta in fresh and dried varieties using traditional pasta making techniques. Nicoletto's pasta is bronze cut, slow dried, and packaged in Nashville, TN.",
    phone: '(629) 202-8102',
    web: 'nicolettos.com',
    map: '2905A Gallatin Pike',
    offering: '',
    res: ''
  },
  {
    name: 'Peninsula',
    logo: PeninsulaLogo,
    image: PeninsulaBanner,
    blurb: 'Peninsula serves up shareable plates, old world wines, and Spanish style gin and tonics in an inviting and intimate space. Focusing on sustainable, local ingredients, Peninsula features seasonal and creative dishes influenced by the flavors and techniques of the Iberian Peninsula. The atmosphere is rustic yet modern, and encourages guests to sample the flavors of Spain, Portugal and France while maintaining a familiarity of local ingredients.',
    phone: '(615) 679-0377',
    web: 'peninsulanashville.com',
    map: '1035 W Eastland Ave',
    offering: '10% off of your food bill',
    res: 'https://resy.com/cities/bna/peninsula'
  },
  {
    name: 'Pelican & Pig',
    logo: PelicanLogo,
    image: PelicanBanner,
    blurb: 'Located in a converted mid-century auto upholstery shop in East Nashville, Pelican & Pig is a purveyor of seasonal and creative fare cooked in a wood-burning hearth. Owned and operated by husband and wife team Nick & Audra Guidry, Pelican & Pig operates with creativity and service in mind, drawing inspiration from places they have lived and from their many travels.',
    phone: '(615) 730-6887',
    web: 'pelicanandpig.com/',
    map: '1010 Gallatin Avee',
    offering: '',
    res: 'https://resy.com/cities/bna/pelican-and-pig'
  },
  {
    name: 'Red Headed Stranger',
    logo: RedLogo,
    image: RedBanner,
    blurb: 'We’re a neighborhood taco shop in East Nashville. If you like fresh and delicious tacos, brisket, Hatch green chiles and other southwestern inspired foods, you’re in the right place.',
    phone: '(615) 544-TACO',
    web: 'redheadedstrangertacos.com/',
    map: '305 Arrington St.',
    offering: '',
    res: ''
  },
  {
    name: 'Setsun',
    logo: SetsunLogo,
    image: SetsunBanner,
    blurb: 'A pop-up wine bar in the heart of East Nashville’s Historic Edgefield neighborhood. Chef Jason Zygmont and Ray Melendi bring a casually delicious menu of small plates that is paired with a concise, ever-rotating wine list.',
    phone: '(615) 326-4866',
    web: 'setsuneast.com/',
    map: '700 Fatherland Street',
    offering: '',
    res: ''
  }
  // {
  //   name: 'Lyra',
  //   logo: LyraLogo,
  //   image: LyraBanner,
  //   blurb: 'Bringing a fresh take on Middle Eastern cuisine to East Nashville, Lyra marries flavors rich in history with elevated plating and an effortlessly modern feel. A concept quite new to the flourishing local food scene, Lyra aims to introduce diners to a cuisine that goes way beyond basic kabobs; flavors Chef Hrant grew up on and is excited to share with you.',
  //   phone: '(615) 928-8040',
  //   web: 'lyranashville.com',
  //   map: '935 W. Eastland Ave',
  //   offering: '$35 per person mezze menu',
  //   res: 'https://lyranashville.com/visit'
  // },
  // {
  //   name: 'The Fox Bar & Cocktail Club',
  //   logo: FoxBarLogo,
  //   image: FoxBarBanner,
  //   blurb: 'Imaginative, seasonal cocktails & modern shareable plates served in a stylish space',
  //   phone: '(615) 678-6541',
  //   web: 'thefoxnashville.com',
  //   map: '2905B Gallatin Pike',
  //   offering: null,
  //   res: 'www.thefoxnashville.com/reservations'
  // },
  // {
  //   name: 'Pearl Diver',
  //   logo: PearlDiverLogo,
  //   image: PearlDiverBanner,
  //   blurb: 'Relaxed Island Lounge',
  //   phone: '(615) 988-2265',
  //   web: 'pearldivernashville.com',
  //   map: '1008 Gallatin Ave',
  //   offering: 'Cubano & Daiquiri for $15 or Fish Tacos & Mexican beer of choice for $15',
  // },
  // {
  //   name: 'The BE-Hive',
  //   logo: BeHiveLogo ,
  //   image: BeHiveImg,
  //   blurb: "We are a plant based deli and market open weekly inside of our commercial kitchen where we create and produce small batch vegan meats and cheeses. We offer a variety of sandwiches, seitan wings and other comfort foods that are hard for people with restricted diets to find without sacrificing flavor.",
  //   phone: '(615) 358-8668',
  //   web: 'http://bethehive.com',
  //   map: '2414 Gallatin Ave',
  //   offering: 'Special Combo: Choice of Sandwich + Fancy Tot',
  //   res: ''
  // }

  // {
  //   name: 'Public House',
  //   logo: UrbanCowboyLogo,
  //   image: PublicHouseImg,
  //   blurb: `The Public House is located in the back of the Urban Cowboy B&B in the Stable House. We are a
  //     neighborhood bar and kitchen focusing on craft cocktails, a ever-changing menu of locally sourced food
  //     cooked over a wood burning grill, and genuine hospitality. Our kitchen is open from 4pm-10pm Tuesday
  //     to Sunday (bar stays open till 11pm weeknight, midnight on the weekends).We are closed on Mondays.
  //     All food and drinks are ordered at the bar. We do not take reservations. `,
  //   phone: '(347) 840-0525',
  //   web: 'http://www.urbancowboybnb.com/public-house/',
  //   map: '1603 Woodland St',
  //   offering: null,
  //   menu: null,
  //   res: null
  // }
  // {
  //   name: 'TKO',
  //   logo: TkoLogo,
  //   image: TkoImg,
  //   blurb: `Cozy neighborhood spot for inventive Chinese food with a Southern-inspired twist, plus takeout.`,
  //   phone: '(615) 915-3102',
  //   web: 'tkotn.com',
  //   map: '4204 Gallatin Pike',
  //   offering: null,
  //   menu: null,
  //   res: null
  // },
  // {
  //   name: 'Two Ten Jack',
  //   logo: JackLogo ,
  //   image: 'http://twotenjack.com/nashville/wp-content/themes/twotenjack/img/web-bg-3.jpg',
  //   blurb: `Two Ten Jack is a Japanese-inspired neighborhood pub, or izakaya, featuring kodawari ramen,
  //     yakitori (skewers & grilled items), sushi selections, and other Japanese-inspired pub comfort food
  //     that incorporates local, Southern ingredients. The beverage selection features craft beers, wine,
  //     handcrafted cocktails, sake and shochu. Located in Walden’s Phase 2 in East Nashville
  //     (next to Jeni’s), Two Ten Jack offers an unpretentious and comfortable environment – the true izakaya
  //     experience – as an urban gathering spot for the community where local and Japanese culture can come
  //     together.`,
  //   phone: '(615) 454-2731',
  //   web: 'twotenjack.com',
  //   map: '1900 Eastland Ave #105',
  //   offering: null,
  //   menu: JackMenu,
  //   res: null
  // },
]

const orderedParnters = sortBy(partners, ['name']);

export default orderedParnters