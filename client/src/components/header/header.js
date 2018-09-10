import React, { Component } from 'react';
import './header.css';
class Header extends Component {
  render() {
    return(
      <div className="header">
        <h1><i class="fab fa-twitter"></i> Sentiment Analysis</h1>
      </div>
    )
  }
}


export default Header;
