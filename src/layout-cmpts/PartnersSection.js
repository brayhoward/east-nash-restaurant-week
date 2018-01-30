import React, { Component } from 'react';
import injectSheet from 'react-jss';
import classnames from 'classnames';
import FivePointsLogo from 'assets/five-points.jpg';
import FivePointsDarkLogo from 'assets/five-points-dark.jpg';
import FivePointsImg from 'assets/five-points-streetview.jpg'

const styles = {
  partnersList: {
    composes: 'flex flex-wrap justify-center full-height',
    listStyle: 'none',
    width: '100%',
    transition: 'margin-left 0.75s',
  },
  marginRight: {
    marginLeft: '-97%'
  },
  listItems: {
    composes: 'pd--sm'
  }
}

@injectSheet(styles)
export default class extends Component {

  constructor(props) { 
    super(props);

    // Init state
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
    const { partnersList, listItems, marginRight } = this.props.classes;
    const { showDetail } = this.state;

    const ulClasses = classnames([
      partnersList,
      showDetail ? marginRight : null
    ]);


    return (
      <ul className={ulClasses}>
        {
          partners.map(
            ({ logo, name, ...rest }, i) => (
              <li
                onClick={
                  () => showDetail ? this.hideDetail() : this.showDetail({ ...rest })
                }  
                className={listItems}
                key={i}
              >
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
  hideDetail(info) {
    this.setState({ showDetail: false });
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