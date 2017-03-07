import React from 'react';
import MdMenu from 'react-icons/lib/md/menu';
import './app.styles.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="appContainer">
        <div className="navigationBar">
          <div className="logoContainer">
            <div style={{ backgroundImage: 'url(/images/TheArtofHuntingLogo.png)' }}
                 className="navLogo"/>
            <h1 className="mainHeader">The ART of HUNTING</h1>
          </div>
          <MdMenu className="menuIcon"/>
        </div>
      </div>
    );
  }
}
