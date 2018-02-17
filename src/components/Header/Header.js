import React from 'react';

import classes from './Header.css'
import Button from '../UI/Button'

const header = (props) => (
  <div className={classes.Header}>
    <Button clickedLeft={props.clickedLeft} clickedRight={props.clickedRight}/>
  </div>
);

export default header;
