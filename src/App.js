import React, { Component } from "react";
import Header from "./Compontents/Header";
import Contacts from "./Compontents/Contacts";

import { Provider } from "./Context";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <div className="container">
            <Header header="Manager Contact" />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
