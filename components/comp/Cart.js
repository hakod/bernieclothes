import React from "react";
import CartItem from "./CartItem";
var shortid = require("shortid");

function createId(text) {
  return {
    completed: false,
    id: shortid.generate(),
    text
  };
}

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="cart-container">
        <h1>SHOPPING CART ({this.props.item.length})</h1>
        {this.props.item.map(item => (
          <CartItem
            actions={this.props.actions}
            item={this.props.item}
            it={item}
            key={createId().id}
          />
        ))}
      </div>
    );
  }
}

export default Cart;
