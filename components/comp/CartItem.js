import React from "react";
var shortid = require("shortid");

function createId(text) {
  return {
    completed: false,
    id: shortid.generate(),
    text
  };
}

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    this.props.actions.deleteItem(this.props.it.id);
  }
  render() {
    return (
      <div className="cart-container">
        <div className="cart">
          <img src={this.props.it.item.product.image} />
          <div>
            <h5>{this.props.it.item.product.name}</h5>
            <p>Color: {this.props.it.item.colorSet}</p>
            <p>Size: {this.props.it.item.sizeSet}</p>
            <h5>${this.props.it.item.product.price}</h5>
            <select>
              <option value="1" defaultValue="">
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button onClick={this.delete}>Remove</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
