import React, { Component } from 'react';
import MdMenu from 'react-icons/lib/md/menu';
import { Link } from 'react-router';
import DropDownMenu from './DropDownMenu';
import classnames from 'classnames';
import './navigationBar.styles.scss';

class NavigationBar extends Component {

  state = {
    showMenu: false
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

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
            <div className={classnames('menuIconContainer', this.state.showMenu && 'showDropDownMenu')}
                 onClick={this.toggleMenu.bind(this)}>
            <MdMenu className="menuIcon"/>
            <DropDownMenu/>
          </div>
          </div>
      </div>
    );
  }
}

export default NavigationBar;
