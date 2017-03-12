import React, { Component } from 'react';
import './videoGallery.styles.scss';

class VideoGallery extends Component {
  render() {
    return (
    <div className="videoGridContainer">
      <div className="mottoContainer">
        <h1 className="motto">A Guide to Everything Hunting</h1>
      </div>
      <div className="videoTitleContainer">
        <h1 className="videoGalleryTitle">Video Gallery</h1>
      </div>
      <div className="videoOne">
        <iframe width="560" height="315" src={('https://www.youtube.com/embed/rtn5KVQRggM')}
                            frameBorder="0" allowFullScreen/>
      </div>
      <div className="videoTwo">
        <iframe width="560" height="315" src={('https://www.youtube.com/embed/M695C9OXHhI')}
                            frameBorder="0" allowFullScreen/>
      </div>
      <div className="videoThree">
        <iframe width="560" height="315" src={('https://www.youtube.com/embed/vPQ4LmjjDHk')}
                            frameBorder="0" allowFullScreen/>
      </div>
    </div>
    );
  }
}

export default VideoGallery;
