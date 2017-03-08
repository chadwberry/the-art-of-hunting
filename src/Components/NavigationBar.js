import React, { Component } from 'react';
import MdMenu from 'react-icons/lib/md/menu';
import { Link } from 'react-router';
import './navigationBar.styles.scss';


class NavigationBar extends Component {
  render() {
    return (
      <div>
          <div className="navigationBar">
            <Link to="/" className="link">
              <div className="logoContainer">
                <div style={{ backgroundImage: 'url(/images/TheArtofHuntingLogo.png)' }}
                     className="navLogo"/>
                <h1 className="mainHeader">The ART of HUNTING</h1>
              </div>
            </Link>
            <MdMenu className="menuIcon"/>
          </div>
      </div>
    );
  }
}

export default NavigationBar;
