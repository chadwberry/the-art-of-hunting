import React, { Component } from 'react';
import './articleList.styles.scss';
import map from 'lodash/map';
import { Link } from 'react-router';

class ArticleList extends Component {

  getBackgroundImage(image) {
    return { backgroundImage: `url(/images/${image}.png)` };
  }

  getTitle(titles, key) {
    return titles[key];
  }

  render() {
    const images = ['blindluckpic2', 'elk1', 'elk2', 'whitetaildeer1',
                    'chadberryelk2010', 'elk3', 'elk4', 'blindluckpic1', 'glenberryelk2010'];
    const titles = ['Blind Luck', 'Understanding the Stages of the Elk Rut',
                    'Elk Calling Techniques', 'title4', 'title5', 'title6',
                    'title7', 'title8', 'title9'];
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
              <Link to="/articles/blind-luck" className="articleLink">
                <div style={this.getBackgroundImage(image)}
                     className="articlePhoto"/>
              </Link>
              <h1 className="title">{this.getTitle(titles, key)}</h1>
            </div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleList;
