import React from "react";
import { Link } from "react-router-dom";

class Total extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipping: "7.00"
    };
  }

  render() {
    let arr = [0];
    let total = this.props.item;
    for (let i = 0; i < total.length; i++) {
      arr.push(total[i].item.product.price * total[i].qty);
    }
    let sub = arr.reduce((x, y) => x + y).toFixed(2);
    let tot = Number(sub) + Number(this.state.shipping);
    return (
      <div className="total">
        <div>
          <h2>subtotal</h2>
          <h2>${sub ? sub : null}</h2>
        </div>
        <div>
          <h2>shipping</h2>
          <h2>${this.state.shipping}</h2>
        </div>
        <div>
          <h2>estimated total</h2>
          <h2>${tot ? tot : null}</h2>
        </div>
        <Link to="/checkout">proceed</Link>
      </div>
    );
  }
}
export default Total;
