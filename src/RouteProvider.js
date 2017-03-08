import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import NavigationBar from './Components/NavigationBar';
import App from './Pages/App';
import Article from './Pages/Article';

function RouteProvider() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={NavigationBar}>
        <IndexRoute component={App}/>
        <Route path="article" component={Article}/>
      </Route>
    </Router>
  );
}

export default RouteProvider;
