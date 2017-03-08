import React, { Component } from 'react';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';

class PageTemplate extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
          {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default PageTemplate;
