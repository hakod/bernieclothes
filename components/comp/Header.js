import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <div className="brand">
          <Link to="/">
            <h1>BERNIE CLOTHES</h1>
          </Link>
          <FontAwesomeIcon icon="shopping-bag" />
        </div>
        <div className="category">
          <ul>
            <li>MEN</li>
            <li>WOMEN</li>
          </ul>
        </div>
        <div className="promo">
          <h2>
            Take a holiday 50% off sale using styles with code FASH{"   "}
            <a>Details</a>
          </h2>
        </div>
      </div>
    );
  }
}
export default Header;
