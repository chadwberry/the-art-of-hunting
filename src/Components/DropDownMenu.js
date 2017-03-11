import React, { Component } from 'react';
import { Link } from 'react-router';
import map from 'lodash/map';
import './navigationBar.styles.scss';
import './dropDownMenu.styles.scss';

const pages = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'The Journal',
    path: '/articles'
  },
  {
    name: 'Video Gallery',
    path: '/videos'
  },
  {
    name: 'References',
    path: '/'
  }
];

class DrowDownMenu extends Component {
  render() {
    return (
      <div className="menuContainer">
        {map(pages, (page, key) =>
          <Link key={key} to={page.path} className="linkStyle">
            <h1 className="pageLinks">{page.name}</h1>
          </Link>
        )}
      </div>
    );
  }
}

export default DrowDownMenu;
