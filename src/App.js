import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";

var date = new Date();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={refresh} variant="contained" color="primary">
          Refresh
        </Button>
        <h2>{`${date.getHours()} : ${date.getMinutes()}`}</h2>
      </header>
    </div>
  );
}

var refresh = () => {
  date = new Date();
};

export default App;
