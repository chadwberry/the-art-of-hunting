import React, { Component } from 'react';
import './articleList.styles.scss';
import map from 'lodash/map';

class ArticleList extends Component {

  getBackgroundImage(image) {
    return { backgroundImage: `url(/images/${image}.png)` };
  }

  render() {
    const images = ['blindluckpic2', 'elk1', 'elk2', 'blindluckpic2',
                    'elk1', 'elk2', 'blindluckpic2', 'elk1', 'elk2'];
    return (
      <div>
        <div className="articleTitleContainer">
          <h1 className="articleListTitle">A Guide to Everything Hunting</h1>
        </div>
        <div className="articleGridContainer">
          <h1 className="journalTitle">The Journal</h1>
          <div className="rowContainer">
          {map(images, (image, key) =>
            <div className="container" key={key}>
              <div style={this.getBackgroundImage(image)}
                   className="articlePhoto"/>
                   <h1 className="title">Blind Luck</h1>
            </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleList;
