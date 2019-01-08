import React from "react";
import ProductItem from "./ProductItem";

class ProductListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    this.setState({
      loading: false
    });
  }
  render() {
    return (
      <div className="list">
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          this.props.products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        )}
      </div>
    );
  }
}

export default ProductListing;
