import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../data/products.json";
import ProductListing from "./ProductListing";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 3,
      current: 1,
      next: [0, 6],
      sort: "sort"
    };
    this.right = this.right.bind(this);
    this.left = this.left.bind(this);
    this.change = this.change.bind(this);
  }
  componentDidMount() {
    this.setState({
      number: Math.ceil(data.products.length / 6)
    });
  }
  left() {
    if (this.state.current > 1) {
      this.setState({
        current: (this.state.current -= 1),
        next: this.state.next.map(x => x - 6)
      });
    }
  }
  right() {
    if (this.state.current < this.state.number) {
      this.setState({
        current: (this.state.current += 1),
        next: this.state.next.map(x => x + 6)
      });
    }
  }
  change(event) {
    this.setState({
      sort: event.target.value
    });
  }
  render() {
    function sort(a, b) {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    }
    let aa = data.products.filter(
      x => x.type === this.props.name.toLowerCase()
    );
    if (this.state.sort === "low") {
      aa.sort(sort);
    }
    if (this.state.sort === "high") {
      aa.sort(sort).reverse();
    }
    let a = aa.slice(this.state.next[0], this.state.next[1]);

    return (
      <div>
        <div className="title">
          <div className="filter">
            <h1>
              <FontAwesomeIcon icon="bars" />
              &nbsp; HIDE FILTER
            </h1>
            <select onChange={this.change}>
              <option value="sort">Sort</option>
              <option value="low">Price Low to High</option>
              <option value="high">Price High to Low</option>
            </select>
          </div>
          <div className="item">
            <h1>{this.props.name}</h1>
          </div>
          <div className="page">
            <button onClick={this.left}>
              <FontAwesomeIcon icon="angle-left" />
            </button>
            <p>
              {this.state.current}/{this.state.number}
            </p>
            <button onClick={this.right}>
              <FontAwesomeIcon icon="angle-right" />
            </button>
          </div>
        </div>
        <div>
          <ProductListing products={a} />
        </div>
      </div>
    );
  }
}
export default Title;
