import React, { Component } from 'react';
import './articleTemplate.styles.scss';

class ArticleTemplate extends Component {
  render() {
    return (
      <div className="articleTemplateContainer">
        <div className="imageHeader">
          <h1 className="articleHeader">Blind Luck</h1>
          <div style={{ backgroundImage: 'url(/images/blindluckpic2.png)' }}
               className="blindLuck"/>
          </div>
        {/* <iframe width="560"
                height="315"
                src="https://www.youtube.com/embed/rtn5KVQRggM"
                frameBorder="0"
                allowFullScreen/> */}
      </div>
    );
  }
}

export default ArticleTemplate;
