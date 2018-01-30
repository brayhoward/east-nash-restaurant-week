import React, { Component } from 'react';
import injectSheet from 'react-jss';
import FivePoints from 'assets/five-points.jpg';
import FivePointsDark from 'assets/five-points-dark.jpg';

const partners = [
  { name: 'five points', src: FivePoints},
  { name: 'five points', src: FivePointsDark },
  { name: 'five points', src: FivePoints},
  { name: 'five points', src: FivePointsDark },
  { name: 'five points', src: FivePoints},
  { name: 'five points', src: FivePointsDark },
  { name: 'five points', src: FivePoints},
  { name: 'five points', src: FivePointsDark }
]

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
  render() {
    const { main, listItems } = this.props.classes;

    return (
      <ul className={main}>
        {
          partners.map(
            ({ src, name }, i) => (
              <li className={listItems}>
                <img src={src} alt={`${name} logo`} key={i} />
              </li>
            )
          )
        }
      </ul>
    );
  }
}
