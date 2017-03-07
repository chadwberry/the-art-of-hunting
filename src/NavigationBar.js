import React, { Component } from 'react';
import MdMenu from 'react-icons/lib/md/menu';
import './NavigationBar.styles.scss';


class NavigationBar extends Component {
  render() {
    return (
      <div className="navigationBar">
        <div className="logoContainer">
          <div style={{ backgroundImage: 'url(/images/TheArtofHuntingLogo.png)' }}
               className="navLogo"/>
          <h1 className="mainHeader">The ART of HUNTING</h1>
        </div>
        <MdMenu className="menuIcon"/>
      </div>
    );
  }
}

export default NavigationBar;
