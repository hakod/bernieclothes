import React from "react";
import data from "../data/products.json";
import { Link } from "react-router-dom";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      type: "",
      name: "",
      color: [],
      size: [],
      colorSet: "",
      sizeSet: "",
      message: "",
      show: false
    };
    this.setColor = this.setColor.bind(this);
    this.setSize = this.setSize.bind(this);
    this.add = this.add.bind(this);
  }
  componentDidMount() {
    let o = data.products.filter(
      x => x.id === Number(this.props.match.params.id)
    );
    this.setState({
      product: o[0],
      type: o[0].type.toUpperCase(),
      name: o[0].name.toUpperCase(),
      color: o[0].color,
      size: o[0].size
    });
  }
  setColor(event) {
    this.setState({
      colorSet: event.target.value,
      message: ""
    });
  }
  setSize(event) {
    this.setState({
      sizeSet: event.target.value,
      message: ""
    });
  }
  add() {
    if (this.state.colorSet && this.state.sizeSet) {
      this.props.actions.addItem(this.state);
      this.setState({
        show: true
      });
      window.scrollTo(0, 0);
      // arrow function for context
      setTimeout(
        () =>
          this.setState({
            show: false
          }),
        3000000
      );
    }
    if (!this.state.colorSet) {
      this.setState({
        message: "Please select a color"
      });
    } else if (!this.state.sizeSet) {
      this.setState({
        message: "Please select a size"
      });
    }
  }
  render() {
    let pro = this.state.product;
    let total = this.props.item.map(x => x.qty * x.item.product.price);
    return (
      <div className="product">
        <div className="productImage">
          <img src={pro.image} />
        </div>
        <div className="productTitle">
          <h2>
            <Link to={`/${pro.type}`}>{this.state.type}</Link>/{this.state.name}
          </h2>
          <h1>{pro.name}</h1>
          <h2>${pro.price}</h2>
          <ul className="color">
            <form>
              {this.state.color.length > 0
                ? this.state.color.map(product => (
                    <label key={product}>
                      <input
                        type="radio"
                        id={product}
                        name={product}
                        value={product}
                        onChange={this.setColor}
                        checked={this.state.colorSet === product}
                      />
                      {product}
                    </label>
                  ))
                : null}
            </form>
          </ul>
          <ul className="size">
            {this.state.size.length > 0
              ? this.state.size.map(product => (
                  <label key={product}>
                    <input
                      onChange={this.setSize}
                      type="radio"
                      id={product}
                      name={product}
                      value={product}
                      checked={this.state.sizeSet === product}
                    />
                    {product}
                  </label>
                ))
              : null}
          </ul>
          <div className="message">
            {this.state.message ? <p>{this.state.message}</p> : null}
          </div>
          <p>{pro.description}</p>
          <a onClick={this.add}>ADD TO BAG</a>
        </div>
        {this.state.show ? (
          <section className="showCart">
            <div className="cartBox">
              {this.props.item.map((x, index) => {
                return (
                  <div className="cartBoxItem" key={index}>
                    <img src={x.item.product.image} />
                    <div>
                      <h2>{x.item.name}</h2>
                      <p>COLOR: {x.item.colorSet}</p>
                      <p>SIZE: {x.item.sizeSet}</p>
                      <p>QTY: {x.qty}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pricesCart">
              <p>Subtotal:</p>
              <p>${total.reduce((x, y) => x + y).toFixed(2)}</p>
              <Link to="/cart">Go to Cart</Link>
            </div>
          </section>
        ) : null}
      </div>
    );
  }
}

export default Product;
