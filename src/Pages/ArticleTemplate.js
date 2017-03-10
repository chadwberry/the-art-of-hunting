import React, { Component, PropTypes } from 'react';
import ArticleCollection from '../Models/ArticleCollection';
import ArticleModel from '../Models/ArticleModel';
import data from '../data';
import './articleTemplate.styles.scss';
import Button from '../Components/Button.js';
import { Link } from 'react-router';

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
        <h3 className="byLine">By {article.getAuthor()}</h3>
        <div className="post">{article.getText()}</div>
        <VideoOrImage article={article}/>
        <Link to="/articles" className="backLink">
          <Button title="back" className="backButton"/>
        </Link>
      </div>
    );
  }
}

class VideoOrImage extends Component {

  static propTypes = {
    article: PropTypes.instanceOf(ArticleModel)
  }

  state = {
    isVideo: true
  }

  checkForVideo(article) {
    if (article.getVideo() === '') {
      this.setState({ isVideo: false });
      return;
    }
  }

  componentDidMount() {
    this.checkForVideo(this.props.article);
  }

  render() {
    const article = this.props.article;
    const isVideo = this.state.isVideo;
    return (
      <div className="videoContainer">
        { isVideo ?
          <iframe width="560" height="315" src={article.getVideo()} frameBorder="0" allowFullScreen/>
        : <div style={{ backgroundImage: `url(/images/${article.getAuthorImg()})` }} className="authorImg"/>}
      </div>
    );
  }
}

export default ArticleTemplate;
