import React, { Component } from "react";
import logo from "./logo.svg";
import Prducts from "./Products";
import "./App.css";
import ColoredBlock from "./ColoredBlock.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>My React App</h1>
        </header>
        <div className="main-content">
          <ColoredBlock />
        </div>
        <footer>...</footer>
      </div>
    );
  }
}

export default App;
