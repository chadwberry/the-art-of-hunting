import React, { Component } from 'react';
import Button from '../Components/Button.js';
import { Link } from 'react-router';
import './app.styles.scss';
import map from 'lodash/map';
import take from 'lodash/take';
import data from '../data';
import ArticleCollection from '../Models/ArticleCollection';

const articles = new ArticleCollection(data.articles);

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
      </div>
    );
  }
}

function FirstSection() {
  return (
    <div className="mottoContainer">
      <h1 className="motto">A Guide to Everything Hunting</h1>
    </div>
  );
}

function SecondSection() {
  return (
    <div className="huntersLifeContainer">
      <div className="titleContainer">
        <h3 className="subheader">ART of HUNTING</h3>
        <h1 className="header">The Journal</h1>
        <Link to="/articles" className="readNowLink">
          <Button title="Read Now" className="ReadNowButton"/>
        </Link>
      </div>
      <div style={{ backgroundImage: 'url(/images/hunterslife.png)' }}
           className="huntersLifeImage"/>
    </div>
  );
}

function ThirdSection() {
  const firstThree = take(articles.toArray(), 3);
  return (
    <div className="journalContainer">
      <h1 className="journalTitle">Latest from the Journal</h1>
      <div className="articleContainer">
        {map(firstThree, (article, key) =>
        <Link to={`/articles/${article.getPath()}`} className="articlePreviewLink" key={key}>
          <div className="articlePreview">
              <h1 className="articleTitle">{article.getTitle()}</h1>
              <p className="articleLead">{ellipsify(article.getText())}</p>
          </div>
        </Link>)}
      </div>
      <div>
        <Link to="/articles" className="link">
          <Button title="More Articles" className="MoreArticlesButton"/>
        </Link>
      </div>
    </div>
  );
}

function FourthSection() {
  return (
  <div className="sponsorLogoContainer">
    <div style={{ backgroundImage: 'url(/images/rnrrvlogo.png)' }}
         className="sponsorLogo"/>
    <div style={{ backgroundImage: 'url(/images/mathewslogo.png)' }}
              className="sponsorLogo"/>
    <div style={{ backgroundImage: 'url(/images/trophytakerlogo.png)' }}
                        className="sponsorLogo"/>
  </div>
  );
}

function ellipsify(string) {
  return string.slice(0, 200) + '...';
}

export default App;
