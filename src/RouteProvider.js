import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App, ArticleList, PageTemplate } from './Pages';
// import App from './Pages/App';
// import Article from './Pages/Article';
// import PageTemplate from './Pages/PageTemplate';

function RouteProvider() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={PageTemplate}>
        <IndexRoute component={App}/>
        <Route path="articles" component={ArticleList}/>
      </Route>
    </Router>
  );
}

export default RouteProvider;
