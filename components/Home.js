import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <div className="home1">
          <div className="title1">
            <h1>BERNIE CLOTHES</h1>
            <h2>Collection</h2>
            <h2>PRE-WINTER 2019</h2>
            <h1>THESAL</h1>
          </div>
        </div>
        <div className="home2">
          <div className="skirts">
            <Link to="/skirts/">
              <h1>SKIRTS</h1>
              <div className="line" />
            </Link>
          </div>
          <div className="blazers">
            <Link to="/blazers/">
              <h1>BLAZERS</h1>
              <div className="line" />
            </Link>
          </div>
          <div className="jacketsw">
            <Link to="/jacketsw/">
              <h1>JACKETS</h1>
              <div className="line" />
            </Link>
          </div>
          <div className="handbags">
            <Link to="/handbags/">
              <h1>HANDBAG VARIETY</h1>
              <p>PREMIUM LEATHER HANDBAGS MADE IN ITALY.</p>
              <div className="line" />
            </Link>
          </div>
        </div>
        <div className="home3">
          <div className="title2">
            <h1>PRE-WINTER 2019</h1>
          </div>
          <div className="jackets">
            <Link to="/jackets/">
              <h1>JACKETS</h1>
              <div className="line" />
            </Link>
          </div>
          <div className="sweaters">
            <Link to="/sweaters/">
              <h1>SWEATERS</h1>
              <div className="line" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
