import React, { Component } from 'react';
import './footer.styles.scss';
import Facebook from 'react-icons/lib/fa/facebook-square';
import YouTube from 'react-icons/lib/fa/youtube';

class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div style={{ backgroundImage: 'url(/images/TheArtofHuntingLogo2.png)' }}
             className="footerLogo"/>
        <div>
          <h1 className="footerTitle">FOLLOW US ON:</h1>
          <div className="iconContainer">
            <a target="_blank"
               href="https://www.facebook.com/The-Art-of-Hunting-227778727628501/">
              <Facebook className="facebook"/>
            </a>
            <a target="_blank"
               href="https://www.youtube.com/channel/UCx5RCuib6wlTwJ-m3Rus4XQ">
              <YouTube className="youTube"/>
            </a>
          </div>
        </div>
          <div>
            <h1 className="contributorTitle">In Partnership With:</h1>
            <div className="contributorContainer">
            <a target="_blank"
               href="http://www.berrygamecalls.com">
              <div style={{ backgroundImage: 'url(/images/berrygamecallslogo.png)' }}
                   className="berryLogo"/>
            </a>
            <a target="_blank"
               href="https://www.angryspike.com/">
              <div style={{ backgroundImage: 'url(/images/angryspikelogo.png)' }}
                 className="angrySpikeLogo"/>
            </a>
            </div>
          </div>
        </div>
    );
  }
}

export default Footer;
