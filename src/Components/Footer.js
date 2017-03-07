import React, { Component } from 'react';
import './Footer.styles.scss';
import Facebook from 'react-icons/lib/fa/facebook-square';
import YouTube from 'react-icons/lib/fa/youtube';

class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div style={{ backgroundImage: 'url(/images/TheArtofHuntingLogo2.png)' }}
             className="footerLogo"/>
        <div className="followUsContainer">
          <h1 className="footerTitle">FOLLOW US ON:</h1>
          <div className="iconContainer">
            <a target="_blank"
               href="https://www.facebook.com/The-Art-of-Hunting-227778727628501/">
              <Facebook className="facebook"/>
            </a>
            <a target="_blank"
               href="https://www.youtube.com/channel/UC2Wj2nbMLHYsIt6hj-G047w">
              <YouTube className="youTube"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
