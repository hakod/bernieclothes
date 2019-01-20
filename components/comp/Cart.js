import React from "react";
import CartItem from "./CartItem";
var shortid = require("shortid");
import Total from "./Total";
import { Link } from "react-router-dom";

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
  componentDidMount() {
    console.log(this.props.item);
  }
  render() {
    return (
      <div>
        {this.props.item.length > 0 ? (
          <div className="contain">
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
            <Total item={this.props.item} />
          </div>
        ) : (
          <div className="empty">
            <h1>Your shopping cart is empty</h1>
            <Link to="/">Continue shopping</Link>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
