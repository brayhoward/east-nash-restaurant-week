import React from 'react';
import injectSheet from 'react-jss'
import capitalize from 'lodash.capitalize'
import Card, { CardContent } from 'material-ui/Card';

const styles = {
  main: {
    composes: 'flex justify-center'
  },
  card: {
    maxWidth: '59%',
    margin: 'auto',
    position: 'relative'
  },
  img: {
    composes: 'full-width',
    height: '45vh',
    background: ({ info: { image } }) => `url('${image}') no-repeat center/cover`
  },
  blurb: {
    composes: 'mg-t--xl'
  },
  about: {
    composes: 'mg-t'
  },
  closeBtn: {
    position: 'absolute',
    right: '.4em',
    top: '.4em',
    cursor: 'pointer',
    backgroundColor: 'var(--light)',
    textAlign: 'center',
    minWidth: '1.35em',
    fontSize: '2em',
    fontWeight: 'bold'
  },
  backArrow: {
    color: 'var(--light)',
    position: 'absolute',
    left: '.4em',
    top: '.4em',
    cursor: 'pointer'
  }
};

const DetailCard = ({ classes, info, handleClose }) => {
  const {card, img, closeBtn, backArrow } = classes;
  const { name, blurb, deals, logo } = info;
  const formatedName = capitalize(name);

  return (
    <Card className={card}>
      {/* CLOSE DETAIL ACTIONS */}  
      {/* <h1 onClick={handleClose} className={backArrow}>&larr;</h1> */}
      <div className={closeBtn}>
        <span onClick={handleClose}>
          X
        </span>
      </div>

      {/* BACKGROUND IMAGE*/}
      <div className={img} />  
      
      <CardContent>  
        
        <div className="flex justify-between">

          <div style={{width: '60%'}}>
            <h2 className="mg-b--sm">
              {formatedName}
            </h2>

            <p>
              {blurb}
            </p>
          </div>

          <div>
            <img src={logo} alt={`${name} logo`} style={{maxWidth: '3em'}}/>
            
            <h3>Deals</h3>

            <ul>
              {deals.map((deal, i) => <li key={i}>{deal}</li>)}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>  
  );
};

export default injectSheet(styles)(DetailCard)
