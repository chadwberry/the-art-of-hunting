import React from 'react';
import NavigationBar from '../Components/NavigationBar.js';
import Button from '../Components/Button.js';
import Footer from '../Components/Footer.js';
import './app.styles.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="appContainer">
        <NavigationBar/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <Footer/>
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
        <Button title="Read Now" className="ReadNowButton"/>
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
          <h1 className="articleTitle">Article 1</h1>
          <p className="articleLead">This is article One! This is great!!! This is article One! This is great!!!</p>
        </div>
        <div className="articleTwo">
          <h1 className="articleTitle">Article 2</h1>
          <p className="articleLead">This is article two! This is greater!!! This is article One! This is great!!!</p>
        </div>
        <div className="articleThree">
          <h1 className="articleTitle">Article 3</h1>
          <p className="articleLead">This is article three! This is the greatest!!! This is article One! This is great!!!</p>
        </div>
      </div>
      <Button title="More Articles" className="MoreArticlesButton"/>
    </div>
  );
}
