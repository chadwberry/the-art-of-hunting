import React, { Component } from 'react';
import './articleList.styles.scss';
import map from 'lodash/map';
import { Link } from 'react-router';
import data from '../data';
import ArticleCollection from '../Models/ArticleCollection';

const articles = new ArticleCollection(data.articles);

class ArticleList extends Component {
  render() {
    return (
      <div>
        <div className="articleTitleContainer">
          <h1 className="articleListTitle">A Guide to Everything Hunting</h1>
        </div>
        <div className="articleGridContainer">
          <h1 className="journalTitle">The Journal</h1>
          <div className="rowContainer">
          {map(articles.toArray(), (article, key) =>
            <div className="container" key={key}>
              <Link to={`/articles/${article.getPath()}`} className="articleLink">
                <div style={{ backgroundImage: `url(/images/${article.getImage()})` }}
                     className="articlePhoto"/>
              </Link>
              <h1 className="title">{article.getTitle()}</h1>
            </div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleList;
