import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer">
        <div className="foot1">
          <ul>
            <h1>ABOUT</h1>
            <li>About</li>
            <li>Private</li>
            <li>Career</li>
            <li>History</li>
            <li>Terms</li>
          </ul>
          <ul>
            <h1>ACCOUNT</h1>
            <li>My Account</li>
            <li>Returns</li>
            <li>Check Out</li>
          </ul>
          <ul>
            <h1>Customer</h1>
            <li>Contact</li>
            <li>Shipping</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="foot2">
          &copy; 2019 <a href="bernieport.glitch.me"> | BERNIE | </a>
          ,ALL RIGHTS RESERVED.
        </div>
      </div>
    );
  }
}
export default Footer;
