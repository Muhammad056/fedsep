import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    aqib: [
      {
        id: "1",
        name: "John Deho",
        email: "saqib68@gmail.com",
        phone: "123-258-0525"
      },
      {
        id: "2",
        name: "Karen Smith",
        email: "Karan.Smith@gmail.com",
        phone: "123-258-0525"
      },
      {
        id: "3",
        name: "Jana Smith",
        email: "Jana.smith@gmail.com",
        phone: "123-258-0525"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer