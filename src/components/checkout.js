import React, { Component } from "react";
// import { FormControl, InputLabel, Input, Button } from "@material-ui/core";

export default class Checkout extends Component {
  state = {
    name: "",
    email: "",
    mobile: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div className="card body">
        <div>
          <h1>Checkout</h1>
        </div>
        <hr />
        <div className="checkout-card">
          <div className="checkout-card-details-block">
            <h3>Checkout Details</h3>
            <hr />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <form style={{ marginTop: "15px", width: "75%" }}>
                <input
                  placeholder="Name"
                  className="form-input-field"
                  name="name"
                  onChange={e => {
                    this.onChange(e);
                  }}
                />
                <input
                  placeholder="Email"
                  className="form-input-field"
                  name="email"
                  type="email"
                  onChange={e => {
                    this.onChange(e);
                  }}
                />
                <input
                  placeholder="Phone Number"
                  className="form-input-field"
                  name="mobile"
                  onChange={e => {
                    this.onChange(e);
                  }}
                />
              </form>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "3em"
              }}
            >
              <button className="button" onClick={() => this.onSubmit()}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
