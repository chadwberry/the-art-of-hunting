import React, { Component } from 'react';
import './articleTemplate.styles.scss';
import BlindLuck from '../Articles/BlindLuck.txt';

class ArticleTemplate extends Component {
  render() {
    return (
      <div className="articleTemplateContainer">
        <div className="imageHeader">
          <h1 className="articleHeader">Blind Luck</h1>
          <div style={{ backgroundImage: 'url(/images/blindluckpic2.png)' }}
               className="blindLuck"/>
        </div>
        <div className="post">{BlindLuck}</div>
        <div className="videoContainer">
          <iframe width="560"
                  height="315"
                  src="https://www.youtube.com/embed/rtn5KVQRggM"
                  frameBorder="0"
                  allowFullScreen/>
        </div>
      </div>
    );
  }
}

export default ArticleTemplate;
