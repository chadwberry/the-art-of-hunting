import React, { Component, PropTypes } from 'react';
import ArticleCollection from '../Models/ArticleCollection';
import ArticleModel from '../Models/ArticleModel';
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
        <Video article={article}/>
      </div>
    );
  }
}

class Video extends Component {

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
    this.setState({ isVideo: true });
  }

  componentDidMount() {
    this.checkForVideo(this.props.article);
  }

  render() {
    return (
      <div className="videoContainer">
        { this.state.isVideo ?
          <iframe width="560" height="315" src={this.props.article.getVideo()} frameBorder="0" allowFullScreen/>
        : <div style={{ backgroundImage: `url(/images/${this.props.article.getAuthorImg()})` }} className="authorImg"/>}
      </div>
    );
  }

}

export default ArticleTemplate;
