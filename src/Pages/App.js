import React, { Component } from 'react';
import Button from '../Components/Button.js';
import { Link } from 'react-router';
import './app.styles.scss';

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
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
        <h3 className="subheader">Hunter's Life</h3>
        <h1 className="header">The Journal</h1>
        <Link to="/articles" className="link">
          <Button title="Read Now" className="ReadNowButton"/>
        </Link>
      </div>
      <div style={{ backgroundImage: 'url(/images/hunterslife.png)' }}
           className="huntersLifeImage"/>
    </div>
  );
}

function ThirdSection() {
  return (
    <div className="journalContainer">
      <h1 className="journalTitle">Latest from the Journal</h1>
      <div className="articleContainer">
        <div className="articleOne">
          <h1 className="articleTitle">Blind Luck</h1>
          <p className="articleLead">It wasn’t until just a few years ago that I
             really began to enjoy turkey hunting…and it all happened because of a
             little ‘blind luck’.
          </p>
        </div>
        <div className="articleTwo">
          <h1 className="articleTitle">Understanding the Stages of the Elk Rut</h1>
          <p className="articleLead">​As the warm days of August come to a close,
            bachelor groups of bulls begin preparing for the rut...
          </p>
        </div>
        <div className="articleThree">
          <h1 className="articleTitle">Elk Calling Techniques</h1>
          <p className="articleLead">It’s no secret that you don’t have to be great
            on a bugle to get a bull to respond, but I do believe becoming a better
            elk caller will increase your odds...
          </p>
        </div>
      </div>
      <Link to="/articles" className="link">
      <Button title="More Articles" className="MoreArticlesButton"/>
      </Link>
    </div>
  );
}

export default App;
