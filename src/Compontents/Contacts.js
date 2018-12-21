import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../Context";

class Contacts extends Component {
  systemPlaner = id => {
    const { aqib } = this.state;

    console.log(aqib);
    const newContact = aqib.filter(sam => sam.id !== id);

    this.setState({
      aqib: newContact
    });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { aqib } = value;
          return (
            <React.Fragment>
              {aqib.map(sam => (
                <Contact
                  key={sam.id}
                  sam={sam}
                  GamePlan={this.systemPlaner.bind(this, sam.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
