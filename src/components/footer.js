import React, { Component } from "react";

export default class Footer extends Component {
  refreshInterval;
  date = new Date();
  constructor(props) {
    super(props);
    this.state = {
      hours:
        this.date.getHours() < 10
          ? `0${this.date.getHours()}`
          : this.date.getHours(),
      minutes:
        this.date.getMinutes() < 10
          ? `0${this.date.getMinutes()}`
          : this.date.getMinutes(),
      seconds:
        this.date.getSeconds() < 10
          ? `0${this.date.getSeconds()}`
          : this.date.getSeconds()
    };
  }
  componentDidMount() {
    this.refreshInterval = setInterval(() => this.refreshTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.refreshInterval);
  }
  refreshTime = () => {
    var date = new Date();
    this.setState({
      hours:
        this.date.getHours() < 10
          ? `0${this.date.getHours()}`
          : this.date.getHours(),
      minutes:
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
      seconds:
        date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
    });
  };
  render() {
    return (
      <footer>
        <div className="card app-footer">
          <h1>
            {this.state.hours}:{this.state.minutes}:{this.state.seconds}
          </h1>
        </div>
      </footer>
    );
  }
}
