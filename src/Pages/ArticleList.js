import React, { Component } from 'react';
import './articleList.styles.scss';

class ArticleList extends Component {
  render() {
    return (
      <div>
        <div className="articleTitleContainer">
          <h1 className="articleListTitle">A Guide to Everything Hunting</h1>
        </div>
        <div className="articleGridContainer">
          <h1 className="journalTitle">The Journal</h1>
          <Row/>
          <Row/>
          <Row/>
        </div>
      </div>
    );
  }
}

function Row() {
  return (
    <div className="rowContainer">
      <div style={{ backgroundImage: 'url(/images/blindluckpic2.png)' }}
           className="articlePhoto"></div>
      <div style={{ backgroundImage: 'url(/images/elk1.png)' }}
           className="articlePhoto"></div>
      <div style={{ backgroundImage: 'url(/images/elk2.png)' }}
           className="articlePhoto"></div>
    </div>
  );
}

export default ArticleList;
