import React, { Component } from 'react';
// import ArticleModel from '../Models/ArticleModel';
import ArticleCollection from '../Models/ArticleCollection';
import data from '../data';
import './articleTemplate.styles.scss';

const articles = new ArticleCollection(data.articles);

class ArticleTemplate extends Component {
  render() {
    const pathName = this.props.routeParams.articleName;
    const article = articles.findByPathName(pathName);
    return (
      <div className="articleTemplateContainer">
        <div className="imageHeader">
          <h1 className="articleHeader">{article.getTitle()}</h1>
          <div style={{ backgroundImage: `url(/images/${article.getImage()})` }}
               className="blindLuck"/>
        </div>
        <div className="post">{article.getText()}</div>
        <div className="videoContainer">
          <iframe width="560"
                  height="315"
                  src={article.getVideo()}
                  frameBorder="0"
                  allowFullScreen/>
        </div>
      </div>
    );
  }
}

export default ArticleTemplate;
