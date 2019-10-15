import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="card app-header">
          <span className="header-align-left">
            <h1>Travellingo</h1>
          </span>
          <span className="header-align-right">
            <h1>demo text</h1>
          </span>
        </div>
      </header>
    );
  }
}
