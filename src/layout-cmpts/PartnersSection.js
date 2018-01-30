import React, { Component } from 'react';
import injectSheet from 'react-jss';
import FivePointsLogo from 'assets/five-points.jpg';
import FivePointsDarkLogo from 'assets/five-points-dark.jpg';
import FivePointsImg from 'assets/five-points-streetview.jpg'

const styles = {
  main: {
    composes: 'flex flex-wrap justify-center full-height',
    listStyle: 'none',
  },
  listItems: {
    composes: 'pd--sm'
  }
}

@injectSheet(styles)
export default class extends Component {
  static state = {
    showDetail: false,
    detail: {

    }
  }

  constructor(props) { 
    super(props);
    const { streetView, blurb, deals } = partners[0];

    this.state = {
      showDetail: false,
      detailCardInfo: {
        streetView,
        blurb,
        deals
      }
    }
  }

  render() {
    const { main, listItems } = this.props.classes;

    return (
      <ul className={main}>
        {
          partners.map(
            ({ logo, name, ...rest }, i) => (
              <li className={listItems} onClick={() => this.showDetail({ ...rest })} key={i}>
                <img src={logo} alt={`${name} logo`} />
              </li>
            )
          )
        }
      </ul>
    );
  }

  showDetail(info) {
    this.setState({
      detailCardInfo: { ...info },
      showDetail: true
    });
  }
}

const partners = [
  {
    name: 'five points',
    logo: FivePointsLogo,
    streetView: FivePointsImg,
    blurb: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem expedita, alias fugit,
      nobis ab, est laborum nemo tempora facere error quam ratione. Magnam consequatur iure minima nisi,
      vero eligendi quae!`,
    deals: ['1/2 off appitizers', '1/2 well drinks', '25% off entrées' ]

  },
  {
    name: 'five points',
    logo: FivePointsDarkLogo ,
    streetView: FivePointsImg,
    blurb: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem expedita, alias fugit,
      nobis ab, est laborum nemo tempora facere error quam ratione. Magnam consequatur iure minima nisi,
      vero eligendi quae!`,
    deals: ['1/2 off appitizers', '1/2 well drinks', '25% off entrées' ]

  },
  {
    name: 'five points',
    logo: FivePointsLogo,
    streetView: FivePointsImg,
    blurb: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem expedita, alias fugit,
      nobis ab, est laborum nemo tempora facere error quam ratione. Magnam consequatur iure minima nisi,
      vero eligendi quae!`,
    deals: ['1/2 off appitizers', '1/2 well drinks', '25% off entrées' ]

  },
  {
    name: 'five points',
    logo: FivePointsDarkLogo ,
    streetView: FivePointsImg,
    blurb: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem expedita, alias fugit,
      nobis ab, est laborum nemo tempora facere error quam ratione. Magnam consequatur iure minima nisi,
      vero eligendi quae!`,
    deals: ['1/2 off appitizers', '1/2 well drinks', '25% off entrées' ]

  },
  {
    name: 'five points',
    logo: FivePointsLogo,
    streetView: FivePointsImg,
    blurb: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem expedita, alias fugit,
      nobis ab, est laborum nemo tempora facere error quam ratione. Magnam consequatur iure minima nisi,
      vero eligendi quae!`,
    deals: ['1/2 off appitizers', '1/2 well drinks', '25% off entrées' ]

  },
  {
    name: 'five points',
    logo: FivePointsDarkLogo ,
    streetView: FivePointsImg,
    blurb: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem expedita, alias fugit,
      nobis ab, est laborum nemo tempora facere error quam ratione. Magnam consequatur iure minima nisi,
      vero eligendi quae!`,
    deals: ['1/2 off appitizers', '1/2 well drinks', '25% off entrées' ]

  },
  {
    name: 'five points',
    logo: FivePointsLogo,
    streetView: FivePointsImg,
    blurb: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem expedita, alias fugit,
      nobis ab, est laborum nemo tempora facere error quam ratione. Magnam consequatur iure minima nisi,
      vero eligendi quae!`,
    deals: ['1/2 off appitizers', '1/2 well drinks', '25% off entrées' ]

  },
  {
    name: 'five points',
    logo: FivePointsDarkLogo,
    streetView: FivePointsImg,
    blurb: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem expedita, alias fugit,
      nobis ab, est laborum nemo tempora facere error quam ratione. Magnam consequatur iure minima nisi,
      vero eligendi quae!`,
    deals: ['1/2 off appitizers', '1/2 well drinks', '25% off entrées' ]

   }
]