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
      set: "",
      sizeSet: ""
    };
    this.setColor = this.setColor.bind(this);
    this.setSize = this.setSize.bind(this);
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
      set: event.target.value
    });
  }
  setSize(event) {
    this.setState({
      sizeSet: event.target.value
    });
  }
  render() {
    let pro = this.state.product;
    console.log(this.state.color.length);
    return (
      <div className="product">
        <div>
          <img src={pro.image} />
        </div>
        <div>
          <h2>
            <Link to={`/${pro.type}`}>{this.state.type}</Link>/{this.state.name}
          </h2>
          <h1>{pro.name}</h1>
          <h2>${pro.price}</h2>
          <ul className="color">
            <form>
              {this.state.color.length > 0
                ? this.state.color.map(product => (
                    <label>
                      <input
                        key={Math.random() * Math.random()}
                        type="radio"
                        id={product.id}
                        name={product}
                        value={product}
                        onChange={this.setColor}
                        checked={this.state.set === product}
                      />
                      {product}
                    </label>
                  ))
                : null}
            </form>
          </ul>
          <ul className="size">
            {/* {this.state.size.length > 0
              ? this.state.size.map(product => (
                  <label>
                    <input
                      onChange={this.setSize}
                      key={product.id}
                      type="radio"
                      id={product.id}
                      name={product}
                      value={product}
                      checked={this.state.sizeSet === product}
                    />
                    {product}
                  </label>
                ))
              : null} */}
          </ul>
          <p>{pro.description}</p>
          <a>ADD TO BAG</a>
        </div>
      </div>
    );
  }
}

export default Product;
