import React from 'react';
import NavigationBar from './NavigationBar.js';
import './app.styles.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="appContainer">
        <NavigationBar/>
        <FirstSection/>
        <SecondSection/>
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
      </div>
      <div style={{ backgroundImage: 'url(/images/hunterslife.png)' }}
           className="huntersLifeImage"/>
    </div>
  );
}
