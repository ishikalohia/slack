import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div className="user-profile">
          <div>
            <img />
          </div>
          <div>Ronald</div>
        </div>
        <div className="user-channels"></div>
      </div>
    );
  }
}
