import React, { Component } from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Checkout from "./components/checkout";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/home">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
