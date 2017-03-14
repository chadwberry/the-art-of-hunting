import React, { Component } from 'react';
import map from 'lodash/map';
import './videoGallery.styles.scss';

const videosUrls = ['https://www.youtube.com/embed/rtn5KVQRggM',
                    'https://www.youtube.com/embed/M695C9OXHhI',
                    'https://www.youtube.com/embed/vPQ4LmjjDHk'];

class VideoGallery extends Component {
  render() {
    return (
      <div className="videoGalleryContainer">
        <div className="mottoContainer">
          <h1 className="motto">A Guide to Everything Hunting</h1>
        </div>
        <div className="videoTitleContainer">
          <h1 className="videoGalleryTitle">Video Gallery</h1>
        </div>
        {map(videosUrls, (url, key) =>
          <Video url={url} key={key}/>
        )}
      </div>
    );
  }
}

function Video({ url, key }) {
  return (
    <div className="video" key={key}>
      <iframe width="560"
              height="315"
              src={url}
              frameBorder="0"
              allowFullScreen/>
    </div>
  );
}

export default VideoGallery;
