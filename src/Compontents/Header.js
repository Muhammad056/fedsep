import React from "react";

const Header = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        {/* <a className="navbar-brand  font-weight-bold ">Contact Manager</a> */}
        <ul className="nav-item">
          <li className="nav-link">Home</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
