import React from "react";
import { Link } from "react-router-dom";

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="listitem">
        <Link
          to={{
            pathname: `/product/${this.props.product.id}`,
            state: { id: this.props.product.id }
          }}
        >
          <img src={this.props.product.image} />
        </Link>
        <h1>
          <Link
            to={{
              pathname: `/product/${this.props.product.id}`,
              state: { id: this.props.product.id }
            }}
          >
            {this.props.product.name}
          </Link>
        </h1>

        <h1>{this.props.product.price}</h1>
      </div>
    );
  }
}

export default ProductItem;
