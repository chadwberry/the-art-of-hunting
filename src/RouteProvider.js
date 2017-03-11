import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App, ArticleList, PageTemplate, ArticleTemplate, VideoGallery } from './Pages';
import $ from 'jquery';

function RouteProvider() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={PageTemplate} onChange={changeRoute}>
        <IndexRoute component={App}/>
        <Route path="articles" component={ArticleList}/>
        <Route path="articles/:articleName" component={ArticleTemplate}/>
        <Route path="videos" component={VideoGallery}/>
      </Route>
    </Router>
  );
}

function changeRoute() {
  $(window).scrollTop(0);
}

export default RouteProvider;
