import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' active>Burger Bulder</NavigationItem>
    <NavigationItem link='/'>Order Now</NavigationItem>
  </ul>

);

export default navigationItems;
