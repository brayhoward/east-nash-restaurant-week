import sortBy from 'lodash.sortby';

import ButcherLogo from 'assets/logos/butcher-n-bee.jpg';
import ButcherImg from 'assets/banners/butcher-n-bee.jpg';
import RozeLogo from 'assets/logos/cafe-roze.jpg';
import RozeImg from 'assets/banners/CafeRoze.jpg';
import TreeHouseLogo from 'assets/logos/treehouse.jpg';
import TreeHouseBanner from 'assets/banners/treehouse.jpg';
import PeninsulaLogo from 'assets/logos/peninsula.png';
import PeninsulaBanner from 'assets/banners/peninsula.jpg';
import LyraLogo from 'assets/logos/lyra.jpg';
import LyraBanner from 'assets/banners/lyra.jpg';
import FoxBarLogo from 'assets/logos/fox-bar.png';
import FoxBarBanner from 'assets/banners/fox-bar.jpg';
import PearlDiverLogo from 'assets/logos/pearl-diver.jpeg'
import PearlDiverBanner from 'assets/banners/pearl-diver.jpg';

const partners = [
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
    name: 'Lyra',
    logo: LyraLogo,
    image: LyraBanner,
    blurb: 'Bringing a fresh take on Middle Eastern cuisine to East Nashville, Lyra marries flavors rich in history with elevated plating and an effortlessly modern feel. A concept quite new to the flourishing local food scene, Lyra aims to introduce diners to a cuisine that goes way beyond basic kabobs; flavors Chef Hrant grew up on and is excited to share with you.',
    phone: '(615) 928-8040',
    web: 'lyranashville.com',
    map: '935 W. Eastland Ave',
    offering: '$35 per person mezze menu',
    res: 'https://lyranashville.com/visit'
  },
  {
    name: 'The Fox Bar & Cocktail Club',
    logo: FoxBarLogo,
    image: FoxBarBanner,
    blurb: 'Imaginative, seasonal cocktails & modern shareable plates served in a stylish space',
    phone: '(615) 678-6541',
    web: 'thefoxnashville.com',
    map: '2905B Gallatin Pike',
    offering: null,
    res: 'www.thefoxnashville.com/reservations'
  },
  {
    name: 'Pearl Diver',
    logo: PearlDiverLogo,
    image: PearlDiverBanner,
    blurb: 'Relaxed Island Lounge',
    phone: '(615) 988-2265',
    web: 'pearldivernashville.com',
    map: '1008 Gallatin Ave',
    offering: 'Cubano & Daiquiri for $15 or Fish Tacos & Mexican beer of choice for $15',
  }

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
  //   name: 'Margot',
  //   logo: MargotLogo,
  //   image: MargotImg,
  //   blurb: `Margot café & bar is a French inspired restaurant with southern influence located at the
  //     Five Points in the heart of East Nashville. The menu changes daily, features locally sourced products
  //     and hinges upon seasonality, freshness and simplicity. It is owned and operated by chef Margot McCormack.
  //     The building itself dates back to the 1930’s and was originally Fluty’s service station. The space
  //     was transformed in 2001 into a cozy neighborhood gathering place. Brick walls are simply adorned with
  //     copper pots, Italian plates and antique mirrors. A playful use of color creates a vibrant yet warm and
  //     comfortable interior. The restaurant also features a covered brick patio, flower filled gardens, a
  //     marble bar, an open kitchen and a mezzanine dining area.`,
  //   phone: '(615) 228-4864',
  //   web: 'margotcafe.com',
  //   map: '1017 Woodland Street',
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