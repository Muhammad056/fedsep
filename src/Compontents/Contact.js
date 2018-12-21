import React, { Component } from "react";

class Contact extends Component {
  state = {
    updateInfo: false
  };
  deleteButtonss = () => {
    this.setState({ updateInfo: !this.state.updateInfo });
  };

  deletePlan = () => {
    this.props.GamePlan();
  };

  render() {
    const { name, email, phone } = this.props.sam;
    const { updateInfo } = this.state;
    return (
      <div className="card mt-3">
        <div className="card-body">
          <h4>
            {name}
            <i
              onClick={this.deleteButtonss}
              className="fas fa-sort-down"
              style={{ cursor: "pointer" }}
            />
            <i
              onClick={this.deletePlan}
              className="fas fa-times "
              style={{ cursor: "pointer", color: "red", marginLeft: "630px" }}
            />
          </h4>
          {updateInfo ? (
            <ul className="list-group">
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Phone:{phone}</li>
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}
export default Contact;
